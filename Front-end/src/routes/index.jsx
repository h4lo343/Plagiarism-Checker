import {Navigate} from "react-router-dom";
import {
    HomePageTeacher,
    LoginPage,
    RegisterPage,
    AssignmentListPageStudent,
    AssignmentListPageTeacher,
    ResultPage,
    HomePageStudent,
    AssignmentDetailPage,
    ResultDetail
} from "../pages";

const routes = [
    {
        path: '/teacher',
        element: <HomePageTeacher/>,
        children: [
            {
                path: 'assignment-list',
                element: <AssignmentListPageTeacher/>
            },
            {
                path: 'result',
                element: <ResultPage/>
            },
            {
              path: 'result/detail/:resID/',
              element: <ResultDetail/>
            },
            {
                path: 'assignment-list/detail/:asID/',
                element: <AssignmentDetailPage/>
            },
            {
                path: '/teacher',
                element: <Navigate to="/teacher/assignment-list"/>
            }
        ]
    },
    {
        path: '/student',
        element: <HomePageStudent/>,
        children: [
            {
                path: 'assignment-list',
                element: <AssignmentListPageStudent/>
            },
            {
                path: 'result',
                element: <ResultPage/>
            },
            {
                path: 'result/detail/:resID/',
                element: <ResultDetail/>
            },
            {
                path: 'assignment-list/detail/:asID/',
                element: <AssignmentDetailPage/>
            },
            {
                path: '/student',
                element: <Navigate to="/student/assignment-list"/>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/',
        element: <Navigate to="/login"/>
    }
];

export default routes;

 