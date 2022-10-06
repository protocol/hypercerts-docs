"use strict";(self.webpackChunkhypercerts_docs=self.webpackChunkhypercerts_docs||[]).push([[123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"The HyperCert ledger",id:"ledger",sidebar_position:2},o="The HyperCert ledger",l={unversionedId:"ledger",id:"ledger",title:"The HyperCert ledger",description:"Introducing the HyperCert ledger",source:"@site/docs/ledger.md",sourceDirName:".",slug:"/ledger",permalink:"/hypercerts-docs/ledger",draft:!1,editUrl:"https://github.com/protocol/hypercerts-docs/docs/ledger.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"The HyperCert ledger",id:"ledger",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/hypercerts-docs/"},next:{title:"Background material",permalink:"/hypercerts-docs/background"}},s={},p=[{value:"Introducing the HyperCert ledger",id:"introducing-the-hypercert-ledger",level:2},{value:"Defining HyperCerts",id:"defining-hypercerts",level:2},{value:"Examples",id:"examples",level:3},{value:"Design example",id:"design-example",level:3},{value:"Functions of HyperCerts",id:"functions-of-hypercerts",level:2},{value:"Agnostic towards funding mechanism",id:"agnostic-towards-funding-mechanism",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-hypercert-ledger"},"The HyperCert ledger"),(0,a.kt)("h2",{id:"introducing-the-hypercert-ledger"},"Introducing the HyperCert ledger"),(0,a.kt)("p",null,"The HyperCert ledger is an interoperable data layer for impact-funding mechanisms. The ledger stores tokenized certificates that are NFT-like in some dimensions, but fundamentally are fungible, facilitate allocating retrospective rewards to prospective funders, and facilitate hierarchies of impact assignment and pricing mechanisms. It does all this without imposing any specific mechanisms, thereby facilitating experimentation, but provides baseline invariant guarantees such as that claims will not be forgotten as different mechanisms come into and out of fashion, and enables different kinds of mechanisms to interface naturally with each other."),(0,a.kt)("h2",{id:"defining-hypercerts"},"Defining HyperCerts"),(0,a.kt)("p",null,"Each HyperCert is an impact claim described by (1) the scope of work that has been (or will be) performed in a given time period by a set of specified contributors and (2) the scope of impact that this work has had (or will have) in another given time period. In addition, a HyperCert has the potential to declare which rights the owner of the HyperCert has, e.g. the right to publicly display the HyperCert."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Example 1"),(0,a.kt)("th",{parentName:"tr",align:null},"Example 2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Set of contributors"),(0,a.kt)("td",{parentName:"tr",align:null},"Vanessa Kosoy, Alex Appel"),(0,a.kt)("td",{parentName:"tr",align:null},"Nelson Elhage, Neel Nanda, Catherine Olsson, Tom Henighan, Nicholas Joseph, Ben Mann, Amanda Askell, Yuntao Bai, Anna Chen, Tom Conerly, Nova DasSarma, Dawn Drain, Deep Ganguli, Zac Hatfield-Dodds, Danny Hernandez, Andy Jones, Jackson Kernion, Liane Lovitt, Kamal Ndousse, Dario Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish, Chris Olah")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope of work"),(0,a.kt)("td",{parentName:"tr",align:null},"Research on Infra-Bayesianism"),(0,a.kt)("td",{parentName:"tr",align:null},"Writing the article \u201cA Mathematical Framework for Transformer Circuits\u201d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Time period of work"),(0,a.kt)("td",{parentName:"tr",align:null},"2018-01-01 to 2022-08-25"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-05-01 to 2021-12-22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope of impact"),(0,a.kt)("td",{parentName:"tr",align:null},"AI Existential Safety"),(0,a.kt)("td",{parentName:"tr",align:null},"AI Existential Safety")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Time period of impact"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-08-25 to Forever"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-08-25 to Forever")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rights"),(0,a.kt)("td",{parentName:"tr",align:null},"Public display"),(0,a.kt)("td",{parentName:"tr",align:null},"Public display")))),(0,a.kt)("h3",{id:"design-example"},"Design example"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/protocol/hypercerts-docs/main/static/img/hypercert_example.png",alt:"hypercert_example_design"})),(0,a.kt)("h2",{id:"functions-of-hypercerts"},"Functions of HyperCerts"),(0,a.kt)("p",null,"The main functions of HyperCerts are the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identification: The work and impact is unambiguously and permanently identifiable"),(0,a.kt)("li",{parentName:"ol"},"Ownership: The work and impact can be owned (incl. multiple owners with unequal fractions)"),(0,a.kt)("li",{parentName:"ol"},"Rights: Rights regarding the specified work and impact can be transferred to new owners")),(0,a.kt)("h2",{id:"agnostic-towards-funding-mechanism"},"Agnostic towards funding mechanism"),(0,a.kt)("p",null,"The HyperCert ledger doesn\u2019t impose any specific impact-funding mechanism. For examples the following types of funding are possible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Grants:")," A funder buys a HyperCert from a team before the work has been done without any conditions for the grantee"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bounties:")," A funder commits \u2013 for example via a smart contract \u2013 to buy a HyperCert from a project if a clearly defined activity has been performed or an output has been created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Retrospective evaluations:")," A team creates some impact and mints a HyperCert for it, a funder evaluates it and buys it retrospectively")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/protocol/hypercerts-docs/main/static/img/hypercert_data_layer.png",alt:"hypercert_data_layer"})),(0,a.kt)("p",null,"Beyond the types of funding, funders can, of course, also use different decision mechanisms to determine which HyperCerts they want to buy for which price. This also includes mechanisms such as a third party organizing an auction or other market mechanisms to bring buyers (funders) and sellers (teams) of HyperCerts together."),(0,a.kt)("p",null,"HyperCerts are also agnostic regarding the funding object. On the one extreme, HyperCerts can describe only the team and include any work in a specified time period and any impact they have. On the other extreme, HyperCerts can describe a very specific impact."))}d.isMDXComponent=!0}}]);