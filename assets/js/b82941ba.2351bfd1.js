(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{102:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(102)),i={title:"React"},c={unversionedId:"integrations/react",id:"integrations/react",isDocsHomePage:!1,title:"React",description:"In this guide you will learn how to integrate Texterify into your React projects.",source:"@site/docs/integrations/react.md",sourceDirName:"integrations",slug:"/integrations/react",permalink:"/integrations/react",editUrl:"https://github.com/texterify/texterify-docs/edit/master/website/docs/integrations/react.md",version:"current",frontMatter:{title:"React"},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/integrations/ios"},next:{title:"Ruby on Rails",permalink:"/integrations/ruby-on-rails"}},p=[{value:"Project setup",id:"project-setup",children:[]}],u={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide you will learn how to integrate Texterify into your React projects."),Object(o.b)("h2",{id:"project-setup"},"Project setup"),Object(o.b)("p",null,"We will create a new project with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App")," which we will use in this tutorial. To create a new project run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app\ncd my-app\nnpm start\n")),Object(o.b)("p",null,"You React app should now be available at ",Object(o.b)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),Object(o.b)("h2",{id:""}))}l.isMDXComponent=!0}}]);