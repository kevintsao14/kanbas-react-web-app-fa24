import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const [assignment, setAssignment] = useState({
        _id: "-1",
        title: "New Assignment",
        points: 100,
        description: "New Assignment Description",
        due: "2024-10-20T23:59",
        course: cid,
        availableFrom: "2024-11-8T23:59",
        availableUntil: "2024-11-20T23:59"
    });
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    return (

        <div id="wd-courses">
            {/* <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />Course 1234</h2> */}
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
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
                        <Route path="Assignments" element={<Assignments
                            assignments={assignments}
                            assignment={assignment}
                            setAssignment={setAssignment} />} />
                        {/* <Route path="Assignments/:aid" element={<AssignmentEditor />} /> */}
                        <Route path="Assignments/:aid" element={<AssignmentEditor
                            assignments={assignments}
                            assignment={assignment}
                            setAssignment={setAssignment} />} />
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
