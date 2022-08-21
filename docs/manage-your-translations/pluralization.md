---
title: Pluralization
sidebar_position: 12
---

Different languages have different pluralization rules. While for example English has one singular and one plural form ("1 cat" vs "2 cats") other languages have more forms than that. There are even languages that have only one form at all. Texterify offers you the possibility to manage all the different plural forms and export them in the correct format for your target platform.

Texterify does this by following the official CLDR Plural Rules (https://cldr.unicode.org/index/cldr-spec/plural-rules). These rules are based around the following plural forms:

- zero
- one
- two
- few
- many
- other (general plural form or if the language has only a single form)

Depending on the language the available plural forms differ.

## How to activate plural forms

To make use of plural forms you need to enable pluralization for a key. You can do this while adding a new key

<img src="/img/general/new_key_enable_pluralization.png" alt="Enable pluralization while adding a new key" style={{ width: "400px", maxWidth: "100%" }}/>

or afterwards in the keys view (see [Enable or disable pluralization](/manage-your-translations/translating-content#enable-or-disable-pluralization)).

After activation you are presented with different plural form fields to enter your translations. The plural form fields differ for different languages.

:::info

The shown plural fields depends on the language code you set for your language. If you don't see the correct plural fields according to CLDR Plural Rules check if you have set the correct language code of your language.

:::
