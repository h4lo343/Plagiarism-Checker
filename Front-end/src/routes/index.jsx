import {Navigate} from "react-router-dom";
import {
    HomePageTeacher,
    Login,
    Register,
    AssignmentStudent,
    AssignmentTeacher,
    Result,
    HomePageStudent
} from "../pages";

const routes = [
    {
        path: '/teacher',
        element: <HomePageTeacher/>,
        children: [
            {
                path: 'assignment',
                element: <AssignmentTeacher/>
            },
            {
                path: 'result',
                element: <Result/>
            },
            {
                path: '/teacher',
                element: <Navigate to="/teacher/assignment"/>
            }
        ]
    },
    {
        path: '/student',
        element: <HomePageStudent/>,
        children: [
            {
                path: 'assignment',
                element: <AssignmentStudent/>
            },
            {
                path: 'result',
                element: <Result/>
            },
            {
                path: '/student',
                element: <Navigate to="/student/assignment"/>
            }
        ]
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/',
        element: <Navigate to="/login"/>
    }
];

export default routes;

 