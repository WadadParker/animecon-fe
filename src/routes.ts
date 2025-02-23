import {
    type RouteConfig,
    layout,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    // * matches all URLs, the ? makes it optional so it will match / as well
    route("/","./pages/LandingPage.tsx"),
    route("/payment","./pages/Payment.tsx"),
    layout("Layout.tsx",[
    route("/home","./pages/Home.tsx")
    ]),
    route("*?", "App.tsx"),
  ] satisfies RouteConfig;
  