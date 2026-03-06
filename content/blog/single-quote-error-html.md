---
title: "\"â€™\" showing on page instead of  \" ' \" in HTML"
description: "I came accross an inssue that seemed really weired when it happened as this my my first time encountering anything of this sort, turns out it was a very easy fix and was just caused because we are getting too used to auto completing."
date: 2025-04-04
tags: ["devlog", "HTML", "issue"]
---
While making this website I encountered an error that " ' " was decoding as "â€™" due to some weired reason and I thought the framework I am using was broken, but no the issue was far more simpler. 

I wrote the header of HTML for my website manually instead of using the autocomplete that is `!` + `tab` which gets you all the starter heading tags etc. This was my mistake as I never defined that I am using `utf-8` encoding for my site and the mess seemed almost unfixable. After a lot of back and forth I landed on this [StackOverflow post](https://stackoverflow.com/questions/2477452/%C3%A2%E2%82%AC-showing-on-page-instead-of). 


### What the issue was?

I just missed:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Yes that's it! As I didn't specify the `charset`, the page was decoding as CP-1252 instead of UTF-8. I am just writing this so I always remember it as even the LLM's were unable to provide proper answers on why this was happening.