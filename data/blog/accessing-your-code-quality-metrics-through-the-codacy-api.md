---
title: Accessing your code quality metrics through the Codacy API
date: '2016-12-03'
tags: ['code quality', 'code coverage', 'java', 'api', 'codacy', 'swagger']
draft: false
summary: 'Accessing the code quality metrics through the Codacy API is fairly straight forward once you understand how it works.'
---

In my last blog post, [Hosted services for code coverage and quality metrics - part 1](/blog/hosted-services-for-code-coverage) I went through how to get up and running with both [Codecov](https://codecov.io) and [Codacy](https://www.codacy.com/). I finished the post with this summary:

> At the time of me wrapping up this part 1 we are currently using Codacy. Its nice having both coverage and quality metrics in one tool. The one requirement that we have been struggling with though is API access for getting metrics onto our status displays.

> I will admit that we have not invested a ton of time in this, but compared to how easy it was to get working with Codecov it is a bit disappointing.

After linking my blog post on Twitter and mentioning Codecov and Codacy both companies liked my post and Codacy even wrote me a quick comment. (Thanks guys!)

So I used the chance to follow up with Codacy regarding the API issues we have experienced so far. After some more experimenting I figured out what the problem was and how this works.

So I figured I should write a small post about how to get your code quality metrics through the Codacy API.

### Codacy API

Codacy has made their API available and browsable through Swagger at [https://api.codacy.com/swagger.](https://api.codacy.com/swagger)

This makes it real easy to see what endpoints are available and make test calls directly to them through the Swagger UI. (If you want to know more about Swagger and how to get started using it. Checkout one of my earlier posts, [Simplify your Springfox/Swagger setup with Springfox-Loader](/blog/simplify-with-springfox-loader)

When accessing the Codacy Swagger page we see that there are endpoints related to both commits and projects.

![Swagger](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/swagger.png)

Since we want to get access to metrics for our projects / repos we are going to focus on the project endpoints.

![Swagger Project APIs](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/swaggerproject.png)

Using the **_/2.0/*username*/*projectName*_** endpoint through Swagger on one of my open source repositories, [Auth0 JWT Spring Boot](https://github.com/ThomasBem/auth0-jwt-spring-boot) that I have added to Codacy gives me this back.

![Swagger Codacy return](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/swaggerreturn.png)

Getting this data out was as simple as passing in my Codacy username and the repository/project name.

What we had been trying for our companies private repositories was very similar to this. Just that we added a header called api_token in our requests and put in our projects API token. This made sense to us following both the swagger documentation.

![Curl](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/curl.png)

And the little documentation we found on the Codacy website regarding their API, [Codacy Project API](https://support.codacy.com/hc/en-us/articles/207994675-Project-API)

This got me a little confused at first, as we had not managed to get this working for our companies private repositories. But I kept on trying a few different things and I think I found what our issue was.

### Accessing your private repositories metrics

The first and most important thing that we did wrong was the token. The token required is **NOT** your projects API token found here.

![My repos](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/accessrepos.png)

I have tried this on multiple different projects in our company account and it never works. What does work on the other hand is using your accounts API token. This can be found here.

![My account](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/myaccount.png)

Another thing that we had done "wrong" and that got us confused was the "My Projects" vs "Organisations" feature in Codacy.

![My Projects vs Organisation](/static/images/blogposts/accessing-your-code-quality-metrics-through-the-codacy-api/myprojects.png)

We have setup an organisation for our company and invited our team members into that. This way people login with their own company accounts and see all our repositories.

When setting up our first couple of projects in Codacy this was done by different people on their own accounts. Now this works fine for the organisation view in Codacy, but it crashes with the fact that to access your repositories metrics in the API. You need the API token associated with an account, not the project itself.

So now we have to go through Codacy and ensure that its the same account adding all of the projects into our company organisation. So that we can use that accounts API token in our service that is requesting code metrics through the Codacy API.

### Summary

Accessing the code quality metrics through the Codacy API is fairly straight forward once you understand how it works. For open source repositories it just works out of the box, but once you get to private repositories it required a fair amount of experimentation.

There is little documentation on this subject and the few references I have found are for using the projects API token for anything related to a project.

Hopefully this can be fixed to work the way it seems intended to work and the documentation updated to reflect that. In the mean time I hope this post can provide some guidance if you are interested in grabbing your code quality metrics from the Codacy API :)
