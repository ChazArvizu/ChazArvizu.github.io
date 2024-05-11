export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Chaz/Desktop/ChazArvizu.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to My Portfolio!"} }],
  ["/resume.html", { loader: () => import(/* webpackChunkName: "resume.html" */"C:/Users/Chaz/Desktop/ChazArvizu.github.io/docs/.vuepress/.temp/pages/resume.html.js"), meta: {"title":"Resume"} }],
  ["/projects/gymrat.html", { loader: () => import(/* webpackChunkName: "gymrat.html" */"C:/Users/Chaz/Desktop/ChazArvizu.github.io/docs/.vuepress/.temp/pages/projects/gymrat.html.js"), meta: {"title":"Gym Rat"} }],
  ["/projects/liftjourn.html", { loader: () => import(/* webpackChunkName: "liftjourn.html" */"C:/Users/Chaz/Desktop/ChazArvizu.github.io/docs/.vuepress/.temp/pages/projects/liftjourn.html.js"), meta: {"title":"LiftJourn (Beta Version Now Deployed!)"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Chaz/Desktop/ChazArvizu.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
