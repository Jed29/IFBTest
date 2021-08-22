import Login from "../views/Login";
import Wellcome from "../views/Wellcome";

const routes = [
    {
        component:()=> <Login/>,
        path:"/login"
    },
    {
        component:()=><Wellcome/>,
        path:"/"
    }
]

export default routes