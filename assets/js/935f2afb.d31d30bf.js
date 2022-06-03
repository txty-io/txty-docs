"use strict";(self.webpackChunktexterify_docs=self.webpackChunktexterify_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration","href":"/installation/configuration","docId":"installation/configuration"},{"type":"link","label":"Updating the service","href":"/installation/updating-the-service","docId":"installation/updating-the-service"},{"type":"link","label":"Debugging","href":"/installation/debugging","docId":"installation/debugging"}],"href":"/installation/"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Create an account","href":"/getting-started/create-account","docId":"getting-started/create-account"},{"type":"link","label":"Create an organization","href":"/getting-started/create-organization","docId":"getting-started/create-organization"},{"type":"link","label":"Create a project","href":"/getting-started/create-project","docId":"getting-started/create-project"},{"type":"link","label":"Add languages","href":"/getting-started/add-languages","docId":"getting-started/add-languages"}],"href":"/"},{"type":"link","label":"Import translations","href":"/import-translations","docId":"import-translations"},{"type":"link","label":"Add keys","href":"/add-keys","docId":"add-keys"},{"type":"category","label":"Translate your content","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overwrite translations for export targets","href":"/translate-content/overwrite-translations-for-export-targets","docId":"translate-content/overwrite-translations-for-export-targets"},{"type":"link","label":"Machine translation","href":"/translate-content/machine-translation","docId":"translate-content/machine-translation"}],"href":"/translate-content/"},{"type":"link","label":"Export translations","href":"/export-translations","docId":"export-translations"},{"type":"link","label":"Dark mode","href":"/dark-mode","docId":"dark-mode"},{"type":"link","label":"Access tokens","href":"/access-tokens","docId":"access-tokens"},{"type":"link","label":"Development","href":"/development","docId":"development"},{"type":"link","label":"FAQ","href":"/faq","docId":"faq"},{"type":"link","label":"Feedback & Support","href":"/feedback-support","docId":"feedback-support"}]},"docs":{"access-tokens":{"id":"access-tokens","title":"Access tokens","description":"When working with the Texterify CLI or other integrations you will need an access token. You can generate an access token by clicking on your name in the upper right corner and then selecting Access tokens (or just click here if you are using the cloud Texterify instance.","sidebar":"tutorialSidebar"},"add-keys":{"id":"add-keys","title":"Add keys","description":"Keys (or often also called string ids or just ids in the context of localization) are the identifiers you use in your software to support multiple languages. Instead of directly setting the content of a piece of text in your software you use these keys to reference the text for the language of the current user.","sidebar":"tutorialSidebar"},"dark-mode":{"id":"dark-mode","title":"Dark mode","description":"Texterify offers a dark mode which can be activated/deactivated anytime with a single click. Just click on the flame icon in the top bar next to your profile image. It is as easy as that.","sidebar":"tutorialSidebar"},"development":{"id":"development","title":"Development","description":"This guide covers basic development tasks.","sidebar":"tutorialSidebar"},"export-translations":{"id":"export-translations","title":"Export translations","description":"Texterify aims to offer full flexibility so you can adjust Texterify according to your needs. To get to the export settings click on Export in the left sidebar. A submenu with the following items will open:","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"If you ever miss a feature or have problems with something just create a GitHub issue here or send us an email to . We are here to help and look forward to your feedback.","sidebar":"tutorialSidebar"},"feedback-support":{"id":"feedback-support","title":"Feedback & Support","description":"We can\'t say it often enough how important feedback is to us, so we can make the localization process as easy as possible. If you ever miss a feature or have problems with something just create a GitHub issue here or send us an email to . We are here to help and look forward to your feedback.","sidebar":"tutorialSidebar"},"getting-started/add-languages":{"id":"getting-started/add-languages","title":"Add languages","description":"Before you can import your translations you must first add some languages to your project. Go to the languages site by clicking on Languages in the left sidebar.","sidebar":"tutorialSidebar"},"getting-started/create-account":{"id":"getting-started/create-account","title":"Create an account","description":"Before you can use Texterify you need to create an account.","sidebar":"tutorialSidebar"},"getting-started/create-organization":{"id":"getting-started/create-organization","title":"Create an organization","description":"Organizations allow you to easily manage multiple projects and work together as a team. Invite other users to your organization and work together on your multilingual projects.","sidebar":"tutorialSidebar"},"getting-started/create-project":{"id":"getting-started/create-project","title":"Create a project","description":"To create a project within your organization you need to first select the organization. On the organization dashboard you can create a new project by clicking Create project.","sidebar":"tutorialSidebar"},"getting-started/getting-started":{"id":"getting-started/getting-started","title":"Getting started","description":"What is Texterify?","sidebar":"tutorialSidebar"},"import-translations":{"id":"import-translations","title":"Import translations","description":"You should now have a project set up with at least one language. We will now import your translations. To do this click on Import in the left sidebar. If you are starting a new project and don\'t have any translation files to import you can skip this step and create keys manually by reading more here.","sidebar":"tutorialSidebar"},"installation/configuration":{"id":"installation/configuration","title":"Configuration","description":"The table below gives an overview of things you can configure in your Texterify instance. Make sure to also check out the .env file.","sidebar":"tutorialSidebar"},"installation/debugging":{"id":"installation/debugging","title":"Debugging","description":"If you experience any issues you can always check the logs of the application which might give a hint about the issue you are currently facing. To view the logs start the app and then execute the following commands:","sidebar":"tutorialSidebar"},"installation/installation":{"id":"installation/installation","title":"Installation","description":"This guide covers the installation and configuration of the on-premise (self hosting) version of Texterify. If you are using the cloud version you can ignore this installation instructions, because all of the things are already covered by the Texterify team for you.","sidebar":"tutorialSidebar"},"installation/updating-the-service":{"id":"installation/updating-the-service","title":"Updating the service","description":"To update the service change the TEXTERIFY_TAG to a new version. Make sure to backup your database so no data is lost in case of a failure. You can then run the following commands to update Texterify to the new version:","sidebar":"tutorialSidebar"},"translate-content/machine-translation":{"id":"translate-content/machine-translation","title":"Machine translation","description":"Machine translation (MT) is the automatic translation of text from one language to another. With the help of machine translation it is super easy to translate your software into multiple languages within seconds. Because Texterify has built-in machine translation support translating into multiple languages is a no-brainer.","sidebar":"tutorialSidebar"},"translate-content/overwrite-translations-for-export-targets":{"id":"translate-content/overwrite-translations-for-export-targets","title":"Overwrite translations for export targets","description":"Aside from adding translations for languages you can also add translations for the combination of language and export target.","sidebar":"tutorialSidebar"},"translate-content/translate-content":{"id":"translate-content/translate-content","title":"Translate your content","description":"Translating your content in Texterify is super easy. We offer two different ways how you can edit your translations:","sidebar":"tutorialSidebar"}}}')}}]);