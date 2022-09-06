"use strict";(self.webpackChunkhypercerts=self.webpackChunkhypercerts||[]).push([[246],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},834:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},i="Solidity API",p={unversionedId:"contracts/index",id:"contracts/index",title:"Solidity API",description:"HypercertMinterV0",source:"@site/docs/contracts/index.md",sourceDirName:"contracts",slug:"/contracts/",permalink:"/hypercerts-docs/contracts/",draft:!1,editUrl:"https://github.com/protocol/hypercerts-docs/docs/contracts/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"2022_08_30_Weekly_Checkin",permalink:"/hypercerts-docs/meeting-notes/2022_08_30_Weekly_Checkin"}},d={},m=[{value:"HypercertMinterV0",id:"hypercertminterv0",level:2},{value:"_version",id:"_version",level:3},{value:"UPGRADER_ROLE",id:"upgrader_role",level:3},{value:"counter",id:"counter",level:3},{value:"workScopes",id:"workscopes",level:3},{value:"impactScopes",id:"impactscopes",level:3},{value:"rights",id:"rights",level:3},{value:"contributorImpacts",id:"contributorimpacts",level:3},{value:"impactCerts",id:"impactcerts",level:3},{value:"Claim",id:"claim",level:3},{value:"ImpactClaimed",id:"impactclaimed",level:3},{value:"ImpactScopeAdded",id:"impactscopeadded",level:3},{value:"RightAdded",id:"rightadded",level:3},{value:"WorkScopeAdded",id:"workscopeadded",level:3},{value:"constructor",id:"constructor",level:3},{value:"initialize",id:"initialize",level:3},{value:"addImpactScope",id:"addimpactscope",level:3},{value:"addRight",id:"addright",level:3},{value:"addWorkScope",id:"addworkscope",level:3},{value:"mint",id:"mint",level:3},{value:"getImpactCert",id:"getimpactcert",level:3},{value:"uri",id:"uri",level:3},{value:"version",id:"version",level:3},{value:"supportsInterface",id:"supportsinterface",level:3},{value:"_authorizeUpgrade",id:"_authorizeupgrade",level:3},{value:"_beforeTokenTransfer",id:"_beforetokentransfer",level:3},{value:"_parseData",id:"_parsedata",level:3},{value:"_storeContributorsClaims",id:"_storecontributorsclaims",level:3},{value:"_hash",id:"_hash",level:3},{value:"_hasKey",id:"_haskey",level:3},{value:"HypercertMinterV1",id:"hypercertminterv1",level:2},{value:"NAME",id:"name",level:3},{value:"version",id:"version-1",level:3}],o={toc:m};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solidity-api"},"Solidity API"),(0,r.kt)("h2",{id:"hypercertminterv0"},"HypercertMinterV0"),(0,r.kt)("p",null,"Contains functions and events to initialize and issue a hypercertificate"),(0,r.kt)("h3",{id:"_version"},"_","version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint16 _version\n")),(0,r.kt)("p",null,"Current version of the contract"),(0,r.kt)("h3",{id:"upgrader_role"},"UPGRADER_ROLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 UPGRADER_ROLE\n")),(0,r.kt)("p",null,"User role required in order to upgrade the contract"),(0,r.kt)("h3",{id:"counter"},"counter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 counter\n")),(0,r.kt)("p",null,"Counter incremented to form the hypercertificate Id"),(0,r.kt)("h3",{id:"workscopes"},"workScopes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes32 => string) workScopes\n")),(0,r.kt)("p",null,"Mapping of id's to work-scopes"),(0,r.kt)("h3",{id:"impactscopes"},"impactScopes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes32 => string) impactScopes\n")),(0,r.kt)("p",null,"Mapping of id's to impact-scopes"),(0,r.kt)("h3",{id:"rights"},"rights"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes32 => string) rights\n")),(0,r.kt)("p",null,"Mapping of id's to rights"),(0,r.kt)("h3",{id:"contributorimpacts"},"contributorImpacts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => mapping(bytes32 => bool)) contributorImpacts\n")),(0,r.kt)("p",null,"Mapping of contributor addresses to impact-scopes"),(0,r.kt)("h3",{id:"impactcerts"},"impactCerts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(uint256 => struct HypercertMinterV0.Claim) impactCerts\n")),(0,r.kt)("p",null,"Mapping of id's to hypercertificates"),(0,r.kt)("h3",{id:"claim"},"Claim"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Claim {\n  bytes32 claimHash;\n  address[] contributors;\n  uint256[2] workTimeframe;\n  uint256[2] impactTimeframe;\n  bytes32[] workScopes;\n  bytes32[] impactScopes;\n  bytes32[] rights;\n  uint256 version;\n  bool exists;\n}\n\n")),(0,r.kt)("h3",{id:"impactclaimed"},"ImpactClaimed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event ImpactClaimed(uint256 id, bytes32 claimHash, address[] contributors, uint256[2] workTimeframe, uint256[2] impactTimeframe, bytes32[] workScopes, bytes32[] impactScopes, bytes32[] rights, uint256 version, string uri)\n")),(0,r.kt)("p",null,"Emitted when an impact is claimed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the claimed impact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claimHash"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Hash value of the claim data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contributors"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Contributors to the claimed impact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workTimeframe"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256","[2]"),(0,r.kt)("td",{parentName:"tr",align:null},"To/from date of the work related to the claim.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"impactTimeframe"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256","[2]"),(0,r.kt)("td",{parentName:"tr",align:null},"To/from date of the claimed impact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workScopes"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Id's relating to the scope of the work.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"impactScopes"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Id's relating to the scope of the impact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rights"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Id's relating to the rights applied to the hypercert.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the hypercert.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the metadata of the hypercert.")))),(0,r.kt)("h3",{id:"impactscopeadded"},"ImpactScopeAdded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event ImpactScopeAdded(bytes32 id, string text)\n")),(0,r.kt)("p",null,"Emitted when a new impact scope is added."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the impact scope.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Short text code of the impact scope.")))),(0,r.kt)("h3",{id:"rightadded"},"RightAdded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event RightAdded(bytes32 id, string text)\n")),(0,r.kt)("p",null,"Emitted when a new right is added."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the right.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Short text code of the right.")))),(0,r.kt)("h3",{id:"workscopeadded"},"WorkScopeAdded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event WorkScopeAdded(bytes32 id, string text)\n")),(0,r.kt)("p",null,"Emitted when a new work scope is added."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the work scope.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Short text code of the work scope.")))),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor() public\n")),(0,r.kt)("p",null,"Contract constructor logic"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialize() public\n")),(0,r.kt)("p",null,"Contract initialization logic"),(0,r.kt)("h3",{id:"addimpactscope"},"addImpactScope"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function addImpactScope(string text) public returns (bytes32 id)\n")),(0,r.kt)("p",null,"Adds a new impact scope"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Text representing the impact scope")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the impact scope")))),(0,r.kt)("h3",{id:"addright"},"addRight"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function addRight(string text) public returns (bytes32 id)\n")),(0,r.kt)("p",null,"Adds a new right"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Text representing the right")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the right")))),(0,r.kt)("h3",{id:"addworkscope"},"addWorkScope"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function addWorkScope(string text) public returns (bytes32 id)\n")),(0,r.kt)("p",null,"Adds a new work scope"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Text representing the work scope")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the work scope")))),(0,r.kt)("h3",{id:"mint"},"mint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(address account, uint256 amount, bytes data) public\n")),(0,r.kt)("p",null,"Issues a new hypercertificate"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Account issuing the new hypercertificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of the new hypercertificate to mint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Data representing the parameters of the claim")))),(0,r.kt)("h3",{id:"getimpactcert"},"getImpactCert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getImpactCert(uint256 claimID) public view returns (struct HypercertMinterV0.Claim)\n")),(0,r.kt)("p",null,"Gets the impact claim with the specified id"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claimID"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the claim")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"struct HypercertMinterV0.Claim"),(0,r.kt)("td",{parentName:"tr",align:null},"The claim, if it exists")))),(0,r.kt)("h3",{id:"uri"},"uri"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function uri(uint256 tokenId) public view returns (string)\n")),(0,r.kt)("p",null,"Auto-generated by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/wizard"},"https://docs.openzeppelin.com/contracts/4.x/wizard")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Selects which base implementation to call")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the token")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the token")))),(0,r.kt)("h3",{id:"version"},"version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function version() public pure virtual returns (uint256)\n")),(0,r.kt)("p",null,"Gets the current version of the contract"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the contract")))),(0,r.kt)("h3",{id:"supportsinterface"},"supportsInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(bytes4 interfaceId) public view returns (bool)\n")),(0,r.kt)("p",null,"Returns a flag indicating if the contract supports the specified interface"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interfaceId"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes4"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the interface")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"true, if the interface is supported")))),(0,r.kt)("h3",{id:"_authorizeupgrade"},"_","authorizeUpgrade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _authorizeUpgrade(address) internal view\n")),(0,r.kt)("p",null,"upgrade authorization logic"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"adds onlyRole(UPGRADER_ROLE) requirement")),(0,r.kt)("h3",{id:"_beforetokentransfer"},"_","beforeTokenTransfer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal\n")),(0,r.kt)("p",null,"auto-generated by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/wizard"},"https://docs.openzeppelin.com/contracts/4.x/wizard")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"selects which base implementation to call")),(0,r.kt)("h3",{id:"_parsedata"},"_","parseData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _parseData(bytes data) internal pure virtual returns (struct HypercertMinterV0.Claim claim, string)\n")),(0,r.kt)("p",null,"Parse bytes to Claim and URI"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This function is overridable in order to support future schema changes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Byte data representing the claim")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claim"),(0,r.kt)("td",{parentName:"tr",align:null},"struct HypercertMinterV0.Claim"),(0,r.kt)("td",{parentName:"tr",align:null},"The parsed Claim struct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[1]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Claim metadata URI")))),(0,r.kt)("h3",{id:"_storecontributorsclaims"},"_","storeContributorsClaims"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _storeContributorsClaims(bytes32 claimHash, address[] creators) internal\n")),(0,r.kt)("p",null,"Stores contributor claims in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contributorImpacts")," mapping; guards against overlapping claims"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claimHash"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"Claim data hash-code value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creators"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of addresses for contributors")))),(0,r.kt)("h3",{id:"_hash"},"_","hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _hash(string value) internal pure returns (bytes32)\n")),(0,r.kt)("p",null,"Hash the specified string value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string to hash")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"a keccak256 hash-code")))),(0,r.kt)("h3",{id:"_haskey"},"_","hasKey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _hasKey(mapping(bytes32 => string) map, bytes32 key) internal view returns (bool)\n")),(0,r.kt)("p",null,"Checks whether the supplied mapping contains the supplied key"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"mapping(bytes32 ","=",">"," string)"),(0,r.kt)("td",{parentName:"tr",align:null},"mapping to search")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"key to search")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"true, if the key exists in the mapping")))),(0,r.kt)("h2",{id:"hypercertminterv1"},"HypercertMinterV1"),(0,r.kt)("p",null,"Contains functions and events to initialize and issue a hypercert"),(0,r.kt)("h3",{id:"name"},"NAME"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"string NAME\n")),(0,r.kt)("h3",{id:"version-1"},"version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function version() public pure virtual returns (uint256)\n")),(0,r.kt)("p",null,"gets the current version of the contract"))}u.isMDXComponent=!0}}]);