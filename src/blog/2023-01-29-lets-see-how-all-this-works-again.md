---
title: Phantom Sass Folders
description: Empty sass folders with Chrome Inspector Sources Tab
author: Marcus
date: 2023-01-29T22:59:02.894Z
tags:
  - post
image: /assets/images/question-diamond.svg
imageAlt: question mark
---
W﻿hy do I keep seeing my projects empty sass folders when using Chrome Inspector Sources tab?  They are not shown with the Network tab.

I﻿ found that I had sourcemaps enabled.  To confirm this, I disabled them with `--no-source-map` in the sass build script. Now they are gone!