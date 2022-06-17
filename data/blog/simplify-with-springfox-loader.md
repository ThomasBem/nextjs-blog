---
title: Simplify your Springfox/Swagger setup with Springfox-Loader
date: '2016-11-22'
tags: ['spring boot', 'swagger', 'springfox']
draft: false
summary: 'Springfox-Loader - Simplifies the initialization of Springfox.'
---

Today I want to shine some light on [Springfox-Loader](https://github.com/jarlehansen/springfox-loader), a nice little library written by a friend of mine, Jarle Hansen.

### What does it do?

Springfox-Loader:

> Simplifies the initialization of Springfox. It does not offer all the flexibility and configuration options available in Springfox, but is created to be a simple way to get spring + swagger up and running without the need for a lot of configuration.

### How does it work

To get started all that is required is to add the @EnableSpringfox annotation in your spring-boot application and supplying the required title and version properties.

```java
@EnableSpringfox(
    @Info(title = "title", version = "${version}")
)
```

This will give you a working swagger endpoint that can be reached at _localhost:8080/swagger-ui.html_

This is great for getting something up real quick so that you can tests against your endpoints.

Another great feature of the library is the listValueProps endpoint that can be enabled by setting listValueProps = true.

```java
@EnableSpringfox(
    listValueProps = true,
    value = @Info(title = "", version = ""
 )
```

This will create a listValueProps endpoint that displays all the @Value-annotations (key and default value) used in the application. The endpoint is displayed in swagger-ui as 'Value-properties'. By default this is disabled.

### Example

To quickly show you how Springfox-Loader works i've made a tiny example project in java to illustrate how this works.

First i created a @RestController with a few simple @RequestMapping annotations for a /hello-world and hello endpoint.

```java
@RestController
public class HelloWorldController {

    @RequestMapping(value = "/hello-world", method = RequestMethod.GET)
    private String helloWorld() {
        return "Hello World!";
    }

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    private String hello(@RequestParam String person) {
        return "Hello " + person;
    }
}
```

Starting up the spring-boot application now will allow me to hit the endpoints and see this:
![Hello World without Springfox / Swagger](/static/images/blogposts/simplify-with-springfox-loader/helloworld.jpg)

While this works and lets me test my endpoints. The approach is neither elegant nor very scalable as you continue to add on additional and even more complex endpoints.

So lets see how we can improve this by using Springfox-Loader to quickly get started with Springfox/Swagger!

As per instructions in the [Springfox-Loader github](https://github.com/jarlehansen/springfox-loader) we add the required dependency.

```gradle
repositories {
    jcenter()
	mavenCentral()
}

dependencies {
	compile('com.github.springfox.loader:springfox-loader:0.1.2')
	compile('org.springframework.boot:spring-boot-starter-web')
	testCompile('org.springframework.boot:spring-boot-starter-test')
}
```

Then in our Application.java class that starts up our application we add the required Springfox-Loader annotation.

```java
@EnableSpringfox(
    @Info(title = "Springfox-Loader-Demo", version = "1.0.0"))
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
```

Now once you build and run the application you can navigate to _localhost:8080/swagger-ui.html_

![Swagger Overview](/static/images/blogposts/simplify-with-springfox-loader/swagger.png)

Expanding each of the listed endpoints shows you more detailed information and also allows you to run the endpoints.

![Detailed View - Testing Endpoint](/static/images/blogposts/simplify-with-springfox-loader/swaggerdetails.png)

Here you can see all the details regarding the /hello endpoint. Its a GET, it requires a query parameter "person" and it returns a String.

I added in my name, "Thomas" and pressed the "Try it out!" button and got a "Hello Thomas" string and a 200 OK returned directly in the swagger UI.

### Summary

Springfox-Loader enables you to instantly get swagger up and running and gives you some additional benefits like more readable endpoints + access to your @Value annotations.

This makes it a good choice if its your first time using swagger or you just need to get something up and running really fast.

We have actually taken the Springfox-Loader plugin and applied it to the template/starter-kit that I use in my daily work for getting new microservices up and running. So far its been working great!

Head over to [Springfox-Loader on Github](https://github.com/jarlehansen/springfox-loader) and give it a try.
