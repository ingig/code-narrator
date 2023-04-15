---
nav_order: 0
title: ConfigurationBuilder.ts
parent: Configuration

permalink: src\documentation\plugins\builders\Configuration\ConfigurationBuilder.ts
---

# ConfigurationBuilder.ts

The `ConfigurationBuilder.ts` file is a TypeScript code file that defines a class named `ConfigurationBuilder`. This class is responsible for generating and managing configuration files for an application. It extends the `BaseBuilder` class and provides methods for generating, updating, and rendering configuration files.

## Table of Contents

- [Class Description](#class-description)
- [Methods](#methods)
  - [generate](#generate)
  - [prepareSummary](#preparesummary)
  - [generateAppConfigFiles](#generateappconfigfiles)
  - [generateGeneralConfigFiles](#generategeneralconfigfiles)
  - [generateSummary](#generatesummary)
  - [haveConfigFilesChanged](#haveconfigfileschanged)
  - [render](#render)
  - [appSpecificConfigAndCacheSameSize](#appspecificconfigandcachesamesize)

## Class Description

The `ConfigurationBuilder` class is responsible for managing the configuration files of an application.