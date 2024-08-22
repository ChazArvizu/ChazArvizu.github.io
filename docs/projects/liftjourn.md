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

<img src="/technologies-collage.png" alt="Collage Icon" style="width: 75%; height: auto; display: block; margin-left: auto; margin-right: auto; border-radius: 5px;">

## Technologies

### Frontends: Expo, Nuxt.js & Vue.js

<a href="https://docs.expo.dev/" target="_blank" rel="noopener noreferrer" style="display: flex; justify-content: center; align-items: flex-end; margin-top: 20px;">
  <img src="/logo-wordmark.svg" alt="Expo Icon" style="width: 50%; height: auto; display: block;">
</a>

### Expo
Expo is a powerful framework and platform for creating universal React applications. It revolutionizes the development process by allowing quick and easy creation of native apps for both iOS and Android from a single codebase. I've chosen Expo to build the frontend of LiftJourn's mobile application, leveraging its robust toolset and streamlined deployment process.

#### Key Features of Expo:
1. **Cross-Platform Development:** Build for iOS and Android simultaneously, saving time and resources.
2. **Over-the-Air Updates:** Push updates to your app without going through app store review processes.
3. **Pre-built Components:** Access a wide range of pre-built UI components and API modules.
4. **Expo SDK:** Provides a comprehensive set of APIs for accessing device and system functionality.
5. **Managed Workflow:** Simplifies the development process by abstracting away complex native build configurations.

#### Why Expo for LiftJourn?
- **Rapid Prototyping:** Expo's hot reloading and instant previews accelerate the development cycle.
- **Consistent Data Management:** The Expo frontend consumes the same Django REST API as the Vue.js web app, ensuring data consistency across platforms.
- **Community Support:** Expo has a large, active community, providing extensive resources and third-party libraries.
- **Scalability:** As LiftJourn grows, Expo can be "ejected" for more fine-grained control over the native code.

#### Development Tools

##### Expo CLI
Expo CLI is a command-line tool that serves as the primary interface for developing, building, and publishing Expo projects. It offers commands for:
- Creating new projects
- Starting development servers
- Building standalone apps
- Publishing updates

##### Expo Go
Expo Go is a powerful tool for mobile app developers, especially those working on cross-platform applications without access to both iOS and Android environments. As a developer using a Windows PC and an Apple iPhone, Expo Go has been invaluable in my workflow:

1. **Easy Testing:** It allows for immediate testing on a physical Apple device without needing a MacOS environment.
2. **Simple Setup:** Just download the Expo Go mobile app and scan the QR code that appears in the console after running `npx expo start`.
3. **Real-time Updates:** The app bundles your code on-the-fly, allowing for instant testing of changes.
4. **Device Features:** Expo Go provides access to device-specific features, enabling comprehensive testing.

##### Expo Snack
Expo Snack is an online playground for experimenting with React Native code. It's useful for:
- Quick prototyping of ideas
- Sharing code snippets with the community
- Testing components in isolation

#### Expo and React Native
While Expo is built on top of React Native, it abstracts away much of the complexity, making it an excellent choice for developers who want to focus on building features rather than dealing with native code intricacies. However, it's important to note that this abstraction can sometimes limit access to certain native modules or customizations. For LiftJourn, the benefits of rapid development and cross-platform compatibility outweigh these potential limitations.

### Nuxt.js (Static Site)

Nuxt.js is a powerful and flexible framework built on top of Vue.js, designed to create modern web applications with ease. For LiftJourn, I'm utilizing Nuxt.js to develop the static informational site, leveraging its robust features for server-side rendering, static site generation, and improved SEO capabilities.

#### Key Features of Nuxt.js:
1. **Server-Side Rendering (SSR):** Improves initial page load times and SEO.
2. **Static Site Generation (SSG):** Creates fast, pre-rendered static pages.
3. **Automatic Code Splitting:** Optimizes application load times.
4. **Vue.js Integration:** Seamlessly works with Vue.js ecosystem.
5. **Modular Architecture:** Allows for easy extension of functionality.

#### Why Nuxt.js for LiftJourn's Informational Site?
- **SEO Optimization:** Server-side rendering and static site generation improve search engine visibility.
- **Performance:** Fast loading times due to pre-rendered content and optimized assets.
- **Developer Experience:** Intuitive project structure and conventions speed up development.
- **Scalability:** Easy to start small and scale up as the project grows.

#### Nuxt.js and Vue.js Experience
Having prior experience with Vue.js has made working with Nuxt.js a natural progression. The familiar Vue.js syntax and conventions are present in Nuxt.js, with additional features that enhance the development process:

1. **File-based Routing:** Automatically generates routes based on the file structure.
2. **Layouts and Pages:** Simplifies the creation of consistent layouts across pages.
3. **Vuex Store Integration:** Built-in support for state management.
4. **Nuxt Modules:** Extends functionality with a wide range of community-built modules.

#### Development Workflow
The development workflow with Nuxt.js is streamlined and efficient:

1. **Project Setup:** Quick setup using `create-nuxt-app`.
2. **Development Server:** Hot-reloading enabled for rapid iterations.
3. **Content Management:** Easy integration with headless CMS or markdown files for content.
4. **Building and Deployment:** Simple commands to generate static sites for deployment.

#### Static Site Generation for LiftJourn
For the LiftJourn informational site, I'm leveraging Nuxt.js's static site generation capabilities:

1. **Content Creation:** Writing content in Markdown or using a headless CMS.
2. **Page Generation:** Nuxt.js pre-renders all pages at build time.
3. **Asset Optimization:** Automatically optimizes images and CSS for faster load times.
4. **Deployment:** Easily deployable to static hosting platforms, in my case, Digital Ocean App Platform.

This approach ensures that the informational site is fast, SEO-friendly, and cost-effective to host, providing an excellent user experience for visitors looking to learn about LiftJourn before downloading the app.

### Vue.js (Web App Version Discontinued)
Vue.js is a JavaScript framework for building user interfaces. I chose Vue.js for LiftJourn due to its popularity, ease of learning, and the vibrant community backing it. Additionally, Vue.js offers excellent documentation and tooling, making it a great choice for rapid development. My Vue.js frontend consumes the Django REST API, which serves as the backend infrastructure for LiftJourn.


<a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" style="display: flex; justify-content: center; align-items: flex-end;">
  <img src="https://static.djangoproject.com/img/logos/django-logo-negative.png" alt="Django Icon" style="width: 50%; height: auto; display: block; border-radius: 5px;">
</a>

### Backend: Django

[Django](https://www.djangoproject.com/) is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Django also offers great documentation along with many online resources for learning the framework. I use the Django REST framework as my backend API which is consumed by my Expo frontend.

#### Key Features of Django:
1. **ORM (Object-Relational Mapping):** Django's ORM allows you to interact with databases using Python code instead of SQL.
2. **Admin Interface:** Django provides an automatic admin interface for managing your application's data.
3. **URL Routing:** Django's URL dispatcher maps URLs to views, making it easy to design clean and elegant URLs.
4. **Security Features:** Django includes protection against common web vulnerabilities like CSRF, XSS, and SQL injection.

#### Why Django?
- **Scalability:** Django can handle high-traffic websites, making it suitable for both small and large-scale projects.
- **Versatility:** It's used in various domains, from content management systems to social networks and scientific computing platforms.
- **"Batteries Included" Philosophy:** Django comes with many built-in features, reducing the need for third-party libraries.

#### Django REST Framework
The [Django REST Framework](https://www.django-rest-framework.org/)(DRF) is a powerful toolkit that provides many different solutions for building backend APIs. The DRF offers support/tools for Serialization, Requests/Responses, Class Based Views and Authentication/Permissions.

#### Key Features of Django REST Framework:
1. **Serialization:** Converts complex data types, such as querysets and model instances, to Python datatypes that can then be easily rendered into JSON, XML, or other content types.
2. **Authentication:** Includes packages for OAuth1a and OAuth2 authentication.
3. **Viewsets:** Combines the logic for a set of related views in a single class.
4. **Browsable API:** Provides a web browsable API, which is a huge win for developer usability.

#### Why Use Django REST Framework?
- **Flexibility:** Can be used for everything from simple JSON APIs to complex hyperlinked APIs.
- **Customization:** Highly customizable - you can use regular function-based views if you prefer.
- **Community:** Large and active community, which means good support and frequent updates.

<a href="https://openai.com/api/" target="_blank" rel="noopener noreferrer" style="display: flex; justify-content: center; align-items: flex-end;">
  <img src="/openai-white-lockup.svg" alt="OpenAI Icon" style="width: 50%; height: auto; display: block;">
</a>

### OpenAI: GPT-4o-mini API
The GPT-4o-mini API is a very powerful tool for integrating Artificial Intelligence functionalities into an application. In my use case, the 4o-mini model is a very accurate and affordable model to help boost the users experience. LiftJourn utilized the API in the following functionalities: Personalized Workout Routines, Exercise Statistical Analysis, and Autofill for Workouts Based on Past Data.

### Database: PostgreSQL
PostgreSQL is the best-supported database for Django. It offers a wide range of advanced features, including support for complex queries, indexing, full-text search, and JSON data types.

<a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer" style="display: flex; justify-content: center; align-items: flex-end;">
  <img src="/do-icon.png" alt="Digital Ocean Icon" style="width: 50%; height: auto; display: block; border-radius: 5px;">
</a>

### Deployment: Digital Ocean
DigitalOcean is a cloud service provider that offers competitive pricing, with a straightforward pricing model that includes transparent pricing for all of their services. It also provides simple documentation, making it easy for developers to set up and manage servers, databases, and other cloud infrastructure components. 

#### Digital Ocean App Platform
I used their app platform to deploy my application, following the [Django documentation here](https://docs.digitalocean.com/developer-center/deploy-a-django-app-on-app-platform/) to initially set up my Django backend. I then added a static site to serve my frontend via a Content Delivery Network (CDN). The app platform provides a simple way for deploying new changes via GitHub; as a developer, all you have to do is push your changes to the main branch, and Digital Ocean will automatically build and redeploy your changes. This promotes a much more agile development process by streamlining the deployment process.

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
