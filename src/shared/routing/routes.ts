import {createRoute, UnmappedRouteObject} from "atomic-router";

export const routes = {
    auth: {
        signIn: createRoute(),
        signUp: createRoute(),
    },
    home: createRoute(),
}
export const pageNotFoundRoute = createRoute()
export const routesMap: UnmappedRouteObject<object>[] = [
    {
        path: "/auth/sign-in",
        route: routes.auth.signIn
    },
    {
        path: "/auth/sign-up",
        route: routes.auth.signUp
    },
    {
        path: "/",
        route: routes.home
    }
]
