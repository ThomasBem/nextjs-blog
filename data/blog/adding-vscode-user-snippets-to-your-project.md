---
title: Adding VSCode User Snippets to your project
date: '2018-01-14'
tags: ['vscode', 'burke holland']
draft: false
summary: The process of getting this up and running was super simple and I could just quickly add my existing snippets into our workspace and everything just worked.
---

On Friday, I was experimenting with creating some User Snippets in VSCode that would fit our current coding style and workflow. We are already using the [Simple React Snippets extension by Burke Holland](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) that remove a lot of boilerplate writing for us. But there's still some gaps between what those snippets do, and how we do things in our projects.

Simple React Snippets only deal with creating React components and quickly adding lifecycle methods, setState, render etc. I also wanted to cover testing React and Redux to make our TDD workflow better.

I am not going to write about the process of creating User Snippets in VSCode as this topic is well documented [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets). But I will write a little bit about how I ended up doing this.

Based on the link above on how to create snippets, that part was covered. What was not immediately clear to me was how to best share these snippets with the rest of my team working on a specific project. But a few options came to mind:

- Share the content of my VSCode javascript.json User Snippets file
- Create my own extension and publish it to the VSCode Marketplace

While sharing the content is really quick and easy, it leaves a lot to be desired in terms of workflow around improving upon the snippets. Copy/Pasting updated versions of the file between us to add new snippets or correct mistakes is not exactly a great workflow...

Creating a VSCode extension would make it nice and easy to share the snippets themselves. But I did not feel like starting out my little experiment by creating a repository for this, sharing it with my team members, figuring out how to publish extensions etc.

While doing some research, I came across [this blogpost](https://medium.com/hack-visual-studio-code/share-snippets-with-your-team-in-vs-code-817801e853fb) by [rebornix](https://twitter.com/njukidreborn) from the VSCode team. Detailing a simple solution for adding snippets to your Project/Workspace.

This seemed to be a perfect solution for this little experiment. Simply install a VSCode extension called [Project Snippets](https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets) and create these folders in your project .vscode/snippets/.

Inside here you can add any of your VSCode snippet .json files, like javascript.json and this will then be available to use inside your project!

This will look like this:

![.vscode/snippets/ folder](/static/images/blogposts/adding-vscode-user-snippets-to-your-project/snippetsfolder.png)

Using your snippets will then be as simple as typing a prefix in your code file and pressing tab:

![Using a snippet - 1](/static/images/blogposts/adding-vscode-user-snippets-to-your-project/usingsnippets1.png)

![Using a snippet - 2](/static/images/blogposts/adding-vscode-user-snippets-to-your-project/usingsnippets2.png)

The process of getting this up and running was super simple and I could just quickly add my existing snippets into our workspace and everything just worked. Going to be interesting to see how this turns out for us once we end up with a nice set of snippets!

Thanks to [rebornix](https://twitter.com/njukidreborn) for his Project Snippets extension and blogpost on sharing snippets with your team in VS Code!
