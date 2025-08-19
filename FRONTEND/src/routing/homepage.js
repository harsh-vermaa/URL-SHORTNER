import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import HomeRedirect from "../pages/HomeRedirect"; // ✅ Use the redirect component

export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeRedirect, // ✅ Redirect based on auth
});
