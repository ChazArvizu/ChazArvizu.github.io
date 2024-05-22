LiftJourn (Beta Version Now Deployed :tada:)
====

## Website
[www.liftjourn.com](https://www.liftjourn.com/)

## Production Date
**Start**: March 2024

**End**: Production Still In Progress

## Description
LiftJourn is a web application that allows users to create workout routines, track their workouts, and view with their friend's workouts. LiftJourn provides the user with an easy to use and convenient way to keep track of their workouts to see their progress over time. LiftJourn will have both a free and paid version available to users. The paid version will allow more functionality and statical analysis. I have designed and developed this application all as a solo developer, leaning both Django and Vue.js as I develop the application.

## Technologies

- **Frontend**: Vue.js
  - Vue.js is a JavaScript framework for building user interfaces.  I chose Vue.js for LiftJourn due to its popularity, ease of learning, and the vibrant community backing it. Additionally, Vue.js offers excellent documentation and tooling, making it a great choice for rapid development. My Vue.js frontend consumes the Django backend API, which serves as the backend infrastructure for LiftJourn.

- **Backend**: Django
  - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Django also offers great documentation along with many online resources for learning the framework. I use the django REST framework as my backend API which is consumed by my Vue.js frontend. 

- **Database**: PostgreSQL
  - PostgreSQL is the best supported database for Django. It offers a wide range of advanced features, including support for complex queries, indexing, full-text search, and JSON data types.

- **Deployment**: Digital Ocean
  - DigitalOcean offers competitive pricing, with a straightforward pricing model that includes transparent pricing for all services. It also provides simple documentation, making it easy for developers to set up and manage servers, databases, and other cloud infrastructure components. On Digital Ocean I will be using their app platform to deploy my application, I followed the django [documentation here](https://docs.digitalocean.com/developer-center/deploy-a-django-app-on-app-platform/) to initially setup my backend. I then added a static site to serve my frontend via a Content Delivery Network (CDN). The app platform provides a simple way for deploying code via github, as a developer all you have to do is push your changes to the main branch and digital ocean will automatically build and redeploy your changes, this promotes a much more agile development process by streamlining the deployment process.

## Services
- **Github**: Version control system. All my code is uploaded to a private github repository.
- **Email Validation**: Utilizes a Google Workspace service account to impersonate a noreply email for email validation.
- **Namecheap**: Namecheap offers domain registration, hosting, and other services at a fair price.

## Features
- User authentication and authorization
- Workout routine creation and management
- Workout tracking and progress visualization
- Social features for viewing friends' workouts

## Future Plans
- Implement a mobile version for IOS and Android with Flutter Framework
- Implement additional social features
- Enhance workout tracking statistics analysis
- Improve user interface and user experience with feedback from users