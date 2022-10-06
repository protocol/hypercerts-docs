"use strict";(self.webpackChunkhypercerts_docs=self.webpackChunkhypercerts_docs||[]).push([[98],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Data Model",p={unversionedId:"refinement/data-model",id:"refinement/data-model",title:"Data Model",description:"HyperCert v0.1",source:"@site/docs/refinement/data-model.md",sourceDirName:"refinement",slug:"/refinement/data-model",permalink:"/hypercerts-docs/refinement/data-model",draft:!1,editUrl:"https://github.com/protocol/hypercerts-docs/docs/refinement/data-model.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Refinement",permalink:"/hypercerts-docs/refinement"},next:{title:"Minting",permalink:"/hypercerts-docs/refinement/mint"}},l={},s=[{value:"HyperCert v0.1",id:"hypercert-v01",level:2},{value:"Tree planting",id:"tree-planting",level:3},{value:"June 2022 Funding the Commons event",id:"june-2022-funding-the-commons-event",level:3},{value:"Clean an oceanic garbage patch",id:"clean-an-oceanic-garbage-patch",level:3},{value:"Provide social housing to a certain set of tenants over a period of time",id:"provide-social-housing-to-a-certain-set-of-tenants-over-a-period-of-time",level:3},{value:"HyperCert metadata v0.1",id:"hypercert-metadata-v01",level:2},{value:"Evaluation",id:"evaluation",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-model"},"Data Model"),(0,r.kt)("h2",{id:"hypercert-v01"},"HyperCert v0.1"),(0,r.kt)("p",null,"Every HyperCert is an impact claim defined in a hyperspace with the following dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time interval of work: Start and end date of work, both can be in the past or future"),(0,r.kt)("li",{parentName:"ul"},"Scope of work: Description of the work that produced or will produce impact"),(0,r.kt)("li",{parentName:"ul"},"Time interval of impact: Start and end date of the impact that is included, both can be in the past or future"),(0,r.kt)("li",{parentName:"ul"},"Scope of impact: Description of the impact that has been or will be produced by the work. This dimension is can be described by multiple fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description of impact: Text to describe the impact"),(0,r.kt)("li",{parentName:"ul"},"Impact variables: Sets of variable types (string), values (string or decimal), able to aggregate (boolean), optional maximal value (decimal) and optional display type, e.g. {\u201cCO2e stored in tons\u201d, 500, true}. These can be implemented analogous to attributes in the OpenSea metadata recommendations."))),(0,r.kt)("li",{parentName:"ul"},"Set of creators: Addresses of all individual creators who contributed to the work"),(0,r.kt)("li",{parentName:"ul"},"Types of rights: Description of rights that the owners of the HyperCerts have, e.g. the right to publicly display or IP rights")),(0,r.kt)("p",null,"Below we provide some examples of the data provided to the HyperCert minter. See the segment on ",(0,r.kt)("a",{parentName:"p",href:"#hypercert-metadata-v0.1"},"metadata")," on how to provide additional data on your impact."),(0,r.kt)("h3",{id:"tree-planting"},"Tree planting"),(0,r.kt)("p",null,"A project for planting trees called ",(0,r.kt)("inlineCode",{parentName:"p"},"Save the trees")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"bought land")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Spain")," and worked ",(0,r.kt)("inlineCode",{parentName:"p"},"100 hours")," between ",(0,r.kt)("inlineCode",{parentName:"p"},"1 august 2021")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"31 december 2021"),". Under the assumption that the trees prosper from now until eternity, the impact is from ",(0,r.kt)("inlineCode",{parentName:"p"},"1 january 2022")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"the distant future"),". During the project ",(0,r.kt)("inlineCode",{parentName:"p"},"volunteers")," were enrolled, ",(0,r.kt)("inlineCode",{parentName:"p"},"financial support")," was raised, ",(0,r.kt)("inlineCode",{parentName:"p"},"material support")," was provided, and ",(0,r.kt)("inlineCode",{parentName:"p"},"referrals")," were recruited"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "creators": ["ethAddress1", "ethAddress2", ...],\n    "work_scope": ["Tree-planting", "Spain", "volunteer labor", "financial support", "material support", "referrals"],\n    "work_time": [1627776000,1640995199],\n    "impact_scope": [],\n    "impact_time": [1640995200, 0],\n    "rights": [],\n    "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"\n}\n')),(0,r.kt)("h3",{id:"june-2022-funding-the-commons-event"},"June 2022 Funding the Commons event"),(0,r.kt)("p",null,"Funding the Commons is an event series that explores novel funding mechanisms for the commons and public goods. Recently, a two-day summit was held from ",(0,r.kt)("inlineCode",{parentName:"p"},"June 24-25, 2022"),", in ",(0,r.kt)("inlineCode",{parentName:"p"},"NYC")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"individuals")," and organizations building new funding models and working to improve value alignment in open source networks. The event was organised from ",(0,r.kt)("inlineCode",{parentName:"p"},"January 1st 2022")," untill the event was wrapped up ",(0,r.kt)("inlineCode",{parentName:"p"},"end of June"),". We estimate that impact from the event is highest in the ",(0,r.kt)("inlineCode",{parentName:"p"},"following six months"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "creators": ["daoAddress"],\n  "work_scope": ["Event", "Funding the Commons", "FundingTheCommons/Jun\'22"],\n  "work_time": [1640995200, 1656633599],\n  "impact_scope": [],\n  "impact_time": [1656633600, 1672531199],\n  "rights": [],\n  "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"\n}\n')),(0,r.kt)("h3",{id:"clean-an-oceanic-garbage-patch"},"Clean an oceanic garbage patch"),(0,r.kt)("p",null,"During the last ",(0,r.kt)("inlineCode",{parentName:"p"},"four years")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CleanOceanDAO")," coordinated actions and resources for removing plastic ",(0,r.kt)("inlineCode",{parentName:"p"},"pollution")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ocean"),". The DAO provided ",(0,r.kt)("inlineCode",{parentName:"p"},"financial support"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "creators": ["daoAddress"],\n  "work_scope": ["Pollution", "Ocean", "financial support"],\n  "work_time": [1534291200, 1660607999],\n  "impact_scope": [],\n  "impact_time": [1534291200, 0],\n  "rights": [],\n  "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"\n}\n')),(0,r.kt)("h3",{id:"provide-social-housing-to-a-certain-set-of-tenants-over-a-period-of-time"},"Provide social housing to a certain set of tenants over a period of time"),(0,r.kt)("p",null,"Groups of volunteers provided ",(0,r.kt)("inlineCode",{parentName:"p"},"housing")," for a group of ",(0,r.kt)("inlineCode",{parentName:"p"},"refugees")," for the course of a ",(0,r.kt)("inlineCode",{parentName:"p"},"month"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "creators": ["daoAddress"],\n  "work_scope": ["Community", "Refugee", "material support"],\n  "work_time": [1593561600, 1596239999],\n  "impact_scope": [],\n  "impact_time": [1593561600, 1596239999],\n  "rights": [],\n  "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"\n}\n')),(0,r.kt)("h2",{id:"hypercert-metadata-v01"},"HyperCert metadata v0.1"),(0,r.kt)("p",null,"The metadata is to be provided as a JSON stored on IPFS. The metadata must at least match the minimal spec based on ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155#metadata"},"EIP1155 specification"),", but additional fields can be added when required. We recommend using the ",(0,r.kt)("inlineCode",{parentName:"p"},"refs")," field to linking to external resources."),(0,r.kt)("p",null,"Minimum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "demo impact",\n  "image": "ipfs://QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",\n  "format_version": 0.1,\n  "description": "built code v0.0.1"\n}\n')),(0,r.kt)("p",null,"Expanded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "demo impact",\n  "image": "ipfs://QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",\n  "external_link": "http://example.com",\n  "format_version": 0.1,\n  "description": "built code v0.0.1",\n  "prev_hypercert": "2mbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",\n  "refs": [\n    "http://ipfsconference.com/impact",\n    "https://researcgate.net/paper.pdf"\n  ]\n}\n')),(0,r.kt)("h2",{id:"evaluation"},"Evaluation"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Placeholder")))}m.isMDXComponent=!0}}]);