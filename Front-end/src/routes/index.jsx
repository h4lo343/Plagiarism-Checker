import { Navigate } from "react-router-dom";
import {HomePage, Login, Register} from "../pages"

const A = () => {
  return <div>assignment</div>
}

const B = () => {
  return <div>result</div>
}

export default [
  {
    path:'/homepage',
    element:<HomePage/>,
    children: [
      {
        path:'assignment',
        element:<A/>
      },
      {
        path:'result',
        element:<B/>
      },
      {
        path:'/homepage',
        element:<Navigate to="/assignment"/>
      }
       
    ]
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/',
    element:<Navigate to="/login"/>
  }
]

 