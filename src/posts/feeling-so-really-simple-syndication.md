---
title: "Feeling So Really Simple Syndication"
description: ''
date: 2022-08-15 02:33:09.568000+00:00
tags:
  - newsletter
  - deep-web
---

*[Moby - 'Feeling So Real' (1995)](https://www.youtube.com/watch?v=Ju2L6NhSebQ)*

Before we get into the origin, status, and future of RDF Site Summary *or* Really Simple Syndication (RSS) or Atom it’s time for a quick work update. Oddly enough, [there is a connection](https://www.techmeme.com/220811/p27#a220811p27).

Thanks for reading Fudge Sunday! Subscribe to receive new posts and support my work.

Work Update
===========

First, I shared [my hashtag laden work update](https://www.linkedin.com/posts/jaycuthrell_digitaltransformation-servicesolutions-finops-activity-6962755116223315969-AjQh) on LinkedIn.[1](#footnote-1) Next, I then shared [my simple rebus and link work update](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1557120025177243656) on Twitter[2](#footnote-2) — but [my POSSE methodology](https://sunday.fudge.org/p/me-and-my-posse) will reclaim what has been shared at some point.

[![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/9be21b04-9ab5-405a-a6b5-5c4326224063_906x1326.png)](https://www.linkedin.com/posts/jaycuthrell_digitaltransformation-servicesolutions-finops-activity-6962755116223315969-AjQh)Reactions are endorphins 🙏🤓[![Twitter avatar for @JayCuthrell](https://substackcdn.com/image/twitter_name/w_96/JayCuthrell.jpg)Jay Cuthrell @JayCuthrell👋Hi. I'm an #IBMer 👁🐝Ⓜ️

[taos.com/resources/pres…](https://www.taos.com/resources/press-releases/taos-brings-aboard-new-senior-vice-president-of-products-to-accelerate-digital-transformation-strategies/)[![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/66dee875-26c9-42df-9317-7c3b7f294ac4_1200x628.jpeg)taos.comTaos Brings Aboard New Senior Vice President of Products to Accelerate Digital Transformation StrategiesIn its most recent hiring move, Taos, an IBM company, has brought on Jay Cuthrell as the company’s new Senior Vice President (SVP) of Products. As he joins the organization’s executive team, Cuthrell will focus on supporting and evolving Taos’ digital transformation services and solutions, adding to…](https://www.taos.com/resources/press-releases/taos-brings-aboard-new-senior-vice-president-of-products-to-accelerate-digital-transformation-strategies/)](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1557120025177243656?s=20&t=YmxcdliQBPfK5H45WTa9vg)[9:41 PM ∙ Aug 9, 2022](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1557120025177243656?s=20&t=YmxcdliQBPfK5H45WTa9vg)Getting Informed
================

RDF Site Summary *or* Really Simple Syndication ([RSS](https://en.wikipedia.org/wiki/RSS)) has existed for at least two decades — and Atom isn’t far behind — as a way to subscribe to articles you want to read before the days of keeping dozens of browser tabs open per website. Yet, the design goals of RSS/Atom appear to increasingly run counter to a growing deep web, silo content destinations, and monetization of the attention economy.

[![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/42139b5b-e242-49eb-a471-dda8763ad853_590x423.jpeg)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F42139b5b-e242-49eb-a471-dda8763ad853_590x423.jpeg)Interweb cats *love* the meaty new taste of content silos?When the topic of RSS/Atom comes up, for older generations of World Wide Web users there are often nostalgic callback moments. For example, the belief that the rise and eventual end of life for products like Google Reader was the first of many examples of [“why we can’t have nice things”](https://googleblog.blogspot.com/2013/03/a-second-spring-of-cleaning.html) on the Interwebs after the .com era.

Set it up DJ 🎶
--------------

Me? I *really* liked Google Reader. In fact, I took some screenshots of Google Reader, hosted them on services like [Flickr](https://www.flickr.com/services/feeds/) as a sort of visual blog about each new enhancement.

[![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/4ee8e0dc-1abc-48d7-b3a2-ae817e696cdf_936x600.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F4ee8e0dc-1abc-48d7-b3a2-ae817e696cdf_936x600.png)Circa 2007 - Google Reader told me what I tended to read.[![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f858e42c-daf8-46b9-80b9-464e5e89e1c8_894x426.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff858e42c-daf8-46b9-80b9-464e5e89e1c8_894x426.png)Circa 2008 - Google Reader enabled the taking of notes as a sort of meta blog[![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f33eb851-3874-4b46-8d03-c4d47c5f331a_769x380.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff33eb851-3874-4b46-8d03-c4d47c5f331a_769x380.png)Circa 2008 - Google Reader enabled the taking of notes as a sort of meta blogTake me away 🎶
--------------

The timeline of RSS/Atom feeds handling shows tension even now and likely for the future.

* 1999: Resource Description Framework (RDF) Model and Syntax Specification is [published](https://www.w3.org/TR/1999/REC-rdf-syntax-19990222/)
* 2003: RSS Advisory Board is [founded](https://web.archive.org/web/20060131103336/http://www.rssboard.org/) as Atom Syndication Format [proposed](https://web.archive.org/web/20030703063636/http://www.tbray.org/ongoing/When/200x/2003/06/23/SamsPie) as an RSS alternative
* 2005: Google Reader [launched](https://www.techmeme.com/051008/p21#a051008p21) by Google Labs
* 2007: Google Search *[demotes](https://www.techmeme.com/071219/p39#a071219p39)* use of RSS/Atom feeds
* 2009: Google Search *[promotes](https://www.techmeme.com/091030/p10#a091030p10)* use of RSS/Atom feeds
* 2010: New York Times [asserts rights](https://www.techmeme.com/100608/p31#a100608p31) over use of their own RSS feeds
* 2011: “RSS is dead” memes become [blog](https://www.techmeme.com/110104/p70#a110104p70) 👏 [worthy](https://web.archive.org/web/20110423010906/http://chrisyeh.blogspot.com/2011/04/death-of-feed.html) 👏 [content](https://web.archive.org/web/20110508222044/http://www.staynalive.com/2011/05/twitter-and-facebook-both-quietly-kill.html)
* 2012: Google Adsense for (RSS/Atom) Feeds is [retired](https://www.techmeme.com/120928/p38#a120928p38)
* 2013: Google Reader is [retired](https://killedbygoogle.com)
* (several years of blog post lamentations and… a miracle occurs?)
* 2022: RSS/Atom feeds are now associated with… [podcasts](https://www.techmeme.com/220330/p34#a220330p34) and [newsletters](https://www.techmeme.com/201216/p17#a201216p17)

That said, in the future, I believe that [syndication](https://indieweb.org/Category:syndication) will enjoy a renaissance moment as [WebSub](https://www.w3.org/blog/news/archives/6787) and similar [Event Hub](https://dev.twitch.tv/docs/eventsub) approaches take on consumer web, creator web, and future web considerations. Perhaps, even [future career work updates](https://www.techmeme.com/220811/p27#a220811p27) will be syndicated too.

Until next time… Place your bets…

Disclosure
==========

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

[1](#footnote-anchor-1)Read: [I’m starting a new position as SV P at Taos, an IBM Company! 👁 🐝 Ⓜ️](https://www.linkedin.com/posts/jaycuthrell_digitaltransformation-servicesolutions-finops-activity-6962755116223315969-AjQh)

[2](#footnote-anchor-2)Read: [👋Hi. I'm an #IBMer 👁🐝Ⓜ️](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1557120025177243656)

