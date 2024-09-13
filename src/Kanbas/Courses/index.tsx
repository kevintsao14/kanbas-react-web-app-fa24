import { Link, Navigate, Route, Routes } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "../Modules";
import Home from "./Home";
export default function Courses() {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2>
        <table>
            <tbody>
                <tr>
                    <td valign="top">
                        <CoursesNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kanbas/Courses/1234/Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<h1>Assignments</h1>} />
                            <Route path="Assignments/:aid/*" element={<h2>Assignment Editor</h2>} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Grades" element={<h1>Grades</h1>} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom" element={<h1>Zoom</h1>} />
                        </Routes>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  );}
  