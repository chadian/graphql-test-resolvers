(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(90)),i={id:"introduction",title:"Introduction"},s={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"GraphQL has proven itself to be a powerful tool in building APIs. A single GraphQL endpoint supports an extremely",source:"@site/docs/getting-started/introduction.md",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},c=[{value:"\ud83d\udd0b Batteries Included",id:"-batteries-included",children:[]},{value:"\ud83d\udee0 Tools Included, too",id:"-tools-included-too",children:[]},{value:"\u270c\ud83c\udffd\ud83d\udc9c Share Feedback and Questions",id:"-share-feedback-and-questions",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL has proven itself to be a powerful tool in building APIs. A single GraphQL endpoint supports an extremely\nflexible query language. This has created a challenge in mocking and creating mock APIs. Unlike other libraries,\n",Object(o.b)("inlineCode",{parentName:"p"},"graphql-mocks")," does not use a single method of configuration or convention to setup mock GraphQL APIs. Instead it\nprovides a set of composable tools and utilities that can be used together to flexibly create a mock GraphQL API."),Object(o.b)("h2",{id:"-batteries-included"},"\ud83d\udd0b Batteries Included"),Object(o.b)("p",null,"Testing, mocking or prototyping, use ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-mocks")," with its GraphQL utilities, ",Object(o.b)("em",{parentName:"p"},"Resolver Map Middlewares")," and\n",Object(o.b)("em",{parentName:"p"},"Resolver Wrappers")," to get started. Use the Mirage JS Auto Resolvers Middlware for out-of-the-box stateful queries using\nan in-memory database. The ",Object(o.b)("inlineCode",{parentName:"p"},"spyWrapper")," can be used to wrap Sinon spies around resolvers easily in tests. The\n",Object(o.b)("inlineCode",{parentName:"p"},"logWrapper")," quickly gives insights into logging Resolver activity. The application of these, and more, can be\nconditionally applied to your GraphQL schema using a query-like technique called ",Object(o.b)("em",{parentName:"p"},"Highlight"),". The layering of all of\nthese creates a reusable, declarative system for creating mock GraphQL APIs."),Object(o.b)("h2",{id:"-tools-included-too"},"\ud83d\udee0 Tools Included, too"),Object(o.b)("p",null,"Managing the GraphQL API surface area of a Resolvers under different mock scenarios can be tricky. That's why this\nlibrary provides common GraphQL utilities, typescript types, and the APIs to easily create Resolver Map Middlewares and\nResolver Wrappers to help organize and speed up development. Together, these allow for the creation of reusable\nabstractions around common scenarios and contexts to organize and mock any GraphQL API. The out-of-the-box Resolver\nWrappers and Resolver Map Middlewares are built on the same underlying APIs. General-purpose abstractions can be shared\nwith the community to help others bootstrap and prototype APIs more quickly."),Object(o.b)("h2",{id:"-share-feedback-and-questions"},"\u270c\ud83c\udffd\ud83d\udc9c Share Feedback and Questions"),Object(o.b)("p",null,"There's still lots of possibilities that are under development and being explored. I would love to hear any ideas,\ncomments or feedback."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://discord.gg/eJxddt2CJS"}),"Chat on discord")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/graphql-mocks/graphql-mocks/pulls"}),"Create a pull request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/graphql-mocks/graphql-mocks/issues/new"}),"Open an issue")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.twitter.com/chadian"}),"Ping me on twitter"))))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);