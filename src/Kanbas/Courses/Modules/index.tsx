import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1
                        <ModuleControlButtons /> </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons /> </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to the course
                            <LessonControlButtons /> </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            Learn what is Web Development </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            LEARNING OBJECTIVES </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
                    </ul>
                </li>
            </ul> </div>
    );
}
{/* Implement Collapse All button, View Progress button, etc. */ }
{/* <div className="wd-module-buttons">
                <button className="wd-btn wd-btn-secondary wd-collapse-all">Collapse All</button>
                <button className="wd-btn wd-btn-secondary wd-view-progress">View Progress</button>
                <select className="wd-btn wd-btn-secondary wd-publish-all" name="publish-all" id="publish-all">
                    <option value="">Publish All</option>
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                </select>
                <button className="wd-btn wd-btn-primary wd-add-module" type="button">+ Module</button>
            </div>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READINGS</span>
                            <ul>
                                <li className="wd-content-item">Full stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul>
                                <li className="wd-content-item">Introduction to Wev Development</li>
                                <li className="wd-content-item">Creating an HTTP server with NOde.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formating User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul> */}
//         </div>
//     );
// }
