"use strict";(self.webpackChunkhypercerts=self.webpackChunkhypercerts||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="2022_08_30_Weekly_Checkin",l={unversionedId:"meeting-notes/2022_08_30_Weekly_Checkin",id:"meeting-notes/2022_08_30_Weekly_Checkin",title:"2022_08_30_Weekly_Checkin",description:"Participants",source:"@site/docs/meeting-notes/2022_08_30_Weekly_Checkin.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2022_08_30_Weekly_Checkin",permalink:"/hypercerts-docs/meeting-notes/2022_08_30_Weekly_Checkin",draft:!1,editUrl:"https://github.com/protocol/hypercerts-docs/docs/meeting-notes/2022_08_30_Weekly_Checkin.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"2022-08-09 Sync Holke & Alex",permalink:"/hypercerts-docs/meeting-notes/2022_08_18_sync_holke_alex"},next:{title:"Solidity API",permalink:"/hypercerts-docs/contracts/"}},c={},s=[{value:"Participants",id:"participants",level:2},{value:"Agenda and updates",id:"agenda-and-updates",level:2},{value:"Additional notes",id:"additional-notes",level:2},{value:"Action items",id:"action-items",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2022_08_30_weekly_checkin"},"2022_08_30_Weekly_Checkin"),(0,a.kt)("h2",{id:"participants"},"Participants"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"holke"),(0,a.kt)("li",{parentName:"ul"},"ale"),(0,a.kt)("li",{parentName:"ul"},"@reasn"),(0,a.kt)("li",{parentName:"ul"},"bitbeckers"),(0,a.kt)("li",{parentName:"ul"},"jips"),(0,a.kt)("li",{parentName:"ul"},"joe"),(0,a.kt)("li",{parentName:"ul"},"matt")),(0,a.kt)("h2",{id:"agenda-and-updates"},"Agenda and updates"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"NPM is check? But, especially nice for the hackathon, not crucial to our process"),(0,a.kt)("li",{parentName:"ol"},"September 2nd v0 delivery; feature check-off. Status can be reviewed => ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/protocol/projects/29/views/6"},"https://github.com/orgs/protocol/projects/29/views/6")),(0,a.kt)("li",{parentName:"ol"},"Testnet deployment Goerli: contracts and Graph are deployed, we'll link up a FE deplhoyment tomorrow and expect to give you something to play with during/after our meeting => ",(0,a.kt)("a",{parentName:"li",href:"https://testnets.opensea.io/collection/hypercerts-v0-goerli"},"https://testnets.opensea.io/collection/hypercerts-v0-goerli")),(0,a.kt)("li",{parentName:"ol"},"SVG generation => would look dope on the marketplace(s)"),(0,a.kt)("li",{parentName:"ol"},'Metadata => We can optimise for OpenSea and get cool trait fields. The underlying question is "who are we optimising for". Optimising for OpenSea might be going down a funnel making the JSON too specific'),(0,a.kt)("li",{parentName:"ol"},"Hosting; now hosted under Jips account."),(0,a.kt)("li",{parentName:"ol"},"Looking ahead: v1; royalties, mutation, Ceramic, possible split utility (e.g. leveraging uint256 as 2x uint128, 1x root, 1x leaves)"),(0,a.kt)("li",{parentName:"ol"},"Milestone 2 discussion (scheduling)")),(0,a.kt)("h2",{id:"additional-notes"},"Additional notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On track for delivery on Friday"),(0,a.kt)("li",{parentName:"ul"},"Focused on getting it out there, not a lot of validation currently"),(0,a.kt)("li",{parentName:"ul"},"Current frontend: ",(0,a.kt)("a",{parentName:"li",href:"https://hypercerts-pilot.vercel.app/claim-hypercert"},"https://hypercerts-pilot.vercel.app/claim-hypercert")),(0,a.kt)("li",{parentName:"ul"},"Ceramic vs. using IPNS to be discussed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.metamask.io/"},"Goerli faucet"))),(0,a.kt)("h2",{id:"action-items"},"Action items"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Review of features @holkeb @reasn "),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Where to store which datasets @holkeb @reasn "),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SVG discussion for Friday"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Schedule 1h on Friday: review of milestone 1 and setting milestone 2")))}u.isMDXComponent=!0}}]);