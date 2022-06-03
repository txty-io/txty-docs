---
title: Overwrite translations for export targets
sidebar_position: 1
---

Aside from adding translations for languages you can also add translations for the combination of language and export target.

<img src="/img/general/overwrite_translations_for_export_targets.png" alt="Overwrite translations for export targets" style={{ width: "100%", maxWidth: "100%" }}/>

Click on the button indicated by <b style={{ color: "#f00" }}>1</b> in the image above to expand the export target translations overwrite panel. For every export target you add there will be a row where you can overwrite the default translation of the language. By clicking on the table cell indicated by <b style={{ color: "#f00" }}>2</b> the translation can be changed just for this export target. In the example above the text <code>You cannot access this survey</code> would be overwritten with the text <code>This text will override the default english content</code> when exporting the translations for the <b>JSON</b> export target. If new export targets are added those will automatically use the default translation content for this key which is <code>You cannot access this survey</code>.

:::tip

You can make use of this feature to easily manage translations of your whitelabel solutions. Create an export target for every platform/branding combination and translate your keys only once while still having the possibility to overwrite the translations of keys for a specific branding. This will save you a lot of time managing the translations of your whitelabel brandings.

:::
