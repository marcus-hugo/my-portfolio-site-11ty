---
title: Phantom Sass Folders
description: Why am I seeing empty sass folders with Chrome Inspector sources tab?
date: 2023-01-29T22:59:02.894Z
tags:
  - post
---
W﻿hy do I keep seeing my projects empty sass folders when using Chrome Inspector Sources tab? They are not shown with the Network tab.

I﻿ found that I had sourcemaps enabled. To confirm this, I disabled them with `--no-source-map` in the sass build script. Now they are gone!