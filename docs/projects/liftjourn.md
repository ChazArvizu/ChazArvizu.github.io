# LiftJourn (Beta Version Now Deployed :tada:)

![LiftJourn Logo](/liftjourn_icon.png)

## Website
[www.liftjourn.com](https://www.liftjourn.com/)

## Production Dates
**Start:** March 2024

**Beta Deployed:** May 2024

**Currently:** Building Frontend in React Native Expo
- projected release on Android and IOS: Mid July

**End:** Production Still In Progress

## Description
LiftJourn is a web/native application that allows users to create workout routines, track their workouts, and view their friend's completed workouts. LiftJourn provides the user with an easy-to-use and convenient way to keep track of their workouts to see their progress over time. LiftJourn will have both a free version and a premium version available to users. The premium version will allow more functionality and statistical analysis. I have designed and developed this application all as a solo developer, learning Django, Vue.js and Expo as I develop the application.

## Technologies

### Frontend: Expo & Vue.js

#### Expo
Expo is a framework and a platform for universal React applications. It allows for quick and easy development of native apps for both iOS and Android from the same codebase. I am using Expo to build the frontend of LiftJourn's mobile application, taking advantage of its robust toolset and ease of deployment. This Expo frontend will also consume the same backend Django REST API that the Vue.js frontend consumes to ensure data consistency between both the native Expo app and Vue.js web app versions of LiftJourn.

#### Vue.js
Vue.js is a JavaScript framework for building user interfaces. I chose Vue.js for LiftJourn due to its popularity, ease of learning, and the vibrant community backing it. Additionally, Vue.js offers excellent documentation and tooling, making it a great choice for rapid development. My Vue.js frontend consumes the Django REST API, which serves as the backend infrastructure for LiftJourn.

### Backend: Django
Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Django also offers great documentation along with many online resources for learning the framework. I use the Django REST framework as my backend API which is consumed by my Vue.js frontend.

### Database: PostgreSQL
PostgreSQL is the best-supported database for Django. It offers a wide range of advanced features, including support for complex queries, indexing, full-text search, and JSON data types.

### Deployment: Digital Ocean
DigitalOcean is a cloud service provider that offers competitive pricing, with a straightforward pricing model that includes transparent pricing for all of their services. It also provides simple documentation, making it easy for developers to set up and manage servers, databases, and other cloud infrastructure components. I used their app platform to deploy my application, following the Django [documentation here](https://docs.digitalocean.com/developer-center/deploy-a-django-app-on-app-platform/) to initially set up my Django backend. I then added a static site to serve my frontend via a Content Delivery Network (CDN). The app platform provides a simple way for deploying new changes via GitHub; as a developer, all you have to do is push your changes to the main branch, and Digital Ocean will automatically build and redeploy your changes. This promotes a much more agile development process by streamlining the deployment process.

## Services
- **Github**: Version control system. All my code is uploaded to a private GitHub repository.
- **Email Validation**: Utilizes a Google Cloud service account to impersonate a noreply email for email validation.
- **Namecheap**: Namecheap offers domain registration, hosting, and other services at a fair price.

## Features
- User authentication and authorization
- Workout routine creation and management
- Workout tracking and progress visualization
- Social features for viewing friends' workouts

## Future Plans
- Implement additional social features (view friends' profiles, add their routines to your routines)
- Enhance workout tracking statistics analysis for premium users
- Improve user interface and user experience with feedback from users
