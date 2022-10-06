"use strict";(self.webpackChunkhypercerts_docs=self.webpackChunkhypercerts_docs||[]).push([[971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Introduction",id:"intro",sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Impact Certificates have been proposed to track and reward positive effects people\u2019s actions have had on the world. The general idea is that, when someone has a positive impact, and someone else rewards them, there could be some notion of robustly demonstrating your support of causes like environmental conservation or humanitarian aid, in the way that a signed album or the home-run-winning baseball can show your support of a musician or player.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/hypercerts-docs/",draft:!1,editUrl:"https://github.com/protocol/hypercerts-docs/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",id:"intro",sidebar_position:1},sidebar:"docsSidebar",next:{title:"The HyperCert ledger",permalink:"/hypercerts-docs/ledger"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Impact Certificates")," have been proposed to track and reward positive effects people\u2019s actions have had on the world. The general idea is that, when someone has a positive impact, and someone else rewards them, there could be some notion of robustly demonstrating your support of causes like environmental conservation or humanitarian aid, in the way that a signed album or the home-run-winning baseball can show your support of a musician or player.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HyperCerts (aka hypercertificates)")," are a specific interoperable data layer for impact certificates and impact-funding mechanisms. They facilitate allocating retrospective rewards to creators of impact and to prospective funders, and facilitate hierarchies of credit assignment and pricing mechanisms. HyperCerts don\u2019t impose any specific funding mechanisms, thereby facilitating experimentation."),(0,o.kt)("p",null,"The purpose of the development is twofold: We want to (1) specify HyperCerts as an interoperable data layer for impact-funding mechanisms and (2) create the first applications to implement a user-friendly retrospective impact-funding mechanism through impact markets."),(0,o.kt)("p",null,"The users of the applications are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Creators"),": Individuals and organizations who create impactful goods that currently don\u2019t have a profitable business model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Funders"),": Investors, philanthropists, foundations, and other institutions that fund creators to create positive impact."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Evaluators"),": Experts, institutions, and groups of beneficiaries or users who evaluate the impact of goods.")),(0,o.kt)("p",null,"This documentation here tracks public material (videos, writing, prototypes, etc.) about HyperCerts. It is maintained by a multi-organization collaboration of engineers, scientists, founders, and donors working to implement and deploy HyperCerts."),(0,o.kt)("p",null,"If you have descriptions or progress deploying HyperCerts, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:hypercerts@protocol.ai"},"hypercerts@protocol.ai")," or join this ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+YF9AYb6zCv1mNDJi"},"telegram group")," to have your content added here."))}u.isMDXComponent=!0}}]);