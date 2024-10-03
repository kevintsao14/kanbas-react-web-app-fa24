import { Link, Navigate, Route, Routes } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
export default function Courses() {
    return (

        <div id="wd-courses">
            <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />Course 1234</h2>
            <hr />
            {/* <tr><td colSpan={2}><hr /></td></tr> */}
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Courses/1234/Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom" element={<h1>Zoom</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
