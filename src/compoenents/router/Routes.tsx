import Layout from "../layout/Layout"
import { Outlet, useRoutes } from "react-router"
import { RouteObject } from "react-router-dom"
import Home from "../pages/Home/Home"
import About from "../pages/about/About"
import Marriage from "../marriage/Marriage"
import Fotter from "../pages/Fotter/Fotter"
import Blog from "../pages/blog/Blog"
import News from "../pages/News/News"
import ContactUs from "../pages/ContanctUs/ContactUs"
function Router(){
    let routes: RouteObject[] =[{
        path:"/",
        element:<Layout children={<Outlet/>}/>,
        children:[
            {index : true, element:<Home/>},
            {
                path:"/about",
                element:<About/>,
                
            },
            {
                path:"/marriage",
                element:<Marriage/>,
        },
        {
            path:"/blog",
            element:<Blog/>,
       },
       {
        path:"/news",
        element:<News/>,
     },
     {
        path:"/contactus",
        element:<ContactUs/>,
     },{
        path:"/blog",
        element:<Blog/>,
     },

        ]
    }

]
    let element = useRoutes(routes)
    return (
        <div>  
      {element}
        <Fotter/>
        </div>
    )

}
export default Router