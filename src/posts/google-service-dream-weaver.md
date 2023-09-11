---
title: "Google Service (Dream) Weaver"
description: ''
date: 2023-03-12 22:16:13.626568+00:00

---

 

Music: [Gary Wright - Dream Weaver (1975)](https://www.youtube.com/watch?v=xZKuzwPOefs)

This week we take a look at Google Service Weaver and the next generation of distributed applications.

# Getting Informed

Last week [we looked at buf](https://fudge.org/archive/bufbuild-your-rest/). Now, let's talk a bit about the potential implications of a [blog post announcing Google Service Weaver](https://opensource.googleblog.com/2023/03/introducing-service-weaver-framework-for-writing-distributed-applications.html
) from [Srdjan Petrovic](https://www.linkedin.com/in/srdjan-petrovic-8a8a311/), [Garv Sawhney](https://www.linkedin.com/in/garvsawhney/), [Urs Hölzle](https://www.linkedin.com/in/urs-hölzle/), [Parveen Patel](https://www.linkedin.com/in/parveen-patel-b081622/), [Mark Lohmeyer](https://www.linkedin.com/in/marklohmeyer/), [Amin Vahdat](https://www.linkedin.com/in/vahdat/), [Michael Whittaker](https://www.linkedin.com/in/michael-whittaker-b28571203/), [Robert Grandl](https://www.linkedin.com/in/robert-grandl-2a2b751b/) et al.

There's a website: [https://serviceweaver.dev](https://serviceweaver.dev)

There's a /docs.html (well done): [https://serviceweaver.dev/docs.html](https://serviceweaver.dev/docs.html)

There's a hello world blog too: [https://serviceweaver.dev/blog/quick\_intro.html](https://serviceweaver.dev/blog/quick\_intro.html)

This will probably catch your eye...

> \_We found out that Service Weaver improves application latency by 15x and reduces VM costs by 9x when compared to a typical microservices solution built on top of gRPC and protocol buffers.\_ [^0]

So, I don't have any inside knowledge — but it is safe to say that Service Weaver didn't just come into existence a few weeks ago. This problem space is very likely an \_old itch\_ that got \_scratched within Google\_ and now \_the "new" backscratcher\_ is being shared with all.

For a great roundup post, check out what [Matt Campbell](https://www.linkedin.com/in/mbcampbell360/) put together over at [InfoQ](https://www.infoq.com/news/2023/03/google-weaver-framework/).

{% unfurl "https://www.infoq.com/news/2023/03/google-weaver-framework/" %}

## Maybe to an astral plane 🎶

Remember that Shakespearian thing about life being a stage and we are but actors? Well, let's go back to 2009 and learn about "Actors in Erlang"[^1] from [Alex Miller](https://github.com/puredanger).

And speaking of weavers and dreams... A quarter century has passed since Macromedia Dreamweaver launched[^2] to capture the hearts, minds, and checkbooks of budding web developers in the late 1990s. 

[![Screenshot 2023-03-12 at 4.31.44 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/f034da0e-c17a-47dc-ad67-57bf2dea55fc.png)](https://web.archive.org/web/19981202011445/http://www.macromedia.com/software/dreamweaver/)

A few years after capturing everything Microsoft had not already captured in the web authoring tools market, [Macromedia became part of Adobe in 2005](https://www.marketwatch.com/story/adobe-to-buy-macromedia-in-34-billion-stock-deal).

What can we draw from the comparison of a "new" framework meant for building and deploying distributed applications to a 90s era web focused integrated development environment (IDE)? Well, I don't know, yet — not for sure by any means.

## Meet me on the other side 🎶

The Service Weaver potential for "a better way" will be interesting to watch over the next three (3) years or so. In just a few months, Service Weaver has gathered [impressive GitHub vanity metrics](https://github.com/ServiceWeaver/weaver) (as of 12-Mar-2023):

- 41 Watchers
- 94 Forks
- 2,800 Stars

[![Screenshot 2023-03-12 at 4.10.58 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/853c4b9d-cdff-4a03-b5d7-53180c3dfeda.png)](https://github.com/ServiceWeaver/weaver/graphs/code-frequency)

For comparison, buf already has [impressive GitHub vanity metrics](https://github.com/bufbuild/buf) (as of 12-Mar-2023):

- 70 Watchers
- 174 Forks
- 6,400 Stars

[![Screenshot 2023-03-12 at 4.14.44 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/c72082a4-361f-4027-a898-e8318a00b3f5.png)](https://github.com/bufbuild/buf/graphs/code-frequency)

Graphs like these can be easily conflated with patterns for success in tooling. In reality, these graphs are looking backwards at what might be a trailing indicator of success in tooling.

Ultimately, as [Lee Ditiangkin](https://www.linkedin.com/in/leeditiangkin/) might argue, growth in adoption comes from [making a strong business case that happens to include tooling which improves key metrics used for measuring developer experience](https://www.infoq.com/articles/building-platform-business-case/).

So, what will be the next big thing in distributed applications?

Until then… Place your bets!

\_P.S. Special thanks to [Neeloy Bhattacharyya](https://www.linkedin.com/in/neeloybhattacharyya/) for the feedback [last week](https://fudge.org/archive/bufbuild-your-rest/) as inspiration to create this issue of Fudge Sunday!\_

# Work Plug

As a reminder, after a +25 year walkabout, I'm an IBMer [(again)](https://jaycuthrell.com/about/). For 2023, in "Work Plug", I'll share a new link each week that is [educational, accessible, and relevant to platform engineering](https://www.youtube.com/watch?v=who) from fellow IBMers[^IBMer] in the wider IBM Community. 

More Links of the Week:

- [Breaking legacy programs into microservices without breaking anything (🧑‍🏫 Video)](https://www.youtube.com/watch?v=2fszvFC-O2I)
- [What is generative AI, what are foundation models, and why do they matter? (📝 Blog)](https://www.ibm.com/blog/what-is-generative-ai-what-are-foundation-models-and-why-do-they-matter/)
- [Exploring Generative AI to maximize experiences, decision making, and business value (📝 Blog)](https://www.ibm.com/blog/exploring-generative-ai-to-maximize-experiences-decision-making-and-business-value/)
- [A valuable and responsible approach to AI (📝 Blog)](https://www.ibm.com/blog/how-ibm-consulting-brings-a-valuable-and-responsible-approach-to-ai/)
- [How can Generative AI drive disruptive value? (📺 Webinar)](https://community.ibm.com/community/user/ai-datascience/events/event-description?CalendarEventKey=bf13fab0-f709-440a-9e4b-0186a94ef467&CommunityKey=f1c2cf2b-28bf-4b68-8570-b239473dcbbc&Home=%2fcommunity%2fuser%2fai-datascience%2fevents%2fevent-description)

Stay tuned! 

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^0]: [A Quick Introduction to Service Weaver](https://serviceweaver.dev/blog/quick\_intro.html)
[^1]: [Understanding actor concurrency, Part 1: Actors in Erlang (2009)](https://www.infoworld.com/article/2077999/understanding-actor-concurrency--part-1--actors-in-erlang.html)
[^2]: [Adobe Dreamweaver on Wikipedia](https://en.wikipedia.org/wiki/Adobe\_Dreamweaver) 
[^IBMer]: Shout out to [Maja Vuković](https://www.linkedin.com/in/majav/) 