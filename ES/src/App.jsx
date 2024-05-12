import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//import Login from './Components/Login/Login';
import routes from "./Routes/routes"
//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const router=createBrowserRouter(routes);
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
