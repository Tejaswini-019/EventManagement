import EventList from "../Pages/EventList/EventList"
import FilterEvents from "../Pages/FilterEvents/FilterEvents"
import EventDetail from "../Pages/EventDetails/EventDetails"
//import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "../Components/Login/Login"
 const routes = [
  {path:'/adminlogin',element:<Login/>},
  {path:'/dashboard',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>}
]
export default routes;