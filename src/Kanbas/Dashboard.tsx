import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src={`/images/${course._id}.jpg`} width="100%" height={160} alt={course.name} />
                                    {/* <img src="/images/reactjs.jpg" width="100%" height={160} /> */}
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>
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
