---
title: Testing Spring-Boot apps with Spock and Groovy - Part 1
date: '2017-03-21'
tags: ['spring boot', 'spock', 'groovy', 'testing']
draft: false
summary: 'Create-React-App - Set up a modern web app by running one command.'
---

## Introduction

Test-Driven Development seems to be one of those topics nowadays that almost everyone agrees is super important when it comes to developing high quality software. Yet when the time comes to sit down and code, it`s often treated as an afterthought. We write some code, and then hopefully we throw on a few tests afterwards.

I see this time and time again, and it´s not just with junior developers. Even senior developers with many years of experience writing software fall into this trap, including myself.

The most common cause of this seems to be that we struggle with the tools and techniques (libraries / frameworks) necessary to do TDD in a nice and efficient way. So figured I would write a little bit about testing Spring-Boot applications using Spock and Groovy which is my preferred setup for testing.

This first post will be an introduction to Spock / Groovy and why you should use this combination for testing. The later parts of the series will deal with some of the more troublesome cases with TDD. Specifically testing when there are databases and / or external APIs involved.

Hopefully someone can learn something from that, but I am also hopeful that someone more experienced than me can come along with some tips for me!

## What is Spock and why should you use it for testing?

Spock is a comprehensive testing framework written in Groovy, that can be used to test both Java and Groovy applications. The reason I call it comprehensive is because it comes with built-in features for more than just regular testing, it also supports behaviour-driven testing and mocking / stubbing. Traditionally you would be looking at using something like JUnit, Mockito and JBehave to enable all of the same features as you get out of the box with Spock.

**Concise syntax**
Since Spock is based on Groovy, it uses the Groovy syntax which is very concise, and Spock follows that up with its own clean and simple syntax on top.

**Readable**
Spock allows you to name your tests with full english sentences, making it easy to read them and understand their meaning. Combine this with it`s BDD inspired given, when, then style of writing tests and you are able to writing tests that are really easy to understand.

**Easy to migrate from existing test setup**
Spock is easily integrated with both Maven and Gradle, running as part of a build process and producing reports of automated test runs. It runs on top of the JUnit runner which is widely supported and makes Spock fully compatible with existing JUnit tools.

Since both Groovy and Java run on the JVM, it's possible to run both JUnit and Spock tests in the same project. Making it possible to gradually transition from an existing testing suite over to Spock.

**Groovy**
Groovy comes with a nice and clean syntax, plus some great little features that makes your test code much more readable. Things like support for closures and the ability to create objects by using maps of fields / values inside the constructor.

For more details regarding Spock and Groovy take a look at [Java Testing with Spock by Konstantinos Kapelonis.](https://www.amazon.com/Java-Testing-Spock-Konstantinos-Kapelonis/dp/1617292532/ref=sr_1_1?ie=UTF8&qid=1490036228&sr=8-1&keywords=java+testing+with+spock)

## Lets take a look at a simple Spock test file

![Simple Spock example](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/TestExample1.png)

![Test Runner Output - Spock](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/TestRun1.png)

So this is a simple Spock test file, containing two tests. There are many things going on here, so lets quickly go through it.

- All Spock tests extends Specification, and we typically name them classname + Spec (CalculatorSpec)
- Test methods are written using def + a string enabling us to write really good test names
- Follows the "given, when, then" BDD flow (in example no given is required so its not present)
- Groovy supports optional typing, so we can use def calculator = new Calculator and have it resolved at runtime
- Semicolons are optional
- Lack of assert statements
- Test runner Output is very easy to read because of the full english sentences

Lets compare this to a JUnit test just to see the difference.
![Simple JUnit example](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/JUnitTestExample.png)

![Test Runner Output - JUnit](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/JUnitTestRun.png)

- There is no extends Specification here, but each test method has a @Test annotation
- Test names are method names, so it's harder to write really good names
- There is no defined way of writing your tests, so its up to the developer
- No more optional type, Calculator calculator = new Calculator();
- Java requires semicolon
- Must use assert statements
- Test runner output is not that descriptive because of the lack of full sentences

In these very simple examples the differences do not seem all that big. But I think just the support for full sentences should be motivation enough to consider Spock / Groovy. Human readable code is super important!

But we will take a look at another example that shows how much cleaner tests can be using Spock.

![Spock Example - 2](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/SpockExample2.png)

![Spock Test Runner Output - Example 2](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/SpockRun2.png)

Here we have a pretty simple and clean test using Spock. Given a list of employees, verify who is eligible for a 10 year service award and return them as a list of employees. Its easy to see what`s test data in _given_, what we are testing in _when_ and what we are asserting in _then_.

Here is a similar test in JUnit.

![JUnit Example - 2](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/JUnitExample2.png)

![JUnit Test Runner Output - Example 2](/static/images/blogposts/testing-spring-boot-apps-with-spock-and-groovy/JUnitRun2.png)

The difference in how much code is required to create the initial test data and lack of clear separation between setup and what we are actually testing. In combination with the clunky asserts paints a pretty compelling picture for using Spock.

And this is before we even start on more advanced topics like mocking / stubbing!

## Summary

This was just a brief introduction to testing with Spock / Groovy, but I hope that it was enough to peak your interest in using this amazing combination for testing your Java applications!

If you want to learn more about Spock I can really recommend the [Java Testing with Spock by Konstantinos Kapelonis](https://www.amazon.com/Java-Testing-Spock-Konstantinos-Kapelonis/dp/1617292532/ref=sr_1_1?ie=UTF8&qid=1490036228&sr=8-1&keywords=java+testing+with+spock) that I mentioned previously. It covers everything you need to know to get started with Spock and more.

I also plan on following up with a few more posts on more advanced and specific topics like testing when there are databases and / or external APIs involved. Based on my own experience developing Spring-Boot applications.

So if this post got you interested in learning more, stay tuned! :)
