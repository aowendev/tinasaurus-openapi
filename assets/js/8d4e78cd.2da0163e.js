"use strict";(self.webpackChunktinasaurus_openapi=self.webpackChunktinasaurus_openapi||[]).push([[1234],{3489:(e,t,r)=>{r.r(t),r.d(t,{Collapsible:()=>c.N,DraftBannerMessage:()=>P.TT,DraftBannerTitle:()=>P.Yh,ErrorBoundaryError:()=>E.bq,ErrorBoundaryErrorMessageFallback:()=>E.MN,ErrorBoundaryTryAgainButton:()=>E.a2,ErrorCauseBoundary:()=>E.k2,HtmlClassNameProvider:()=>m.e3,NavbarSecondaryMenuFiller:()=>h.GX,PageMetadata:()=>m.be,ReactContextError:()=>p.dV,SkipToContentFallbackId:()=>M.j,SkipToContentLink:()=>M.K,ThemeClassNames:()=>u.G,ThemedComponent:()=>o.A,UnlistedBannerMessage:()=>P.Uh,UnlistedBannerTitle:()=>P.Rc,UnlistedMetadata:()=>P.AE,composeProviders:()=>p.fM,createStorageSlot:()=>a.Wf,duplicates:()=>k.XI,filterDocCardListItems:()=>N,groupBy:()=>k.$z,isMultiColumnFooterLinks:()=>j.C,isRegexpStringMatch:()=>S.G,listStorageKeys:()=>a.Eo,listTagsByLetters:()=>b.Q,prefersReducedMotion:()=>d.O,processAdmonitionProps:()=>A.c,translateTagsPageTitle:()=>b.b,uniq:()=>k.sb,useClearQueryString:()=>C.W9,useCollapsible:()=>c.u,useColorMode:()=>f.G,useContextualSearchFilters:()=>U,useCurrentSidebarCategory:()=>F,useDocsPreferredVersion:()=>D,useEvent:()=>p._q,useHistorySelector:()=>C.Hl,usePluralForm:()=>l.W,usePrevious:()=>p.ZC,usePrismTheme:()=>w.A,useQueryString:()=>C.l,useQueryStringList:()=>C.fV,useSearchLinkCreator:()=>v,useSearchQueryString:()=>T,useStorageSlot:()=>a.Dv,useThemeConfig:()=>i.p,useWindowSize:()=>g.l});var n=r(40797),s=r(89396),i=r(53115),o=r(68283),a=r(78749),l=r(81430),c=r(33535),u=r(204),d=r(84924),p=r(26849),m=r(68207),f=r(8532),h=r(63065),g=r(86682),b=r(53523),x=r(96540),C=r(30604);const y="q";function T(){return(0,C.l)(y)}function v(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,n.default)(),{algolia:{searchPagePath:r}}=t;return(0,x.useCallback)((t=>`${e}${r}?${y}=${encodeURIComponent(t)}`),[e,r])}var j=r(63113),S=r(26767),k=r(11861),w=r(31177),A=r(60506),M=r(19585),P=r(27289),E=r(24194);function F(){return r(69493).useCurrentSidebarCategory(...arguments)}function N(){return r(69493).filterDocCardListItems(...arguments)}function D(){return r(69493).useDocsPreferredVersion(...arguments)}function U(){const{i18n:e}=(0,n.default)(),t=r(69493).useDocsContextualSearchTags(),i=[s.C,...t];return{locale:e.currentLocale,tags:i}}},27289:(e,t,r)=>{r.d(t,{AE:()=>l,Rc:()=>o,TT:()=>u,Uh:()=>a,Yh:()=>c});r(96540);var n=r(50539),s=r(27143),i=r(74848);function o(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}},31177:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(8532),s=r(53115);function i(){const{prism:e}=(0,s.p)(),{colorMode:t}=(0,n.G)(),r=e.theme,i=e.darkTheme||r;return"dark"===t?i:r}},53523:(e,t,r)=>{r.d(t,{Q:()=>i,b:()=>s});var n=r(50539);const s=()=>(0,n.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function i(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[n]=t;return r.localeCompare(n)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},60506:(e,t,r)=>{r.d(t,{c:()=>i});var n=r(96540),s=r(74848);function i(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=n.Children.toArray(e),r=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==r)),o=r?.props.children;return{mdxAdmonitionTitle:o,rest:i.length>0?(0,s.jsx)(s.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:r}}},61950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"petstore/user","title":"Users","description":"Users","source":"@site/docs/petstore/user.tag.mdx","sourceDirName":"petstore","slug":"/petstore/user","permalink":"/https://aowendev.github.io/tinasaurus-openapi/docs/petstore/user","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"user","title":"Users","description":"Users","custom_edit_url":null},"sidebar":"openApiSidebar","previous":{"title":"Subscribe to the Store events","permalink":"/https://aowendev.github.io/tinasaurus-openapi/docs/petstore/subscribe-to-the-store-events"},"next":{"title":"Create user","permalink":"/https://aowendev.github.io/tinasaurus-openapi/docs/petstore/create-user"}}');var s=r(74848),i=r(28453),o=r(99563),a=r(3489);const l={id:"user",title:"Users",description:"Users",custom_edit_url:null},c=void 0,u={},d=[];function p(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Operations about user"}),"\n","\n",(0,s.jsx)(o.A,{items:(0,a.useCurrentSidebarCategory)().items})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},81430:(e,t,r)=>{r.d(t,{W:()=>u});var n=r(96540),s=r(40797),i=r(96763);const o=["zero","one","two","few","many","other"];function a(e){return o.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return i.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&i.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},99563:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var n=r(34164),s=r(93751),i=r(56289),o=r(81430),a=r(22887),l=r(50539),c=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(i.default,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:i}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(c.default,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(b,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}}}]);