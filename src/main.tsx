import ReactDOM from 'react-dom/client'
import {App} from "@/app";
import {appStarted} from "@/shared/init";
import {RouterProvider} from "atomic-router-react";
import {router} from "@/shared/routing";
import "./app/styles/index.css"

const root = document.getElementById("root") as HTMLElement

appStarted()

ReactDOM.createRoot(root).render(
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
)
