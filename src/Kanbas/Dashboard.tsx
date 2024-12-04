import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import * as db from "./Database";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./Enrollments/reducer";
export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse, enrolling, setEnrolling }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
            enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
        }) {
    const dispatch = useDispatch();
    // const [displayAll, setDisplayAll] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const [selectedCourses, setSelectedCourses] = useState<any[]>([]);
    const [displayCourses, setDisplayCourses] = useState<any[]>([]);
    // const display = () => {
    //     fecthSelectedCourses();
    // };
    const fecthSelectedCourses = () => {
        if (currentUser.role !== "STUDENT") {
            setSelectedCourses(courses);
        } else {
            setSelectedCourses(courses
                .filter((course) =>
                    enrollments.some(
                        (enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                    )));
        }

    };
    useEffect(() => {
        fecthSelectedCourses();
    }, []);
    useEffect(() => {
        fecthSelectedCourses();
    }, [enrollments]);

    // useEffect(() => {
    //     setDisplayCourses(displayAll || currentUser.role !== "STUDENT" ? courses : selectedCourses);
    // }, [selectedCourses, courses, displayAll]);


    // { courses, course, setCourse, addNewCourse,
    //     deleteCourse, updateCourse }: {
    //         courses: any[]; course: any; setCourse: (course: any) => void;
    //         addNewCourse: () => void; deleteCourse: (course: any) => void;
    //         updateCourse: () => void;
    //     }) {
    // const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const { enrollments } = db;

    // const [courses, setCourses] = useState<any[]>(db.courses);
    // const [course, setCourse] = useState<any>({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "/images/reactjs.jpg", description: "New Description"
    // });
    // const addNewCourse = () => {
    //     const newCourse = {
    //         ...course,
    //         _id: new Date().getTime().toString()
    //     };
    //     setCourses([...courses, { ...course, ...newCourse }]);
    // };
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div id="wd-dashboard">
            <div className="d-flex">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary ms-auto" >
                        {enrolling ? "My Courses" : "All Courses"}
                    </button>
                {/* {currentUser.role === "STUDENT" && (
                    <button onClick={() => {
                        setDisplayAll(!displayAll);
                        display();
                    }} className="btn btn-primary ms-auto">Enrollments</button>
                )} */}
            </div> <hr />
            {currentUser.role === "FACULTY" && (<h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => {
                        addNewCourse();
                    }}> Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={() => {
                        updateCourse();
                    }} id="wd-update-course-click">
                    Update</button>

            </h5>)}
            {currentUser.role === "FACULTY" && (<input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />)}
            {currentUser.role === "FACULTY" && (<textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />)}
            {currentUser.role === "FACULTY" && (<hr />)}
            {/* <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5><br />
            <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr /> */}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        // .filter((course) =>
                        //     enrollments.some(
                        //         (enrollment) =>
                        //             enrollment.user === currentUser._id &&
                        //             enrollment.course === course._id
                        //     ))
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        {/* <img src={`/images/${course._id}.jpg`} width="100%" height={160} alt={course.name} /> */}
                                        <img
                                            src={`/images/${course._id}.jpg`}
                                            width="100%"
                                            height={160}
                                            alt={course.name}
                                            onError={(e) => {
                                                e.currentTarget.src = "/images/reactjs.jpg";
                                            }}
                                        />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {enrolling && (
                                                    <button className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                                {course.name} </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>
                                            <button className="btn btn-primary"> Go </button>

                                            {currentUser.role === "FACULTY" && <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                                setDisplayCourses(courses);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button>}
                                            {currentUser.role === "FACULTY" && <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button>}
                                            {currentUser.role === "STUDENT" &&
                                                enrollments.some(
                                                    (enrollment: any) =>
                                                        enrollment.user === currentUser._id &&
                                                        enrollment.course === course._id
                                                )
                                                && <button onClick={(event) => {
                                                    event.preventDefault();
                                                    const enrollment = enrollments.find(
                                                        (e: any) => e.user === currentUser._id && e.course === course._id
                                                    );
                                                    dispatch(deleteEnrollment(enrollment._id));
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Unenroll
                                                </button>}
                                            {currentUser.role === "STUDENT" && !enrollments.some(
                                                (enrollment: any) =>
                                                    enrollment.user === currentUser._id &&
                                                    enrollment.course === course._id
                                            )
                                                && <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        const newEnrollement = {
                                                            user: currentUser._id,
                                                            course: course._id
                                                        };
                                                        dispatch(addEnrollment(newEnrollement));
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Enroll
                                                </button>}

                                            {/* <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button> */}

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}





// import { Link } from "react-router-dom";
// import * as db from "./Database";
// export default function Dashboard() {
//     const courses = db.courses;
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: 270 }}>
//                         <div className="wd-course-list">
//                             <div className="card rounded-3 overflow-hidden">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     to="/Kanbas/Courses/1234/Home">
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             CS1234 React JS
//                                         </h5>
//                                         <p className="wd-dashboard-course-title card-text">
//                                             Full Stack software developer
//                                         </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//         </div>
//     );
// }
