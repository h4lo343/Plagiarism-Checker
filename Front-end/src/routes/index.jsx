import { Navigate } from "react-router-dom";
import {
    HomePageTeacher,
    LoginPage,
    RegisterPage,
    AssignmentListPageStudent,
    AssignmentListPageTeacher,
    ResultPage,
    HomePageStudent,
    AssignmentDetailPage,
    StudentResultDetailPage,
    TeacherResultDetailPage,
    TeacherSubjectPage
} from "../pages";
import { BufferFilePage } from "../pages/bufferFilePage/BufferFilePage";

const routes = [
    {
        path: "/teacher",
        element: <HomePageTeacher />,
        children: [
            {
                path: "assignment-list",
                element: <AssignmentListPageTeacher />
            },
            {
                path: "subject/:subjectCode/",
                element: <AssignmentListPageTeacher />
            },
            {
                path: "result",
                element: <ResultPage />
            },
            {
                path: "subject",
                element: <TeacherSubjectPage />
            },
            {
                path: "buffer",
                element: <BufferFilePage />
            },
            {
                path: "result/:resID/",
                element: <TeacherResultDetailPage />
            },
            {
                path: "assignment-list/detail/:asID/",
                element: <AssignmentDetailPage />
            },
            {
                path: "/teacher",
                element: <Navigate to="/teacher/subject" />
            }
        ]
    },
    {
        path: "/student",
        element: <HomePageStudent />,
        children: [
            {
                path: "assignment-list",
                element: <AssignmentListPageStudent />
            },
            {
                path: "result",
                element: <ResultPage />
            },
            {
                path: "result/detail/:resID/",
                element: <StudentResultDetailPage />
            },
            {
                path: "assignment-list/detail/:asID/",
                element: <AssignmentDetailPage />
            },
            {
                path: "/student",
                element: <Navigate to="/student/assignment-list" />
            }
        ]
    },
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/",
        element: <Navigate to="/login" />
    }
];

export default routes;

 