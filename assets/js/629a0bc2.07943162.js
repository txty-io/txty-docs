"use strict";(self.webpackChunktexterify_docs=self.webpackChunktexterify_docs||[]).push([[168],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(n),f=i,d=g["".concat(u,".").concat(f)]||g[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(4137)),a=["components"],c={title:"Debugging",sidebar_position:99},u="Debugging",l={unversionedId:"installation/debugging",id:"installation/debugging",title:"Debugging",description:"If you experience any issues you can always check the logs of the application which might give a hint about the issue you are currently facing. To view the logs start the app and then execute the following commands:",source:"@site/docs/installation/debugging.md",sourceDirName:"installation",slug:"/installation/debugging",permalink:"/installation/debugging",draft:!1,editUrl:"https://github.com/texterify/texterify-docs/edit/master/docs/installation/debugging.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Debugging",sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Updating the service",permalink:"/installation/updating-the-service"},next:{title:"Getting started",permalink:"/"}},s={},p=[],g={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"If you experience any issues you can always check the logs of the application which might give a hint about the issue you are currently facing. To view the logs start the app and then execute the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it texterify-docker-compose-setup_app_1 /bin/sh\ncat log/production.log\n")),(0,o.kt)("p",null,"This will give you the logs of the application server."))}f.isMDXComponent=!0}}]);