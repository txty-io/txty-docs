"use strict";(self.webpackChunktexterify_docs=self.webpackChunktexterify_docs||[]).push([[5324],{4137:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var l=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},f=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),c=s(n),f=o,p=c["".concat(u,".").concat(f)]||c[f]||k[f]||r;return n?l.createElement(p,i(i({ref:e},d),{},{components:n})):l.createElement(p,i({ref:e},d))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[c]="string"==typeof t?t:o,i[1]=a;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8515:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(3117),o=(n(7294),n(4137));const r={title:"Configuration",sidebar_position:1},i="Configuration",a={unversionedId:"installation/configuration",id:"version-1.2.0/installation/configuration",title:"Configuration",description:"The table below gives an overview of things you can configure in your Texterify instance. Make sure to also check out the .env file.",source:"@site/versioned_docs/version-1.2.0/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/installation/configuration",draft:!1,editUrl:"https://github.com/texterify/texterify-docs/edit/master/versioned_docs/version-1.2.0/installation/configuration.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/installation/setup"},next:{title:"Updating the service",permalink:"/installation/updating-the-service"}},u={},s=[{value:"E-Mail",id:"e-mail",level:2},{value:"Machine translation",id:"machine-translation",level:2},{value:"Over the air translations",id:"over-the-air-translations",level:2}],d={toc:s},c="wrapper";function k(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The table below gives an overview of things you can configure in your Texterify instance. Make sure to also check out the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"APP_HOST"),(0,o.kt)("td",null,"example.com"),(0,o.kt)("td",null,"The fully qualified name of the web server (for example used for constructing email links).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ASSET_HOST"),(0,o.kt)("td",null,"example.com"),(0,o.kt)("td",null,"The fully qualified name of the asset server. This is normally the same as the ",(0,o.kt)("b",null,"APP_HOST"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"EMAIL_CONFIRMATION_REQUIRED"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"Whether email confirmation is required or not. If set to true make sure to also configure your email server.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DB_PROD_HOST"),(0,o.kt)("td",null,"db"),(0,o.kt)("td",null,"The database host.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DB_PROD_USERNAME"),(0,o.kt)("td",null,"postgres"),(0,o.kt)("td",null,"The database username.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DB_PROD_DATABASE"),(0,o.kt)("td",null,"texterify_production"),(0,o.kt)("td",null,"The name of your database.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DB_PROD_PASSWORD"),(0,o.kt)("td",null),(0,o.kt)("td",null,"The password of your database user if needed.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"http_proxy"),(0,o.kt)("td",null),(0,o.kt)("td",null,"Specify a HTTP proxy for your application.")))),(0,o.kt)("h1",{id:"external-services"},"External services"),(0,o.kt)("p",null,"Texterify makes use of some external services. Below you find instructions on how to configure them."),(0,o.kt)("h2",{id:"e-mail"},"E-Mail"),(0,o.kt)("p",null,"You need to configure a mail server so Texterify can send emails (e.g. password forgot emails). Make use of the following configuration options to integrate your mail server or provider:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_FROM_EMAIL"),(0,o.kt)("td",null,"no-reply@example.com"),(0,o.kt)("td",null,"Set the from and reply-to email of the emails (e.g. no-reply@example.com). In previous versions only the domain could be changed via ",(0,o.kt)("b",null,"MAILER_HOST"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_ADDRESS"),(0,o.kt)("td",null,"localhost"),(0,o.kt)("td",null,"The address of the mail server.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_PORT"),(0,o.kt)("td",null,"25"),(0,o.kt)("td",null,"The port of the mail server.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_DOMAIN"),(0,o.kt)("td",null),(0,o.kt)("td",null,"If you need to specify a HELO domain.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_USER_NAME"),(0,o.kt)("td",null),(0,o.kt)("td",null,"Specify a username if your server requires authentication.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_PASSWORD"),(0,o.kt)("td",null),(0,o.kt)("td",null,"Specify a password if your server requires authentication.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_AUTHENTICATION"),(0,o.kt)("td",null),(0,o.kt)("td",null,"You can specify the authentication type here. Choose one of the following if needed:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"plain")," (will send the password in the clear)"),(0,o.kt)("li",null,(0,o.kt)("b",null,"login")," (will send password Base64 encoded)"),(0,o.kt)("li",null,(0,o.kt)("b",null,"cram_md5")," (combines a Challenge/Response mechanism to exchange information and a cryptographic Message Digest 5 algorithm to hash important information)")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_ENABLE_STARTTLS_AUTO"),(0,o.kt)("td",null,"true"),(0,o.kt)("td",null,"Determines if STARTTLS is enabled in your SMTP server and starts to use it.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_OPENSSL_VERIFY_MODE"),(0,o.kt)("td",null),(0,o.kt)("td",null,"When you use TLS you can define how OpenSSL checks the certificate. Choose one of the following if needed:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"none")),(0,o.kt)("li",null,(0,o.kt)("b",null,"peer"))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SMTP_TLS"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"Enables the SMTP connection to use SMTP/TLS (SMTPS: SMTP over direct TLS connection).")))),(0,o.kt)("h2",{id:"machine-translation"},"Machine translation"),(0,o.kt)("p",null,"Texterify does all the handling around machine translation for you, but the text is finally translated by DeepL. Therefore if you want to use machine translation you need to configure DeepL:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DEEPL_API_TOKEN"),(0,o.kt)("td",null),(0,o.kt)("td",null,"If you want to use machine translation you need to create an account on ",(0,o.kt)("a",{href:"https://www.deepl.com/translator",target:"_blank"},"www.deepl.com")," and set your API token here.")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature requires communication outside of your network. If a proxy is required for communication you can set the proxy with the ",(0,o.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variable.")),(0,o.kt)("h2",{id:"over-the-air-translations"},"Over the air translations"),(0,o.kt)("p",null,"The over the air feature works by hosting the translation files on the Google Cloud. If you need to make use of this feature you will have to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"create a storage bucket")," and configure it:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"GOOGLE_CLOUD_PROJECT"),(0,o.kt)("td",null),(0,o.kt)("td",null,"The name of your Google Cloud project.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"GOOGLE_CLOUD_KEYFILE"),(0,o.kt)("td",null),(0,o.kt)("td",null,"The Google Cloud key file used for authentication. See ",(0,o.kt)("a",{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank"},"here")," for more information.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"GOOGLE_CLOUD_OTA_BUCKET_NAME"),(0,o.kt)("td",null),(0,o.kt)("td",null,"The name of the bucket used for storing the translation bundles.")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature requires communication outside of your network. If a proxy is required for communication you can set the proxy with the ",(0,o.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variable.")))}k.isMDXComponent=!0}}]);