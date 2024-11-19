---
title: "LinkedIn Automation, Pt. 1"
description: "Being social on social media... automatically."
date: "2024-11-17"
linkedProject: "/projects/liauto"
#projectBoard: "https://github.com/users/jeff-mos-def/projects/9"
draft: false
---

## Introduction

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:p7ufep6w7td4b3gg7eijyhmm/app.bsky.feed.post/3lbciscqj4s2t" data-bluesky-cid="bafyreidrwxojflvj2skwdtrq4qf72dzbawf2dkm7uamqwogrqnxuicbnr4"><p lang="en">Continuing on w/ my current mindset of building in public, here&#x27;s part 1 of my LinkedIn automation test and implementation. So far, I&#x27;m gathering news sources to act as current events / news topics. More to come. 😉

jeffcamacho.com/blog/01-liau...<br><br><a href="https://bsky.app/profile/did:plc:p7ufep6w7td4b3gg7eijyhmm/post/3lbciscqj4s2t?ref_src=embed">[image or embed]</a></p>&mdash; jeff-mos-def (<a href="https://bsky.app/profile/did:plc:p7ufep6w7td4b3gg7eijyhmm?ref_src=embed">@jeff-mos-def.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:p7ufep6w7td4b3gg7eijyhmm/post/3lbciscqj4s2t?ref_src=embed">November 19, 2024 at 7:05 AM</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

Hey, so... I'm working to make myself known in the professiona world... awesome...

And honestly, I'm not a big poster. I'm def not a big poster on socials. [LinkedIn](https://www.linkedin.com/) has become... a necessary device for career engagement. And that's the issue. So let's look at that.

Problem statement: *How can I be social on social media with minimal actual engagement, while showing off a skillset, touching on current topics, AND adding content to this super cool new site I've been tooling away at?*

Answer: Automate it with AI.

Yes, yes.. I get it. I hear it coming.

> *But Jeff, is it **real** authentic interaction with the people you are connecting with if you phone it in with AI?*

Short answer: **Absolutely.**

The proof is here in this blog pudding. I look for interesting articles and share that info, along with how I was able to share it.

Bing, bang, boom. You get cool content, I get to build cool automation, *then* you get to learn about said automation.

Win, win, cherry on top.

Let's get started.

Note: I'm writing a little looser here since I'm not in my "professional project" file. I have linked that though. Feel free to read through that too.

## The plan

Here’s the game plan, all built out with make.com as the backbone of the operation:

- **API Integration:** Using services like [newsapi.org](https://newsapi.org/), [Perplexity AI API](https://docs.perplexity.ai/home), and [OpenAI](https://platform.openai.com/docs/overview) to create a fully automated pipeline for pulling in fresh, interesting content.
- **Automation Expertise:** Setting up workflows in [make.com](https://www.make.com/en) to handle complex scenarios and keep everything running smoothly.
- **Scripting and Scheduling:** [Google Apps Script](https://developers.google.com/apps-script) works in tandem to fetch and filter news regularly, avoiding duplicates and keeping the pipeline clean. This pulls news articles every 30 days. Free tier blues... Still works.
- **Content Optimization:** AI tools step in to summarize and adapt content specifically for LinkedIn, so posts hit just right for the professional tone I want to reach the audience with.
- **Social Media Engagement:** By automating, I’m learning what drives engagement while crafting posts that actually resonate—without needing to stay glued to the screen, read countless articles, and actually get me away from the computer at times.
- **Data Management:** My workflows ensure that every post is relevant, accurate, and consistent. No surprises, just solid content.
- **Scalable Solutions:** The best part? This system can grow with new tools and platforms, so it’s built for the long haul.

With make.com at the core, I’m automating my way to an optimized, professional LinkedIn presence. I let the tools do the heavy lifting while I focus on the more interesting parts: creating, learning, and sharing.

## The news

If I want to "talk" about something, I need a topic. This is where newsapi.org steps in.

NewsAPI allows for me to poll the web for news articles on topics while also limiting the domains I search. This... works... but not in the way I'd like it to. Here's an example of how this would work utilzing the API running Python:


```
from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key='XXXXXXX')

# /v2/top-headlines
top_headlines = newsapi.get_top_headlines(q='bitcoin',
                                          sources='bbc-news,the-verge',
                                          category='business',
                                          language='en',
                                          country='us')

# /v2/everything
all_articles = newsapi.get_everything(q='bitcoin',
                                      sources='bbc-news,the-verge',
                                      domains='bbc.co.uk,techcrunch.com',
                                      from_param='2017-12-01',
                                      to='2017-12-12',
                                      language='en',
                                      sort_by='relevancy',
                                      page=2)

# /v2/top-headlines/sources
sources = newsapi.get_sources()
```

Super cool, but I am a Google Workspace user and I'd like to pull from AppScript to get into a Google Sheet. After some tinkering.. say hello to getAgilenews:

![getAgileNews: A list of Agile articles with URLs, dates, and sources.](/img/getagilenews.jpg)

*Source: getAgileNews App Script Output*

Next time we'll see what we do with this!

- Jeff