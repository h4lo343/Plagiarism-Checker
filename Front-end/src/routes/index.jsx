import { Navigate } from "react-router-dom";
import {HomePageTeacher, Login, Register, Assignment, Result, AssignDetailStudent} from "../pages"

export default [
  {
    path:'/teacherHome',
    element:<HomePageTeacher/>,
    children: [
      {
        path:'detail/:asID',
        element:<AssignDetailStudent/>
      },
      {
        path:'assignment',
        element:<Assignment/>
      },
      {
        path:'result',
        element:<Result/>
      },
      {
        path:'/teacherHome',
        element:<Navigate to="/teacherHome/assignment"/>
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

 