"use strict";(self.webpackChunktexterify_docs=self.webpackChunktexterify_docs||[]).push([[305],{4137:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var l=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),k=s(n),f=i,h=k["".concat(u,".").concat(f)]||k[f]||c[f]||r;return n?l.createElement(h,o(o({ref:e},d),{},{components:n})):l.createElement(h,o({ref:e},d))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=k;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:i,o[1]=a;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3079:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var l=n(3117),i=n(102),r=(n(7294),n(4137)),o=["components"],a={title:"Configuration",sidebar_position:1},u="Configuration",s={unversionedId:"installation/configuration",id:"installation/configuration",title:"Configuration",description:"The table below gives an overview of things you can configure in your Texterify instance. Make sure to also check out the .env file.",source:"@site/docs/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/installation/configuration",draft:!1,editUrl:"https://github.com/texterify/texterify-docs/edit/master/docs/installation/configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/installation/setup"},next:{title:"Updating the service",permalink:"/installation/updating-the-service"}},d={},c=[{value:"E-Mail",id:"e-mail",level:2},{value:"Machine translation",id:"machine-translation",level:2},{value:"Over the air translations",id:"over-the-air-translations",level:2}],k={toc:c};function f(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The table below gives an overview of things you can configure in your Texterify instance. Make sure to also check out the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"APP_HOST"),(0,r.kt)("td",null,"example.com"),(0,r.kt)("td",null,"The fully qualified name of the web server (for example used for constructing email links).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ASSET_HOST"),(0,r.kt)("td",null,"example.com"),(0,r.kt)("td",null,"The fully qualified name of the asset server. This is normally the same as the ",(0,r.kt)("b",null,"APP_HOST"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"EMAIL_CONFIRMATION_REQUIRED"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"Whether email confirmation is required or not. If set to true make sure to also configure your email server.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DB_PROD_HOST"),(0,r.kt)("td",null,"db"),(0,r.kt)("td",null,"The database host.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DB_PROD_USERNAME"),(0,r.kt)("td",null,"postgres"),(0,r.kt)("td",null,"The database username.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DB_PROD_DATABASE"),(0,r.kt)("td",null,"texterify_production"),(0,r.kt)("td",null,"The name of your database.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DB_PROD_PASSWORD"),(0,r.kt)("td",null),(0,r.kt)("td",null,"The password of your database user if needed.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"http_proxy"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Specify a HTTP proxy for your application.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SIDEKIQ_REDIS_SERVER_URL"),(0,r.kt)("td",null,"redis://redis:6379/0"),(0,r.kt)("td",null,"The Sidekiq Redis server url. Learn more at ",(0,r.kt)("a",{href:"https://github.com/sidekiq/sidekiq/wiki/The-Basics",target:"_blank"},"Sidekiq basics")," and ",(0,r.kt)("a",{href:"https://github.com/sidekiq/sidekiq/wiki/Using-Redis",target:"_blank"},"Sidekiq using Redis"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SIDEKIQ_REDIS_CLIENT_URL"),(0,r.kt)("td",null,"redis://redis:6379/0"),(0,r.kt)("td",null,"The Sidekiq Redis client url. Learn more at ",(0,r.kt)("a",{href:"https://github.com/sidekiq/sidekiq/wiki/The-Basics",target:"_blank"},"Sidekiq basics")," and ",(0,r.kt)("a",{href:"https://github.com/sidekiq/sidekiq/wiki/Using-Redis",target:"_blank"},"Sidekiq using Redis"),".")))),(0,r.kt)("h1",{id:"external-services"},"External services"),(0,r.kt)("p",null,"Texterify makes use of some external services. Below you find instructions on how to configure them."),(0,r.kt)("h2",{id:"e-mail"},"E-Mail"),(0,r.kt)("p",null,"You need to configure a mail server so Texterify can send emails (e.g. password forgot emails). Make use of the following configuration options to integrate your mail server or provider:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_FROM_EMAIL"),(0,r.kt)("td",null,"no-reply@example.com"),(0,r.kt)("td",null,"Set the from and reply-to email of the emails (e.g. no-reply@example.com). In previous versions only the domain could be changed via ",(0,r.kt)("b",null,"MAILER_HOST"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_ADDRESS"),(0,r.kt)("td",null,"localhost"),(0,r.kt)("td",null,"The address of the mail server.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_PORT"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"The port of the mail server.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_DOMAIN"),(0,r.kt)("td",null),(0,r.kt)("td",null,"If you need to specify a HELO domain.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_USER_NAME"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Specify a username if your server requires authentication.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_PASSWORD"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Specify a password if your server requires authentication.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_AUTHENTICATION"),(0,r.kt)("td",null),(0,r.kt)("td",null,"You can specify the authentication type here. Choose one of the following if needed:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"plain")," (will send the password in the clear)"),(0,r.kt)("li",null,(0,r.kt)("b",null,"login")," (will send password Base64 encoded)"),(0,r.kt)("li",null,(0,r.kt)("b",null,"cram_md5")," (combines a Challenge/Response mechanism to exchange information and a cryptographic Message Digest 5 algorithm to hash important information)")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_ENABLE_STARTTLS_AUTO"),(0,r.kt)("td",null,"true"),(0,r.kt)("td",null,"Determines if STARTTLS is enabled in your SMTP server and starts to use it.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_OPENSSL_VERIFY_MODE"),(0,r.kt)("td",null),(0,r.kt)("td",null,"When you use TLS you can define how OpenSSL checks the certificate. Choose one of the following if needed:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"none")),(0,r.kt)("li",null,(0,r.kt)("b",null,"peer"))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMTP_TLS"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"Enables the SMTP connection to use SMTP/TLS (SMTPS: SMTP over direct TLS connection).")))),(0,r.kt)("h2",{id:"machine-translation"},"Machine translation"),(0,r.kt)("p",null,"Texterify does all the handling around machine translation for you, but the text is finally translated by DeepL. Therefore if you want to use machine translation you need to configure DeepL:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DEEPL_API_TOKEN"),(0,r.kt)("td",null),(0,r.kt)("td",null,"If you want to use machine translation you need to create an account on ",(0,r.kt)("a",{href:"https://www.deepl.com/translator",target:"_blank"},"www.deepl.com")," and set your API token here.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature requires communication outside of your network. If a proxy is required for communication you can set the proxy with the ",(0,r.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variable."))),(0,r.kt)("h2",{id:"over-the-air-translations"},"Over the air translations"),(0,r.kt)("p",null,"The over the air feature works by hosting the translation files on the Google Cloud. If you need to make use of this feature you will have to ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"create a storage bucket")," and configure it:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_CLOUD_PROJECT"),(0,r.kt)("td",null),(0,r.kt)("td",null,"The name of your Google Cloud project.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_CLOUD_KEYFILE"),(0,r.kt)("td",null),(0,r.kt)("td",null,"The Google Cloud key file used for authentication. See ",(0,r.kt)("a",{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank"},"here")," for more information.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_CLOUD_OTA_BUCKET_NAME"),(0,r.kt)("td",null),(0,r.kt)("td",null,"The name of the bucket used for storing the translation bundles.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature requires communication outside of your network. If a proxy is required for communication you can set the proxy with the ",(0,r.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variable."))))}f.isMDXComponent=!0}}]);