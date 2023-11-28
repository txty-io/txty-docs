"use strict";(self.webpackChunktexterify_docs=self.webpackChunktexterify_docs||[]).push([[9230],{4137:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(r),d=o,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5002:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(3117),o=(r(7294),r(4137));const a={title:"Overwrite translations for export targets",sidebar_position:100},i=void 0,s={unversionedId:"manage-your-translations/overwrite-translations-for-export-targets",id:"version-1.2.0/manage-your-translations/overwrite-translations-for-export-targets",title:"Overwrite translations for export targets",description:"Aside from adding translations for languages you can also add translations for the combination of language and export target.",source:"@site/versioned_docs/version-1.2.0/manage-your-translations/overwrite-translations-for-export-targets.md",sourceDirName:"manage-your-translations",slug:"/manage-your-translations/overwrite-translations-for-export-targets",permalink:"/manage-your-translations/overwrite-translations-for-export-targets",draft:!1,editUrl:"https://github.com/texterify/texterify-docs/edit/master/versioned_docs/version-1.2.0/manage-your-translations/overwrite-translations-for-export-targets.md",tags:[],version:"1.2.0",sidebarPosition:100,frontMatter:{title:"Overwrite translations for export targets",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Machine translation",permalink:"/manage-your-translations/machine-translation"},next:{title:"User account",permalink:"/user-account/"}},l={},c=[],u={toc:c},p="wrapper";function f(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aside from adding translations for languages you can also add translations for the combination of language and export target."),(0,o.kt)("img",{src:"/img/general/overwrite_translations_for_export_targets.png",alt:"Overwrite translations for export targets",style:{width:"100%",maxWidth:"100%"}}),(0,o.kt)("p",null,"Click on the button indicated by ",(0,o.kt)("b",{style:{color:"#f00"}},"1")," in the image above to expand the export target translations overwrite panel. For every export target you add there will be a row where you can overwrite the default translation of the language. By clicking on the table cell indicated by ",(0,o.kt)("b",{style:{color:"#f00"}},"2")," the translation can be changed just for this export target. In the example above the text ",(0,o.kt)("code",null,"You cannot access this survey")," would be overwritten with the text ",(0,o.kt)("code",null,"This text will override the default english content")," when exporting the translations for the ",(0,o.kt)("b",null,"JSON")," export target. If new export targets are added those will automatically use the default translation content for this key which is ",(0,o.kt)("code",null,"You cannot access this survey"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can make use of this feature to easily manage translations of your whitelabel solutions. Create an export target for every platform/branding combination and translate your keys only once while still having the possibility to overwrite the translations of keys for a specific branding. This will save you a lot of time managing the translations of your whitelabel brandings.")))}f.isMDXComponent=!0}}]);