import{_ as e,o as a,c as o,f as t}from"./app-D-S7-0r4.js";const n="/liftjourn_icon.png",i={},r=t('<h1 id="liftjourn-beta-version-now-deployed" tabindex="-1"><a class="header-anchor" href="#liftjourn-beta-version-now-deployed"><span>LiftJourn (Beta Version Now Deployed 🎉)</span></a></h1><p><img src="'+n+'" alt="LiftJourn Logo"></p><h2 id="website" tabindex="-1"><a class="header-anchor" href="#website"><span>Website</span></a></h2><p><a href="https://www.liftjourn.com/" target="_blank" rel="noopener noreferrer">www.liftjourn.com</a></p><h2 id="production-dates" tabindex="-1"><a class="header-anchor" href="#production-dates"><span>Production Dates</span></a></h2><p><strong>Start:</strong> March 2024</p><p><strong>Beta Deployed:</strong> May 2024</p><p><strong>Currently:</strong> Building Frontend in React Native Expo</p><ul><li>projected release on Android and IOS: Mid July</li></ul><p><strong>End:</strong> Production Still In Progress</p><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>LiftJourn is a web/native application that allows users to create workout routines, track their workouts, and view their friend&#39;s completed workouts. LiftJourn provides the user with an easy-to-use and convenient way to keep track of their workouts to see their progress over time. LiftJourn will have both a free version and a premium version available to users. The premium version will allow more functionality and statistical analysis. I have designed and developed this application all as a solo developer, learning Django, Vue.js and Expo as I develop the application.</p><h2 id="technologies" tabindex="-1"><a class="header-anchor" href="#technologies"><span>Technologies</span></a></h2><h3 id="frontend-expo-vue-js" tabindex="-1"><a class="header-anchor" href="#frontend-expo-vue-js"><span>Frontend: Expo &amp; Vue.js</span></a></h3><h4 id="expo" tabindex="-1"><a class="header-anchor" href="#expo"><span>Expo</span></a></h4><p>Expo is a framework and a platform for creating universal React applications. It allows for quick and easy development of native apps for both iOS and Android from the same codebase. I am using Expo to build the frontend of LiftJourn&#39;s mobile application, taking advantage of its robust toolset and ease of deployment. This Expo frontend will consume the same backend Django REST API that the Vue.js frontend uses to ensure data consistency between both the native Expo app and Vue.js web app versions of LiftJourn. Expo also provides many great tools to help speed up development, such as the mobile app Expo Go:</p><h5 id="expo-go" tabindex="-1"><a class="header-anchor" href="#expo-go"><span>Expo Go</span></a></h5><p>Expo Go is a very powerful tool for mobile app developers who are trying to develop native applications for both android and ios who don&#39;t have access to both OS platforms. As a developer with a Windows PC and an Apple Iphone, Expo Go makes it super easy to test the application I&#39;m developing on a physical apple device. All you have to do is download the Expo Go mobile app, scan the QR code that appears in the console after running the <code>npx expo start</code> command on your project, and the app bundles you code, allowing you to start testing immediately.</p><h4 id="vue-js" tabindex="-1"><a class="header-anchor" href="#vue-js"><span>Vue.js</span></a></h4><p>Vue.js is a JavaScript framework for building user interfaces. I chose Vue.js for LiftJourn due to its popularity, ease of learning, and the vibrant community backing it. Additionally, Vue.js offers excellent documentation and tooling, making it a great choice for rapid development. My Vue.js frontend consumes the Django REST API, which serves as the backend infrastructure for LiftJourn.</p><h3 id="backend-django" tabindex="-1"><a class="header-anchor" href="#backend-django"><span>Backend: Django</span></a></h3><p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Django also offers great documentation along with many online resources for learning the framework. I use the Django REST framework as my backend API which is consumed by my Vue.js frontend.</p><h3 id="database-postgresql" tabindex="-1"><a class="header-anchor" href="#database-postgresql"><span>Database: PostgreSQL</span></a></h3><p>PostgreSQL is the best-supported database for Django. It offers a wide range of advanced features, including support for complex queries, indexing, full-text search, and JSON data types.</p><h3 id="deployment-digital-ocean" tabindex="-1"><a class="header-anchor" href="#deployment-digital-ocean"><span>Deployment: Digital Ocean</span></a></h3><p>DigitalOcean is a cloud service provider that offers competitive pricing, with a straightforward pricing model that includes transparent pricing for all of their services. It also provides simple documentation, making it easy for developers to set up and manage servers, databases, and other cloud infrastructure components.</p><h4 id="digital-ocean-app-platform" tabindex="-1"><a class="header-anchor" href="#digital-ocean-app-platform"><span>Digital Ocean App Platform</span></a></h4><p>I used their app platform to deploy my application, following the Django <a href="https://docs.digitalocean.com/developer-center/deploy-a-django-app-on-app-platform/" target="_blank" rel="noopener noreferrer">documentation here</a> to initially set up my Django backend. I then added a static site to serve my frontend via a Content Delivery Network (CDN). The app platform provides a simple way for deploying new changes via GitHub; as a developer, all you have to do is push your changes to the main branch, and Digital Ocean will automatically build and redeploy your changes. This promotes a much more agile development process by streamlining the deployment process.</p><h2 id="services" tabindex="-1"><a class="header-anchor" href="#services"><span>Services</span></a></h2><ul><li><strong>Github</strong>: Version control system. All my code is uploaded to a private GitHub repository.</li><li><strong>Email Validation</strong>: Utilizes a Google Cloud service account to impersonate a noreply email for email validation.</li><li><strong>Namecheap</strong>: Namecheap offers domain registration, hosting, and other services at a fair price.</li></ul><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>User authentication and authorization</li><li>Workout routine creation and management</li><li>Workout tracking and progress visualization</li><li>Social features for viewing friends&#39; workouts</li></ul><h2 id="future-plans" tabindex="-1"><a class="header-anchor" href="#future-plans"><span>Future Plans</span></a></h2><ul><li>Implement additional social features (view friends&#39; profiles, add their routines to your routines)</li><li>Enhance workout tracking statistics analysis for premium users</li><li>Improve user interface and user experience with feedback from users</li></ul>',34),s=[r];function l(d,p){return a(),o("div",null,s)}const h=e(i,[["render",l],["__file","liftjourn.html.vue"]]),u=JSON.parse('{"path":"/projects/liftjourn.html","title":"LiftJourn (Beta Version Now Deployed 🎉)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Website","slug":"website","link":"#website","children":[]},{"level":2,"title":"Production Dates","slug":"production-dates","link":"#production-dates","children":[]},{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Technologies","slug":"technologies","link":"#technologies","children":[{"level":3,"title":"Frontend: Expo & Vue.js","slug":"frontend-expo-vue-js","link":"#frontend-expo-vue-js","children":[]},{"level":3,"title":"Backend: Django","slug":"backend-django","link":"#backend-django","children":[]},{"level":3,"title":"Database: PostgreSQL","slug":"database-postgresql","link":"#database-postgresql","children":[]},{"level":3,"title":"Deployment: Digital Ocean","slug":"deployment-digital-ocean","link":"#deployment-digital-ocean","children":[]}]},{"level":2,"title":"Services","slug":"services","link":"#services","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Future Plans","slug":"future-plans","link":"#future-plans","children":[]}],"git":{"updatedTime":1719716294000,"contributors":[{"name":"ChazArvizu","email":"cryan018@gmail.com","commits":12}]},"filePathRelative":"projects/liftjourn.md"}');export{h as comp,u as data};
