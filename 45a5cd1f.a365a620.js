(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),o=(r(0),r(90)),l={id:"concepts",title:"Concepts"},i={unversionedId:"concepts",id:"concepts",isDocsHomePage:!1,title:"Concepts",description:"These are some concepts and terms you might see when looking to mock your GraphQL API.",source:"@site/docs/concepts.md",slug:"/concepts",permalink:"/docs/concepts",version:"current",sidebar:"docs",previous:{title:"Quick Example",permalink:"/docs/getting-started/quick-example"},next:{title:"Using Resolvers",permalink:"/docs/resolver/using-resolvers"}},s=[{value:"GraphQL Concepts",id:"graphql-concepts",children:[{value:"Resolver",id:"resolver",children:[]},{value:"Resolver Map",id:"resolver-map",children:[]}]},{value:"Library Concepts",id:"library-concepts",children:[{value:"Resolver Wrapper",id:"resolver-wrapper",children:[]},{value:"Resolver Map Middleware",id:"resolver-map-middleware",children:[]},{value:"Highlight",id:"highlight",children:[]}]},{value:"GraphQL Handler",id:"graphql-handler",children:[]},{value:"A Note on Composability",id:"a-note-on-composability",children:[]}],c={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These are some concepts and terms you might see when looking to mock your GraphQL API."),Object(o.b)("h2",{id:"graphql-concepts"},"GraphQL Concepts"),Object(o.b)("p",null,"Since this library aims at mimicking a GraphQL API server it is focuses on the ",Object(o.b)("em",{parentName:"p"},"execution")," and resolution of queries. We\nuse Resolvers and Resolver Maps to handle this execution. The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/execution"}),"graphql docs")," have\nsome useful information around these concepts. With a Resolver Map, and any optional Middlewares, a GraphQL Handler be\ncreated to resolve queries."),Object(o.b)("h3",{id:"resolver"},"Resolver"),Object(o.b)("p",null,"Resolvers are functions that are responsible for returning the data for a field on a type."),Object(o.b)("p",null,"For the given schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"schema {\n  query: Query\n}\n\n# Query is the type\ntype Query {\n  # `helloWorld` is the field on the Query type that should\n  # resolve to a string\n  helloWorld: String!\n}\n")),Object(o.b)("p",null,"A resolver function for the ",Object(o.b)("inlineCode",{parentName:"p"},"helloWorld")," field could be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const resolverFunction = function (obj, args, context, info) {\n  return 'Hello world, from a GraphQL Resolver!';\n};\n")),Object(o.b)("p",null,"This resolver function on its own isn't very useful, we need to attach it to a field on a Resolver Map. To learn more\nabout resolvers themselves check out this part of the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/execution/#root-fields-resolvers"}),"graphql documentation"),"."),Object(o.b)("p",null,"Note: Usually, Resolvers refer to Field Resolvers (which resolve data for a field), however, there are also Type\nResolvers which instead resolve to a concrete ",Object(o.b)("em",{parentName:"p"},"Type")," for Abstract Types like\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/schema/#interfaces"}),"Interfaces")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/schema/#union-types"}),"Unions"),".\nThis is covered more in the Resolver section of these guides."),Object(o.b)("h3",{id:"resolver-map"},"Resolver Map"),Object(o.b)("p",null,"Resolver Maps are a collection of resolvers keyed by type and field. Here's the same schema and resolver function from\nabove being used within a Resolver Map."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"# Query is the type\ntype Query {\n  helloWorld: String!\n}\n")),Object(o.b)("p",null,"A Resolver Map for this schema could look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const resolverMap = {\n  // Query is the first property representing the Query type\n  Query: {\n    // the `helloWorld` property on Query represents the field\n    // on Query, and attached to it is our resolverFunction form above\n    helloWorld: resolverFunction,\n  },\n};\n")),Object(o.b)("p",null,"With a Resolver Map the types, fields, and resolvers are enough to completely resolve queries. This library provides\ntools to setup, extend, and organize both Resolver Maps and Resolvers."),Object(o.b)("h2",{id:"library-concepts"},"Library Concepts"),Object(o.b)("p",null,"This library provides functionality to extend resolvers and make modifications to Resolver Maps."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"GraphQL Concept"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"th"},"graphql-mocks")," Concept"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resolver"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resolver Wrapper")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resolver Map"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resolver Map Middleware")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Highlight")))),Object(o.b)("h3",{id:"resolver-wrapper"},"Resolver Wrapper"),Object(o.b)("p",null,"Resolver Wrappers provide a functional way of extending and wrapping a Resolver function. Wrappers are given a Resolver\nand are responsible for returning a Resolver. They provide a good way of introspecting and controlling the result of a\nResolver and can be applied to Resolvers flexibly using utilities like ",Object(o.b)("inlineCode",{parentName:"p"},"embed")," and ",Object(o.b)("inlineCode",{parentName:"p"},"layer"),"."),Object(o.b)("p",null,"Learn more about different types of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolver/using-resolvers"}),"Resolvers")," and about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolver/introducing-wrappers"}),"Resolver Wrappers"),"."),Object(o.b)("h3",{id:"resolver-map-middleware"},"Resolver Map Middleware"),Object(o.b)("p",null,"Resolver Map Middlewares apply transformations to a Resolver Map. A Middleware function is responsible for taking in a\nResolver Map and returning a, potentially modified, Resolver Map. You can save these Middlewares to re-use, mix and\nmatch, and combine them for different scenarios. This is handy because for the number of mock scenarios that must be handled it's important to have declarative control over the Resolver landscape."),Object(o.b)("p",null,"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolver-map/using-resolver-maps"}),"Resolver Maps")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolver-map/introducing-middlewares"}),"Resolver Map Middlewares"),"."),Object(o.b)("h3",{id:"highlight"},"Highlight"),Object(o.b)("p",null,"The ability to select the parts of the schema to operate on, and mock, is made easier by using the declarative Highlight\nsystem. You will most likely encounter Highlight when interacting with Resolver Map Middlewares to apply modifications\nto specific parts of the GraphQL Schema. This allows middlewares to work in tandem without over each other."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Using the ",Object(o.b)("inlineCode",{parentName:"em"},"field")," highlighter highlight all fields, on all types, excluding the ",Object(o.b)("inlineCode",{parentName:"em"},"Mutation.addUser"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"highlight(graphqlSchema)\n  .include(field([HIGHLIGHT_ALL, HIGHLIGHT_ALL]))\n  .exclude(field(['Mutation', 'addUser']));\n")),Object(o.b)("p",null,"Learn the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/highlight/introducing-highlight"}),"basics of Highlight"),", the ones that are\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/highlight/available-highlighters"}),"provided out-of-the-box"),", and how to\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/highlight/creating-highlighters"}),"create your own"),"."),Object(o.b)("h2",{id:"graphql-handler"},"GraphQL Handler"),Object(o.b)("p",null,"This library aims at making it easy to get setup and firing off queries by including\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/create-handler"}),"a GraphQL Handler"),". A GraphQL Handler will take a query and variables, and apply\nit against a GraphQL Schema and its Resolver Map."),Object(o.b)("p",null,"Already have a GraphQL Handler setup, maybe from using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools"),"? You can still use ",Object(o.b)("inlineCode",{parentName:"p"},"pack")," to create a Resolver\nMap that includes the Middlewares and Wrappers and everything necessary to pass to your existing setup."),Object(o.b)("h2",{id:"a-note-on-composability"},"A Note on Composability"),Object(o.b)("p",null,"Both Resolver Map Middlewares and Resolver Wrappers are based around functional composition so that they can be applied\nflexibly. This flexibility is often powered by the ",Object(o.b)("em",{parentName:"p"},"Highlight")," system to selectively apply the operation to specific\nparts of the schema. Flexibility is considered important here because it empowers the creation of specific mock and test\nGraphQL APIs scenarios. This is done in a way that is easier and clearer than managing Resolvers and Resolver Maps by\nhand or leaving everything up to a rigidly automatic solution (which can also be codified with this libraries\nprimitives)."))}p.isMDXComponent=!0},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(r),h=a,u=b["".concat(l,".").concat(h)]||b[h]||d[h]||o;return r?n.a.createElement(u,i(i({ref:t},c),{},{components:r})):n.a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);