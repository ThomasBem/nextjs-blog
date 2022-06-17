---
title: My first open source pull request
date: '2017-01-08'
tags: ['open source', 'javascript', 'testing', 'ava']
draft: false
summary: 'This whole experience was made really enjoyable by the team running the Ava project. So if your looking for a place to make your first contribution you won´t be disappointed. '
---

After starting to get a little more familiar with our current tech stack at work. I have been looking into finding some interesting open-source projects to contribute too. There is so much great libraries and frameworks out there that we get to use for free, and I really want to try and contribute something back.

Not to mention its a great way to experience code bases that are different from the ones I currently work with.

### Ava

One of the projects that caught my interest was Ava which is a JavaScript test runner, [https://github.com/avajs/ava.](https://github.com/avajs/ava)

![Ava - Logo](/static/images/blogposts/my-first-open-source-pull-request/avalogo.png)

It was super simple to add into a project, did not require a bunch of additional dependencies and generally just seems to work.

I also came across this really nice blog post Vadim Demedes, one of the Ava team members and that sealed the deal.

[Making your first contribution - Vadim Demedes](https://medium.com/@vadimdemedes/making-your-first-contribution-de6576ddb190#.skznwvdbv)

### Getting started

Vadim mentions this concept of issues being labed with “good for beginner” or “good first contribution”. So I used this when browsing through the list of open issues in Ava, until I found something that seemed doable for me.

I also read through the [contribution guide](https://github.com/avajs/ava/blob/master/contributing.md) in the Ava repository. This contains information on how to report issues and submit pull requests for Ava.

Armed with this knowledge and a little uplifting quote at the end of the contribution guide. I was ready to get started!

> Looking to make your first ever contribution to an open-source project? Look no further! AVA may be one of the most welcoming projects and communities out there. Check out "Making your first contribution" blog post to start off the right way and make your work a part of AVA!

### Letting people know you want to contribute and ask for help if needed

I started out by adding a comment to the specific issue I wanted to tackle, letting people know I wanted to work on this.

At the same time I also asked for some pointers on getting started.

> I would like to give this a shot. I am not sure exactly how to go about it yet though, so any pointers are appreciated.

> Sindre, for your idea of showing pending tests got any idea how would that work? From what i have seen so far it looks like once a test fails with the --fail-fast flag enabled Ava collects the test results that have been generated so far then starts teardown.

https://github.com/avajs/ava/issues/1134

This gave me feedback from both Ava members and other contributors. The feedback contained detailed pointers to specific parts of the code that was of great help for me to get started on the right track.

_If any of you are reading this. Thanks for the support!_

### Creating a pull request

I spent several days getting a first working version running. The existing tests passed, and so did the new tests I added for my own functionality.

I was not entirely happy with the code, as I felt like there should be a better way of achieving the same result. But I decided to follow up on something I read in the Ava contribution guide.

> For ambitious tasks, you should try to get your work in front of the community for feedback as soon as possible. Open a pull request as soon as you have done the minimum needed to demonstrate your idea. At this early stage, don't worry about making things perfect, or 100% complete. Add a [WIP] prefix to the title, and describe what you still need to do. This lets reviewers know not to nit-pick small details or point out improvements you already know you need to make.

Now I am not saying my beginner task was all that ambitious, but I had some working code and a feeling that it could still be better. So this seemed like a perfect time to show what I had done and ask for feedback.

https://github.com/avajs/ava/pull/1160

It did not take long until I got some feedback on how to easily improve on my idea. Though it did take me quite a while to implemented the changes as it was in the middle of Christmas.

### Running into some problems

Having to update my existing pull request into a code base that had seen several commits since I created my local fork got me into some trouble.

I managed to mess up my git history when trying to rebase and squash commits into a nice linear and clean history. It got so messy that I considered throwing away the work I had done...

Searching around for a solution to my problem is when I found this great little video course on how to contribute to open source projects, made by Kent C. Dodds.

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

It contained short and sweet 3-4 minute long videos on the subjects I was struggling with.

- How to rebase a git Pull Request branch
- How to squash multiple git commits

The whole course lasts only 38 minutes, so if you are looking to learn more about how to contribute to open-source.

I used it several times when making some small changes to my PR as requested by the Ava members. So I can highly recommend it!

### Summary

So after updating my pull request a few times to simplify and improve things further based on feedback from the Ava team members. My pull request ended up being merged!

It felt really good to get my changes accepted. So I pretty much jumped straight onto a new issue and said I wanted to give it a go :)

This whole experience was made really enjoyable by the team running the Ava project. So if your looking for a place to make your first contribution you won´t be disappointed.

I know I want to keep trying to contribute more code here, and hopefully become more proficient in both Ava and working with open-source software.
