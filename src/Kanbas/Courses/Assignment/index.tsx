import { BsGripVertical } from "react-icons/bs"
import { PiNotebookBold } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaSortDown } from "react-icons/fa6";
import '../../styles.css';
import AssignmentControls from "./AssignmentControls";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AssignmentButtons from "./AssignmentButtons";

export default function Assignments({ assignment, assignments, setAssignment }: {
    setAssignment: (assignment: any) => void;
    assignment: any; assignments: any[];
}) {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-assignments">
            <div className="wd-top-bar">
                <div className="input-group w-25">
                    <span className="input-group-text">
                        <HiMagnifyingGlass />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search..."
                    />
                </div>
                <div className="wd-button-group">
                    {currentUser.role === "FACULTY" && (<button id="wd-add-assignment-group">+ Group</button>)}
                    {currentUser.role === "FACULTY" && (<a id="wd-add-assignment" className="btn btn-danger wd-add-button" href={`/#/Kanbas/Courses/${cid}/Assignments/${cid}`}>+ Assignment</a>)}
                </div>
            </div>


            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /><FaSortDown className="me-2 dropdown-icon" />
                <span className="fw-bold">ASSIGNMENT</span>
                <AssignmentControls /></div>
            <ul className="wd-lessons list-group rounded-0">
                {assignments.
                    filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>< PiNotebookBold className="me-2 text-success " /></Link>
                                <div className="p-2">
                                    <a className="custom-link fs-5"
                                        href={`/#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        onClick={() => setAssignment(assignment)}>
                                        {assignment && assignment.title}
                                    </a><br />
                                    <span className="text-danger">Modules</span> | <span className="fw-bold">Not available until</span> Oct 13 at 12:00am |<br />
                                    <span className="fw-bold">Due</span> Oct 19 at 11:59pm | 100pts
                                </div>
                                <div className="float-end">
                                    <AssignmentButtons assignment={assignment} setAssignment={setAssignment} />
                                </div>
                            </div>
                        </li>
                    ))}
                {/* <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success fs-4 " /></Link>
                        <div className="w-100">
                            <a className="wd-assignment-link fs-5"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A1 - ENV + HTML
                            </a>
                            <br />
                            <LessonControlButtons/>
                            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br />
                            <span className="fw-bold">Due</span> May 13 at 11:59pm | 100pts
                            
                        </div>
                    </div>
                </li>


                <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success fs-4 " /></Link>
                        <div className="w-100">
                            <a className="wd-assignment-link fs-5"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A2
                            </a>
                            <br />
                            <LessonControlButtons/>
                            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br />
                            <span className="fw-bold">Due</span> May 18 at 11:59pm | 100pts
                            
                        </div>
                    </div>
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success fs-4 " /></Link>
                        <div className="w-100">
                            <a className="wd-assignment-link fs-5"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                            </a>
                            <br />
                            <LessonControlButtons/>
                            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br />
                            <span className="fw-bold">Due</span> May 21 at 11:59pm | 100pts
                            
                        </div>
                    </div>
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success fs-4 " /></Link>
                        <div className="w-100">
                            <a className="wd-assignment-link fs-5"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A4
                            </a>
                            <br />
                            <LessonControlButtons/>
                            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br />
                            <span className="fw-bold">Due</span> May 23 at 11:59pm | 100pts
                            
                        </div>
                    </div>
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success fs-4 " /></Link>
                        <div className="w-100">
                            <a className="wd-assignment-link fs-5"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A5
                            </a>
                            <br />
                            <LessonControlButtons/>
                            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br />
                            <span className="fw-bold">Due</span> May 13 at 11:59pm | 100pts
                            
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );
}


{/* export default function Assignments() {
return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <br></br>
                    Multiple Modules | <b>Not available until </b> Sep 10 at 12:00am |
                    <br></br>
                    <b>Due</b> Sep 19 at 11:59pm
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/124">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br></br>
                    Multiple Modules | <b>Not available until </b> Sep 17 at 12:00am |
                    <br></br>
                    <b>Due</b> Oct 17 at 11:59pm
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/125">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <br></br>
                    Multiple Modules | <b>Not available until </b> May 6 at 12:00am |
                    <br></br>
                    <b>Due</b> May 30 at 11:59pm
                </li>
            </ul>
        </div>
    );
} */}