---
title: Export translations
sidebar_position: 9
---

Texterify aims to offer full flexibility so you can adjust Texterify according to your needs. To get to the export settings click on `Export` in the left sidebar. A submenu with the following items will open:

- [Download](#download)
- [Export targets](#export-targets)
- [Hierarchy](#hierarchy)

## Download

Before you can download your translations you first need to [create an export target](#export-targets). After you have created an export target a download button will be shown so you can easily download your translation bundle.

<!-- You can also download translations by using our [CLI](/tools/cli) tool. -->

## Export targets

An `export target` defines how your translations are exported. You can define the file format and the file names dynamically based on the language and country code of a language. You can also define multiple export targets to export your translations for different targets. This is for example very useful if you develop an Android and an iOS application which should use the same translations. In this situation you can export your translations to Android and iOS easily in their required formats und don't need to manage those translations seperately.

To create an export target click on `Create new`. Give your export target a name and select a file format.

## Hierarchy

The hierarchy lets you define a translation fallback hierarchy. If a translation is missing for a given language the translation of the languages parent will automatically be used. When adding a new language you most probably don't have all your content translated right away, or probably new content is added, because of new features you are adding, which needs to be translated to other languages first. Waiting for translations to finish slows down your release cycle. With the fallback hierarchy you can make sure that there is always a meaningful text shown to the user.
