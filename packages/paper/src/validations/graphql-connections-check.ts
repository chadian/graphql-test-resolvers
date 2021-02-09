import { GraphQLSchema, isListType, isObjectType } from 'graphql';
import { DataStore, Document } from '../types';
import { findDocumentForType } from '../utils/find-document-for-type';
import { getConnections } from '../utils/get-connections';
import { typeExists } from '../utils/graphql/type-exists';
import { unwrap } from '../utils/graphql/unwrap';
import { FieldDoesNotExistOnType } from './errors/field-does-not-exist-on-type';
import { TypeDoesNotExist } from './errors/type-does-not-exist';
import { TypeIsNotDocumentCompatible } from './errors/type-is-not-document-compatible';
import { graphqlTypeCheck } from './graphql-type-check';

type Options = {
  graphqlSchema: GraphQLSchema;
  typename: string;
  document: Document;
  data: DataStore;
};

export function graphqlConnectionsCheck({ graphqlSchema, typename, document, data }: Options): void {
  if (!typeExists(graphqlSchema, typename)) {
    throw new TypeDoesNotExist({ typename });
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const type = graphqlSchema.getType(typename)!;

  if (!isObjectType(type)) {
    throw new TypeIsNotDocumentCompatible({ type });
  }

  const graphqlTypeFields = type.getFields();
  const documentConnections = getConnections(document);

  // TODO: Loop and check fields that must be non-null either through a connection
  // or because they have an attached pojo
  // maybe that is a separate validation

  for (const documentConnectionField in documentConnections) {
    if (!graphqlTypeFields[documentConnectionField]) {
      throw new FieldDoesNotExistOnType({ type, fieldName: documentConnectionField });
    }

    const fieldDocumentKeys = Array.from(documentConnections[documentConnectionField]);
    const graphqlField = graphqlTypeFields[documentConnectionField];

    if (!isListType(graphqlField.type) && fieldDocumentKeys.length > 0) {
      throw new Error(
        `Multiple connections can only exist for fields with a list return type. Field ${graphqlField.name} on ${typename} has a singular return type of ${graphqlField.type.name}`,
      );
    }

    // TODO: How to allow nulls mixed with data in list types
    // ie: [Item] could be represented by [null, Item, null, Item] and still be valid

    for (const documentKey in fieldDocumentKeys) {
      const connectedDocument = findDocumentForType(data, typename, documentKey);

      if (!connectedDocument) {
        throw new Error('Document not found');
      }

      const fieldType = unwrap(graphqlField.type);
      try {
        graphqlTypeCheck({ graphqlSchema, typename: fieldType.name, document: connectedDocument });
      } catch (e) {
        throw new Error(
          `Found connection via ${documentKey} for ${documentConnectionField} on ${typename} but it did not conform to expected ${fieldType.name}`,
        );
      }
    }
  }
}
