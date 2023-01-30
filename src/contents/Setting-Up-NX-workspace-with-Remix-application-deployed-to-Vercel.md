---
title: Setting Up NX workspace with Remix application deployed to Vercel
author: Jason Silvers
datetime: '2023-01-30T22:00:00.000Z'
slug: nx-vercel-remix
tags:
  - remix
  - vercel
  - nx
description: Steps to setup a nx workspace with a remix app deployed to vercel
---

### Setting up a nx workspace with a Remix app deployed to Vercel

Set up the nx workspace with the Remix preset

```powershell
npx create-nx-workspace@latest acme \
--preset=@nrwl/remix \
--project=demo
```

This will create a workspace called acme and add an application named demo. Once the workspace has been create open it in your editor of choice.&#x20;

![nx distributed caching](<https://assets.tina.io/d228a5de-f11f-4abe-b112-f588b8225f6a/Screen Shot 2023-01-30 at 12.27.19 PM.png> "nx distributed caching")
