import { NavLink } from "react-router-dom";
import "../styles.css";

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Home
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Modules
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Assignments
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Quizzes
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/Grades" id="wd-course-grades-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Grades
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                People
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Piazza
            </NavLink>

            <NavLink to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
                className={({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
                Zoom
            </NavLink>
        </div>
    );
}