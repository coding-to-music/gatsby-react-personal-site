# gatsby-react-personal-site

# 🚀 Javascript full-stack 🚀

## MERN Stack

### Gatsby / GraphQL / Contentful CMS / SCSS/Styled-Components / ThreeJS

https://github.com/coding-to-music/gatsby-react-personal-site

https://gatsby-react-personal-site.herokuapp.com

by Ilias Allek https://github.com/Allek97

https://iliasallek.com

https://github.com/Allek97/personal-website

Configuration:

```java
          href={`${process.env.GATSBY_APP_API_URL}/quest`}
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,

```

<p align="center">
  <a href="https://iliasallek.com" rel="noopener">
 <img src="https://personal-website-me.s3.amazonaws.com/PersonalWebsite-Responsive-resized.png" alt="Project thumbnail"></a>
</p>
<h3 align="center">My Personal Website</h3>
<div align="center" >
    <a href="https://iliasallek.com" rel="noopener" align="center"> https://iliasallek.com
    
</div>
<br>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> This is my personal website (4th project), It encompasses all the passion I have for software development. It has information about me and my journey in the field of web development. I listed all the projects I've done up until now. Each project is unique and demonstrate the skills I've acquired working on them.
</p>

## 🥳 About This Production <a name = "problem_statement"></a>

I was tired always using create-react-app for my projects, I wanted to try a new stack without going too far from React. Gatsby seemed like the perfect choice for my static website, It's super performant/fast and reduces some complexities like routing and image performance.

- I've used Contentful which is headless CMS that allowed me to stores my images and most of the data related to the overview of my projects. GraphQL is used to communicate with Contentful and fetch the necessary data through queries.

- I've used Figma to create/modify some images. For example, I've used it to add a frame with color gradients around project thumbnails. It was also used to animate the dashboard svg in the coding section of the homepage and implement the devices mockups images like below. The mockups are provided by Mockuuups Studio.

- On the homepage, I implemented a 3d globe using three js libraries. I've used the examples and the documentation in [three-globe github library](https://github.com/vasturiano/three-globe) to design my earth globe. There is an option in homepage to disable the 3d globe if it's running slow in certain browsers.
- There is a route for each of my projects where I explain more in depth about what I have done/learned building them and what technologies I've used.

There is a contact section where you can download my Curriculum Vitae. You can also use the form to contact me. I would be happy to respond as fast as possible for an interview or any other opportunity.

My personal website is fully responsive, you can use it in any device.

## ⛏️ Built With <a name = "tech_stack"></a>

- [Gatsby](https://www.gatsbyjs.com/) - I used Gatsby to build user interfaces in this web application.
- [SCSS/Styled-Components](https://styled-components.com/) - I mainly Styled-Components to design my personal website.
- [GraphQL](https://graphql.org/) - I used GraphQL to access and manipulate my data according to my needs.
- [Contentful](https://www.contentful.com/) - I used Contentful a headless CMS that allowed me to manage/store my content.
- [Netlify](https://www.netlify.com/) - I deployed the gatsby app on Netlify.

## 🧐 For more details <a name = "tech_stack"></a>

Please visit : https://iliasallek.com/personal-website/

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/gatsby-react-personal-site.git
git push -u origin main
```

## Heroku

```java
heroku create gatsby-react-personal-site
```

## Heroku MongoDB Environment Variables

```java
heroku config:set


heroku config:set PUBLIC_URL="https://gatsby-react-personal-site.herokuapp.com"
```
