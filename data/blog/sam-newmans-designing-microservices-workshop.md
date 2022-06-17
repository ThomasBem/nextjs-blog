---
title: Summary of thoughts and learnings after attending Sam Newmans - Designing Microservices workshop @ NDC 2017
date: '2017-06-17'
tags: ['sam newman', 'microservices', 'conference']
draft: false
summary: 'Overall this was a great workshop with tons of content. We skipped around from topic to topic based on what people said they were most interested in during our introduction round at the first day of the workshop.'
---

## About Sam Newman

Sam Newman is an author, speaker, and independent consultant interested in cloud, continuous delivery and microservices. He travels around the world speaking at conferences and holding workshops on various topics regarding microservices. He is also the author of the book [Building Microservices](https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358/ref=sr_1_1?ie=UTF8&qid=1497890961&sr=8-1&keywords=designing+microservices). One of the first comprehensive books regarding the topic of microservices. If your interested in learning about Microservices, this is a great book. So go check it out!

For more information check out his webpage at [SamNewman.io](http://samnewman.io/) and go follow him on twitter [@SamNewman](https://twitter.com/samnewman).

##What is this workshop?
The Designing Microservices workshop was in our case a two day in person workshop in Oslo as a part of the pre-conference workshops during NDC Oslo. We where approximately 30 people there and the workshop consisted of presentations by Sam, ad-hoc Q&A + some group work.

The workshop functions as a great introduction to microservices for those that are not yet familiar with this topic. But in my opinion the most valuable part of this type of workshop is learning from the experiences that Sam has had during his time working with microservices. Not to mention to ability to ask questions regarding topics of interest.

### So what is microservices?

Small **independently deployable** services that **work together**, modelled around a **business domain**.

Now you might say have some questions regarding this definition? Like what do you define as small? Business domain?

To try an make sense of this definition lets use a simple example (This is a contrived example and made just for illustration purposes).

![Microservices Example](/static/images/blogposts/sam-newmans-designing-microservices-workshop/MicroServicesExample.png)

#### What is small?

In this example we have split our online record shop into three separate services. Where each piece is the smallest service we can make, containing the functionality / capabilities required to fulfil a business function within our domain.

So the definition of small depends on the context of your business domain and what the required capabilities are to perform certain business functions.

It can also depend on what level of granularity that your organization / team is comfortable with operating.

The hard answer here is that I guess it really depends! But usually we have a good sense of when we feel something is too big. So if it no longer feels like it's too big, maybe its just small enough? :)

#### Independently deployable and work together?

Services should work together with well defined contracts and models. These contracts and models should be independent of the internal implementation details of the service. This will enable us to deploy a new version of the billing service in the example above, without having to also deploy a new version of inventory.

We might have made changes to how we do our billing internally, but there's no reason for inventory to care about this. As long as the contract and functionality of the API stays the same.

#### What makes a good service?

**High cohesion**
Keep behavior and logic related to a specific function within our business domain together.

This will allows us to focus on one place to make changes, if we want to change the behavior of said function and deploy that new behavior into production.

So we want to try an identify capabilities within our business domain that relate to the same behaviour / function and group those together.

**Loose Coupling**
Changes in one service, should not require a change in another. The point of microservices is like we said earlier, to be independently deployable!

Loosely coupled services knows as little as possible about the services it communicates with. They work together through a well defined contract and model, hiding internal implementation details.

### Bounded Context

![Bounded context](/static/images/blogposts/sam-newmans-designing-microservices-workshop/BoundedContext.png)
https://martinfowler.com/bliki/BoundedContext.html

- Bounded contexts are effective boundaries for our microservices
- By identifying capabilities you need to provide, you can more easily identify bounded contexts
- Working out what should be shared, and what should remain hidden can be tricky

## What are the benefits of microservices

Here is a list of some benefits of microservices.

#### Ship software faster

By following the principle of independently deployable services it's now easier for us to ship updates to existing functionality or add new functionality.

#### Independently scalable

Since our system in a microservices world consists of multiple separate service with their own responsibilities. We can now scale and optimize on a per service basis. So our services that see a lot of traffic can be scaled up, independent of less busy services.

#### Target security concerns

If all you have is a monolith, everything needs to be secured to fit the requirement of the most sensitive piece of that monolith.

A Product Catalog Service and Account Service will both be wrapped in the same type of security.

While if these items are split into two separate services. You can put much more security in place for the Account Service compared to a more generic Product Catalog Service.

#### Enables you to experiment and adopt new technology faster and safer

You can try new things in smaller scale without worrying about impacting the rest of your system. It also enables technology optimization on a service to service basis. Like using a database tailor made for time-series data in a service that's focused on that. Compared to the rest of the system using a relational database to store its information.

## Downsides with microservices

Here is a list of some downsides of microservices.

#### Lots of options

There's a lot of options to choose from and this can become overwhelming.

- Tooling
- Configuration
- Discovery
- Routing
- Observability
- Datastores
- Orchestration & Deployment infrastructure
- Development: Languages & containers
- Policy: Architectural & Security Compliance

#### Testing is more complicated

Often the reason to adopt microservices is that we want to release software faster. So ensure that your testing is focused around the same goal.

Since we want our services to be independently deployable, but working together. One of the things we need to ensure is that when we deploy a new service, our changes won't break consumers of our API.

We can use consumer-driven contracts testing to achieve this. There are multiple options available in this space. Things like:

- [Spring Cloud Contracts (JVM)](http://cloud.spring.io/spring-cloud-contract/spring-cloud-contract.html)
- [Pact (JVM, .NET, JavaScript etc.](https://docs.pact.io/)

This can be a better option than relying on integration testing. Integration testing becomes slow as the amount of services you need to integrate with increases. Requiring more slow integration tests in your CI/CD pipeline.

#### Monitoring is more complex

![Murder Mystery](/static/images/blogposts/sam-newmans-designing-microservices-workshop/MurderMystery.png)

In a microservices world monitoring becomes more complex. When we had a big monolith, if something did not work. Atleast we knew where to begin looking!

- When using microservices log aggregation is a must
- Use correlation IDs to be able to trace calls
- Capture metrics at each node. Use dashboards and monitoring tools to ensure that you know if your services are healthy.
- Use synthetic transactions to mimic user behaviour in production. Can use this to verify that the system is behaving as intended.

Some of these things might seem a little overkill at first when you only have a few services. But once you come to a point where you really need them. Its very time consuming to go back and implement this across all of your services. So try getting it in early!

#### Cascading failures

If not handled correctly, failures in one service can cascade through the rest of the system. Slowing everything down or worst case making the service unusable.

## Should you do it?

Know what kind of outcome you are after and that microservices can help achieve that. Then make sure that you are vigilant when it comes to measuring the results when you implement microservices and make corrections as needed.

An example can be:
"We want to release software faster"

If so, do you know how long it takes you today to get from changing a line of code and getting that change into production? Measure your build pipeline and any other items in your release process. Then make sure that once you transition into microservices, this number goes in the direction you want. If not, don't be afraid to change course! Microservices is not a silver bullet for everything...

Three examples of why

### Improve autonomy

Improve the freedom we give people to do the job at hand, reducing the amount of sign off and coordination needed with others.

##### What could we track?

- Number of deployments
- Failure rate
- Number of meetings
- More clear lines of ownership

#### Scale your application / service

Functionally decompose your monolith to allow latency/load sensitive parts of your application to be scaled independently

##### What could we track?

- Latency
- Load
- Failure rate

#### Adopt new technology

Adopt some new tool, language or tech stack to allow us to solve a problem more easily

##### What could we track?

- Productivity
- Number of deploys

Don't chase microservices just because you heard its cool.

Need to know why you are using them, and once you do. Measure if they work for you!

## Have periodic checkpoints

If you decide to go in the direction of a microservices architecture. Have periodic checkpoints to verify that you are moving in the direction you want.

- Restate the goal you are trying to achieve
- Reflect on what the data is showing you
- What does the team think about it
- Decide what, if anything, to change

## Splitting out microservices

When getting started on a journey from monolith to microservices. Look for easy places to begin. Good candidates are:

- Modules with few inbound dependencies
- Stateless candidates

But theres also a trade-off between ease of decomposition vs benefits of decomposition.

So try to identify the candidates with a good benefit vs difficulty ratio.

#### Patterns for splitting out microservices from a monolith

Strangler pattern
![Strangler pattern](/static/images/blogposts/sam-newmans-designing-microservices-workshop/StranglerPattern.png)

Insert a http proxy in-front of your current monolith. Start intercepting the calls that goes to the piece you want to split out. Start routing them away from your monolith and into your newly developed microservice.

This style can also be done to convert from one protocol to another or to change over to event based communication between services.

## CAP theorem

It is impossible for a distributed computer system to simultaneously provide all three of the following guarantees

- **Consistency** (All nodes see the same data at the same time)
- **Availability** (A guarantee that every request receives a response about whether it was successful or failed)
- **Partition tolerance** (The system continues to operate despite arbitrary message loss or failure of part of the system)

Typically we need **Partition Tolerance**, so we end up trading off the other two.

## Security

- Microsoft has some great resources at their [Security Development Lifecycle page.](https://www.microsoft.com/en-us/sdl/)
- [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project#tab=OWASP_Top_10_for_2017_Release_Candidate) is still valid, as we are generally not getting better around security.
- Get a good routine for patching services. Outdated stuff is one of the main causes of security breaches.

#### Authentication

Basic Authentication + SSL is a good start. Its simple and secure, stable and standardized way of doing it and it works across different platforms and technologies.

## Miscellaneous links regarding topics that came up based on questions and discussions

- [HashiCorp Vault](https://www.vaultproject.io/) - Secret Storage, Key Rolling and Audit Logs
- [Split.io](http://www.split.io/) - Feature Toggle SaaS platform
- [LaunchDarkly](https://launchdarkly.com/) - Feature Toggle SaaS platform
- [Humio.com](http://humio.com/) - Log Management System
- [Okta](https://www.okta.com/) - Identity & Access Management
- [ForgeRock](https://www.forgerock.com/) - Identity & Access Management
- [Auth0](https://auth0.com/) - Identity & Access Management
- [Weave Cloud](https://www.weave.works/features/prometheus-monitoring/) - Hosted Prometheus Monitoring

## Summary

This post is getting kind of long and it's tough to try condensing everything we talked about over two whole days into a post. So my notes and thoughts are kind of jumbled, but going through this again in my head helped me. So hopefully it will make sense for someone else too!

Overall this was a great workshop with tons of content. We skipped around from topic to topic based on what people said they were most interested in during our introduction round at the first day of the workshop.

By far my favorite part of the workshop was being able to access questions and chat with Sam. He has a breadth of experience within this field that I don't think you will find elsewhere. So being able to pick his brain about architecture, the role of the architec, microservices, cloud solutions and many other things was really great.

Looking forward to checking out some of the presentations he held during the actual NDC conference once that content gets put up on Vimeo!
