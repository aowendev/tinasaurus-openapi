"use strict";(self.webpackChunktinasaurus_openapi=self.webpackChunktinasaurus_openapi||[]).push([[6969],{11865:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164),a=n(56289),r=n(74848);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,r.jsxs)(a.default,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},15833:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});n(96540);var s=n(34164),a=n(40797),r=n(56289),i=n(50539),l=n(69493),o=n(204),c=n(96351),d=n(21858),u=n(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.default,{to:n,onClick:s,children:(0,u.jsx)(i.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,a.default)(),{pluginId:i}=(0,l.useActivePlugin)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(i),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,l.useDocVersionSuggestions)(i),p=m??(x=f).docs.find((e=>e.id===x.mainDocId));var x;return(0,u.jsxs)("div",{className:(0,s.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:f.label,to:p.path,onClick:()=>d(f.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(f,{className:t,versionMetadata:n}):null}},43600:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(50539),a=n(11865),r=n(74848);function i(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(a.A,{...t,subLabel:(0,r.jsx)(s.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(a.A,{...n,subLabel:(0,r.jsx)(s.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},55730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});n(96540);var s=n(34164),a=n(50539),r=n(204),i=n(21858),l=n(74848);function o(e){let{className:t}=e;const n=(0,i.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,r.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},57519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(96540);var s=n(34164),a=n(204),r=n(93751),i=n(30214),l=n(56289),o=n(50539),c=n(29030),d=n(74848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.default)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.default,{"aria-label":(0,o.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.default,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:n,index:a,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function x(){const e=(0,r.OF)(),t=(0,i.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(f,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},79995:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});n(96540);var s=n(68207),a=n(93751),r=n(29030),i=n(99563),l=n(43600),o=n(15833),c=n(55730),d=n(57519),u=n(9303);const m={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};var h=n(74848);function b(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.default)(t.image)})}function f(e){let{categoryGeneratedIndex:t}=e;const n=(0,a.$S)();return(0,h.jsxs)("div",{className:m.generatedIndexPage,children:[(0,h.jsx)(o.default,{}),(0,h.jsx)(d.default,{}),(0,h.jsx)(c.default,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.default,{as:"h1",className:m.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(i.A,{items:n.items,className:m.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(l.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function p(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{...e}),(0,h.jsx)(f,{...e})]})}},81430:(e,t,n)=>{n.d(t,{W:()=>d});var s=n(96540),a=n(40797),r=n(96763);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.default)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return r.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function d(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&r.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=n.select(t),i=n.pluralForms.indexOf(a);return s[Math.min(i,s.length-1)]}(n,t,e)}}},99563:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var s=n(34164),a=n(93751),r=n(56289),i=n(81430),l=n(22887),o=n(50539),c=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(r.default,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:a,description:r}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(c.default,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:a,children:[n," ",a]}),r&&(0,u.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function b(e){let{item:t}=e;const n=(0,a.Nr)(t),s=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,a.$S)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const r=(0,a.d1)(t);return(0,u.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},t)))})}}}]);