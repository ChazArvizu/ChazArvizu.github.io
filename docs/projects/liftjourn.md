# LiftJourn (Mobile Application)

<img src="/liftjourn.png" alt="LiftJourn Logo" width="200" />

## Website
[www.liftjourn.com](https://www.liftjourn.com/) _Informational website for LiftJourn users._

## Production Dates
**Start:** March 2024

**Beta Deployed:** May 2024

**Currently:** Building Frontend in React Native Expo
- projected release on IOS: Early August

## Description
LiftJourn is a native application that allows users to create workout routines, track their workouts, and view their friend's completed workouts. LiftJourn provides the user with an easy-to-use and convenient way to keep track of their workouts to see their progress over time. LiftJourn has both a free version and a premium version available to users. The premium version allows more functionality with AI and statistical analysis. I have designed and developed this application all as a solo developer, learning Django, Vue.js and Expo as I develop the application.

## Technologies

### Frontend: Expo & Vue.js

#### Expo
Expo is a framework and a platform for creating universal React applications. It allows for quick and easy development of native apps for both iOS and Android from the same codebase. I am using Expo to build the frontend of LiftJourn's mobile application, taking advantage of its robust toolset and ease of deployment. This Expo frontend will consume the same backend Django REST API that the Vue.js frontend uses to ensure data consistency between both the native Expo app and Vue.js web app versions of LiftJourn. Expo also provides many great tools to help speed up development, such as the mobile app Expo Go:

##### Expo Go
Expo Go is a very powerful tool for mobile app developers who are trying to develop native applications for both android and ios who don't have access to both OS platforms. As a developer with a Windows PC and an Apple Iphone, Expo Go makes it super easy to test the application I'm developing on a physical apple device, without the need of a MacOS environment. All you have to do is download the Expo Go mobile app, scan the QR code that appears in the console after running the `npx expo start` command on your project, and the app bundles your code, allowing you to start testing immediately.

#### Vue.js (Web App Version Discontinued)
Vue.js is a JavaScript framework for building user interfaces. I chose Vue.js for LiftJourn due to its popularity, ease of learning, and the vibrant community backing it. Additionally, Vue.js offers excellent documentation and tooling, making it a great choice for rapid development. My Vue.js frontend consumes the Django REST API, which serves as the backend infrastructure for LiftJourn.

### Backend: Django
Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Django also offers great documentation along with many online resources for learning the framework. I use the Django REST framework as my backend API which is consumed by my Expo frontend.

### OpenAI: GPT-4o-mini API
The GPT-4o-mini API is a very powerful tool for integrating Artificial Intelligence functionalities into an application. In my use case, the 4o-mini model is a very accurate and affordable model to help boost the users experience. LiftJourn utilized the API in the following functionalities: Personalized Workout Routines, Exercise Statistical Analysis, and Autofill for Workouts Based on Past Data.

### Database: PostgreSQL
PostgreSQL is the best-supported database for Django. It offers a wide range of advanced features, including support for complex queries, indexing, full-text search, and JSON data types.

### Deployment: Digital Ocean
DigitalOcean is a cloud service provider that offers competitive pricing, with a straightforward pricing model that includes transparent pricing for all of their services. It also provides simple documentation, making it easy for developers to set up and manage servers, databases, and other cloud infrastructure components. 

#### Digital Ocean App Platform
I used their app platform to deploy my application, following the Django [documentation here](https://docs.digitalocean.com/developer-center/deploy-a-django-app-on-app-platform/) to initially set up my Django backend. I then added a static site to serve my frontend via a Content Delivery Network (CDN). The app platform provides a simple way for deploying new changes via GitHub; as a developer, all you have to do is push your changes to the main branch, and Digital Ocean will automatically build and redeploy your changes. This promotes a much more agile development process by streamlining the deployment process.

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
