import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState, useEffect} from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";


export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
      };
      useEffect(() => {
        fetchModules();
      }, []);
      const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
      };
      const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
      };
      const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
      };
    
    
    
    // export default function Modules() {
    //     const { cid } = useParams();
    //     const [modules, setModules] = useState<any[]>(db.modules);
    //     const [moduleName, setModuleName] = useState("");
    //     const addModule = () => {
    //         setModules([...modules, {
    //             _id: new Date().getTime().toString(),
    //             name: moduleName, course: cid, lessons: []
    //         }]);
    //         setModuleName("");
    //     };
    //     const deleteModule = (moduleId: string) => {
    //         setModules(modules.filter((m) => m._id !== moduleId));
    //     };
    //     const editModule = (moduleId: string) => {
    //         setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    //     };
    //     const updateModule = (module: any) => {
    //         setModules(modules.map((m) => (m._id === module._id ? module : m)));
    //     };


    return (
        <div>
            <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={createModuleForCourse} 
                // addModule={() => {
                //     dispatch(addModule({ name: moduleName, course: cid }));
                //     setModuleName("");
                // }} 
                /> <br /><br /> <br /> <br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    // .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li
                            key={module._id}
                            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                        onChange={(e) =>
                                            dispatch(updateModule({ ...module, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                // dispatch(updateModule({ ...module, editing: false }));
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}
                                <ModuleControlButtons moduleId={module._id}
                                    deleteModule={(moduleId) => removeModule(moduleId)}
                                    // deleteModule={(moduleId) => {
                                    //     dispatch(deleteModule(moduleId));
                                    // }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))} />
                            </div>
                            {module.lessons && (
                                <ul
                                    className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
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
