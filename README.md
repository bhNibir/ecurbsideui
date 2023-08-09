<div id="top"></div>

<br />
<div align="center">
  <h1 align="center">
  <strong>
  Ecurbside UI
 </strong> </h1>

  <p align="center">
    Medical Treatment Review and Rating Social App!
    <br />
    <br />
    <a href="https://ecrubside.web.app/"><strong>» Live Demo </strong></a> ||
    <a href="https://github.com/bhNibir/ecurbsideapi/"><strong>» Ecurbside Api</strong></a>
    <br />
  </p>
</div>

## Description

A full-stack review and rating social web app for medical treatment where anyone can register and share their opinion about any treatment. There can add new diseases, disease-related treatments, and ratings.

<br/>

## Built With

<br/>

- [![React][react.js]][react-url]
- React router
- mui
- apollo-client
- React Hook Form
- yup

<br/>
<br/>

## Getting Started

Setting up the project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- yarn

  ```sh
  npm install yarn -g
  ```

### Installation

<br/>

1. Clone the repo

   ```sh
   git clone https://github.com/bhNibir/ecurbsideui.git
   ```

2. Go to project root folder and Install NPM packages

   ```sh
   yarn
   ```

3. Enter Graphql API uri in `src/App.js` </br></br>
   <a href="https://github.com/bhNibir/ecurbsideapi/"><strong> Ecurbside Api</strong></a>

   ```js
   const httpLink = createHttpLink({
     uri: "http://127.0.0.1:8000/graphql/",
   });
   ```

4. run devlopment sever

   ```sh
   yarn start
   ```

<br/>

## Project Screenshot

<br/>

Home Page

[![Login Page Screen Shot][login-screenshot]](https://ecrubside.web.app/)
[![Signup Page Screen Shot][signup-screenshot]](https://ecrubside.web.app/)
[![Home Page Screen Shot][home-screenshot]](https://ecrubside.web.app/)
[![Disease Page Screen Shot][disease-screenshot]](https://ecrubside.web.app/)
[![Add disease Page Screen Shot][add-disease-screenshot]](https://ecrubside.web.app/)
[![Treatment Page Screen Shot][treatment-screenshot]](https://ecrubside.web.app/)
[![Add Review Page Screen Shot][add-review-screenshot]](https://ecrubside.web.app/)

<!-- GETTING STARTED -->
<br/>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[home-screenshot]: images/home.png
[add-review-screenshot]: images/add-review.png
[add-disease-screenshot]: images/add-disease.png
[treatment-screenshot]: images/treatment.png
[disease-screenshot]: images/disease.png
[login-screenshot]: images/login.png
[signup-screenshot]: images/signup.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org
