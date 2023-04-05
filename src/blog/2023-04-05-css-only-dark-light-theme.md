---
title: CSS Only Dark/Light Theme
description: A dark/light theme with only css.
date: 2023-04-05T18:56:18.103Z
tags:
  - post
---
## Is It Even Possible?

My goal with this web project, is to empliment a dark/light theme with as little CSS as possible.

*Browsers now support a default dark and light theme that can be turned on based on the users system theme.

### Here Is the Folder Structure:

```
-- project folder
  -- index.html
  -- style.css

```

### Here Is the CSS:

```css

@media (prefers-color-scheme: light) {
  html {
    color-scheme: light;
  }
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}

```

*The CSS that is highlighted lightblue is the main ingredient. These rules, `color-scheme: light` or `color-scheme: dark` will change the page theme on their own, but, to honor the users system default setting we can have those rules nested inside a media query called `prefers-color-scheme`. So, when the system is set to dark, the `color-scheme` will be set to dark and the same for light.
