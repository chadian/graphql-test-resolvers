(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{72:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return h})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return s}));var n=i(2),r=i(6),a=(i(0),i(90)),l={title:"Introducing Highlight"},h={unversionedId:"highlight/introducing-highlight",id:"highlight/introducing-highlight",isDocsHomePage:!1,title:"Introducing Highlight",description:"One of the most important parts about mocking a GraphQL API is being able to quickly and effectively target specific parts of the GraphQL Schema. Highlight is a declarative, extensible, system for describing Named Types, and their fields, of the GraphQL Schema. With this type of control it becomes quick to mock specific types and fields and use Highlights in Resolver Map Middlewares and other utilities.",source:"@site/docs/highlight/introducing-highlight.md",slug:"/highlight/introducing-highlight",permalink:"/docs/highlight/introducing-highlight",version:"current",sidebar:"docs",previous:{title:"Creating Custom Middlewares",permalink:"/docs/resolver-map/creating-middlewares"},next:{title:"Available Highlighters",permalink:"/docs/highlight/available-highlighters"}},c=[{value:"The <code>Highlight</code> instance",id:"the-highlight-instance",children:[]},{value:"References",id:"references",children:[]},{value:"Pulling Highlighted References from a <code>Highlight</code> instance",id:"pulling-highlighted-references-from-a-highlight-instance",children:[]},{value:"<code>highlight</code> Middleware Option",id:"highlight-middleware-option",children:[]}],o={rightToc:c};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the most important parts about mocking a GraphQL API is being able to quickly and effectively target specific parts of the GraphQL Schema. Highlight is a declarative, extensible, system for describing ",Object(a.b)("em",{parentName:"p"},"Named Types"),", and their fields, of the GraphQL Schema. With this type of control it becomes quick to mock specific types and fields and use Highlights in Resolver Map Middlewares and other utilities."),Object(a.b)("p",null,"Here is an brief example of using ",Object(a.b)("em",{parentName:"p"},"Highlight"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { hi, field } from '@graphql-mocks/highlight';\nimport graphqlSchema from './schema';\n\nconst highlights = hi(graphqlSchema).include(field(['Query', '*']));\n")),Object(a.b)("p",null,"In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"field")," is a Highlighter and it targets fields on the schema. The Highlighter being used with the Highlight system will capture all the fields (denoted by the ",Object(a.b)("inlineCode",{parentName:"p"},"*"),") on the ",Object(a.b)("inlineCode",{parentName:"p"},"Query")," type of the schema. Highlighters are what are used to declaratively identify the different parts of a GraphQL schema. There are ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/highlight/available-highlighters"}),"more highlighters")," to check out, also learn how to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/highlight/creating-highlighters"}),"create your own"),"."),Object(a.b)("h2",{id:"the-highlight-instance"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"Highlight")," instance"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { hi, Highlight } from '@graphql-mocks/highlight';\nimport graphqlSchema from './schema';\nconst h1 = hi(graphqlSchema);\nconst h2 = new Highlight(graphqlSchema);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"hi")," or the ",Object(a.b)("inlineCode",{parentName:"p"},"Highlight")," constructor can be imported from ",Object(a.b)("inlineCode",{parentName:"p"},"@graphql-mocks/highlight")," and both will produce a ",Object(a.b)("inlineCode",{parentName:"p"},"Highlight")," instance. An instance has three available methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"include")," - Add additional highlights/references to be included"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"exclude")," - Remove specified highlights/references from being included"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"filter")," - Filter the existing selection to include the specified highlights/references")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," All three of these take the same arguments, as many Higlighters or ",Object(a.b)("inlineCode",{parentName:"p"},"Reference"),"s to include/exclude/filter, and return a new ",Object(a.b)("inlineCode",{parentName:"p"},"Highlight")," instance. That is each instance is ",Object(a.b)("em",{parentName:"p"},"immutable")," and any modification through its public APIs produces a new instance."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Highlight all Query and Mutation fields while excluding the Query.users field")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const highlights = hi(graphqlSchema)\n  .include(field(['Query', '*'], ['Mutation', '*']))\n  .exclude(field(['Query', 'users']));\n")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("p",null,"The underlying primitive for Highlight and many of the utilities in graphql-mocks are References. References can define:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GraphQL types by a single string as a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/api/modules/_highlight_types_.html#typereference"}),"Type Reference"),", ",Object(a.b)("inlineCode",{parentName:"li"},'"Query"')," for example"),Object(a.b)("li",{parentName:"ul"},"GraphQL fields by a tuple ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/api/modules/_highlight_types_.html#fieldreference"}),"Field Reference")," ",Object(a.b)("inlineCode",{parentName:"li"},'["Query", "allUsers"]')," of the type name and field name.")),Object(a.b)("p",null,"Any functions using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_highlight_types_.html#reference"}),Object(a.b)("inlineCode",{parentName:"a"},"Reference"))," type accept either a Type Reference or a Field Reference."),Object(a.b)("h2",{id:"pulling-highlighted-references-from-a-highlight-instance"},"Pulling Highlighted References from a ",Object(a.b)("inlineCode",{parentName:"h2"},"Highlight")," instance"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"Highlight")," instance stores the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/highlight/introducing-highlight#references"}),"References")," that have been highlighted. These can be pulled and used for many of the underlying utilities that use ",Object(a.b)("inlineCode",{parentName:"p"},"Reference"),"s for arguments."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const higlights = hi(graphqlSchema).include(field(['Query', '*']));\nconsole.log(highlights);\n")),Object(a.b)("p",null,"Would log a list of highlighted references, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"[\n  ['Query', 'users'],\n  ['Query', 'customers'],\n  ['Query', 'products']\n  // ... including all other highlighted References\n]\n")),Object(a.b)("h2",{id:"highlight-middleware-option"},Object(a.b)("inlineCode",{parentName:"h2"},"highlight")," Middleware Option"),Object(a.b)("p",null,"Much of the highlighting will happen in Resolver Map Middlewares or as arguments for Resolver Map Middlewares, like with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/resolver-map/managing-resolvers#wrap-existing-resolvers-with-resolver-wrappers"}),Object(a.b)("inlineCode",{parentName:"a"},"embed")),". It is useful to support a ",Object(a.b)("inlineCode",{parentName:"p"},"highlight")," argument that conforms to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_highlight_types_.html#coerciblehighlight"}),Object(a.b)("inlineCode",{parentName:"a"},"CoercibleHighlight"))," interface and provides a flexible argument for users of the Middleware. More on this design pattern is covered in Creating Middlewares, but it's usually easiest to supply a callback where the highlight instance is already provided:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"middleware({\n  highlight: (h) => h.include(field(['Query', '*']))\n});\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"CoercibleHighlight")," type includes raw ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/highlight/introducing-highlight#references"}),"References"),"."))}s.isMDXComponent=!0},90:function(e,t,i){"use strict";i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return b}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):h(h({},t),e)),i},g=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),g=s(i),d=n,b=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return i?r.a.createElement(b,h(h({ref:t},o),{},{components:i})):r.a.createElement(b,h({ref:t},o))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var h={};for(var c in t)hasOwnProperty.call(t,c)&&(h[c]=t[c]);h.originalType=e,h.mdxType="string"==typeof e?e:n,l[1]=h;for(var o=2;o<a;o++)l[o]=i[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);