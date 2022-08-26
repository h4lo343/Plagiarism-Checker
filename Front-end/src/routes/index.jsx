import {Navigate} from "react-router-dom";
import {
    HomePageTeacher,
    LoginPage,
    RegisterPage,
    AssignmentListPageStudent,
    AssignmentListPageTeacher,
    ResultPage,
    HomePageStudent, PlagiarismCheckPage
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
                path: 'assignment',
                element: <AssignmentListPageTeacher/>
            },
            {
                path: 'result',
                element: <ResultPage/>
            },
            {
                path: 'assignment-list/plagiarism-check',
                element: <PlagiarismCheckPage/>
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
                path: 'assignment-list/plagiarism-check',
                element: <PlagiarismCheckPage/>
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

 