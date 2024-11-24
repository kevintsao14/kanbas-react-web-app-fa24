// import '../../styles.css';
import { useParams, useLocation } from "react-router";
import * as db from "../../Database";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as client from "../client";
import * as assignmentClient from "./client";
import { create } from "domain";



export default function AssignmentEditor({ assignment, assignments, setAssignment }: {
  setAssignment: (assignment: any) => void;
  assignment: any; assignments: any[];
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { cid, aid } = useParams();
  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };
  return (
    <div id="wd-assignments-editor" className="p-3">
      <h5>Assignment Name</h5>
      <div className="row mb-3">
        <div className="col-md-8">
          <input id="wd-name" value={`${assignment && assignment.title}`} className="form-control mb-3 "
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} /></div></div>
      {/* <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3 " /></div></div> */}
      <div className="row mb-3">
        <div className="col-md-8">
          {/* <textarea
            id="wd-text-entry"
            className="textarea-field form-control mb-3 "
            placeholder="Enter assignment details..."
          >
            The assignment is available online. Submit a link to the landing page of
            your Web Application running on Netlify. The landing page should include
            the following: Your full name and section, links to each of the labs,
            links to all relevant source code repositories. The Kanbas application
            should include a link to navigate back to the landing page.
          </textarea> */}
          <textarea id="wd-description" className="form-control mb-3"
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}>
            {assignment && assignment.description}
          </textarea>
          <div>
            <div className="row mb-3">
              <div className="col-md-2">
                <label htmlFor="wd-points" className="float-end">Points</label>
              </div>
              <div className="col-md-6">
                {/* <input id="wd-points" value={100} className="form-control" /> */}
                <input id="wd-points" value={assignment.points} className="form-control"
                  onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="float-end">Assignment Group</label>
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option selected>Assignment1</option>
                  <option value="2">Assignment2</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="float-end">Display Grade as</label>
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option selected>Percentage</option>
                  <option value="2">Absolute Grade</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="float-end">Submission Type</label>
              </div>
              <div className="col-md-6">
                <div className="border p-3">
                  <select className="form-select  mb-3" >
                    <option selected>Online</option>
                    <option value="1">Offline</option>
                  </select>
                  <span className="fw-bold mb-3">Online Entry Options</span>
                  <div className="mt-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                      <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="wd-website-url" />
                      <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                      <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                      <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="wd-file-uploads" />
                      <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
                    </div></div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-2">
                <label className="float-end">Assign</label>
              </div>
              <div className="col-md-6">
                <div className="border p-3">
                  <label className="fw-bold">Assign to</label>
                  <input value="EveryOne" className="form-control mb-3" />
                  <label className="fw-bold">Due</label>
                  {/* <input type="date" value="2024-05-13" className="form-control mb-3" /> */}
                  <input type="date" value={assignment.due} className="form-control mb-3"
                    onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
                  <div className="row">

                    <div className="col-md-6">
                      <span className="fw-bold">Available from</span>
                      {/* <input type="date" value="2024-05-06" className="form-control flex-fill" /> */}
                      <input type="date" value={assignment.availableFrom} className="form-control flex-fill"
                        onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold">Until</label>
                      {/* <input type="date" value="2024-05-20" className="form-control flex-fill" /> */}
                      <input type="date" value={assignment.availableUntil} className="form-control flex-fill"
                        onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-8"><hr /></div>
            </div>
            <div className="row">
              <div className="col-md-8 text-end">
                {currentUser.role === "FACULTY" && (<div className="row">
                  <div className="col-md-8 text-end">
                    <button className="btn btn-secondary me-2"
                      onClick={() => window.location.href = `/#/Kanbas/Courses/${cid}/Assignments`}>Cancel</button>
                    <button className="btn btn-danger"
                      onClick={() => {
                        if (cid === aid) {
                          // dispatch(addAssignment(assignment));
                          createAssignment(assignment);
                        } else {
                          dispatch(updateAssignment(assignment));
                        }
                        window.location.href = `/#/Kanbas/Courses/${cid}/Assignments`;
                      }}>Save</button>
                  </div>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div id="wd-assignments-editor" className="assignment-editor">
//   <label htmlFor="wd-name" className="label">
//     <b>Assignment Name</b>
//   </label>
//   <input id="wd-name" value="A1 - ENV + HTML" className="input-field" />

//   <textarea
//     id="wd-text-entry"
//     rows={10}
//     className="textarea-field"
//     placeholder="Enter assignment details..."
//   >
//     The assignment is available online. Submit a link to the landing page of
//     your Web Application running on Netlify. The landing page should include
//     the following: Your full name and section, links to each of the labs,
//     links to all relevant source code repositories. The Kanbas application
//     should include a link to navigate back to the landing page.
//   </textarea>

//   <div className="form-section">
//     {/* Points */}
//     <div className="form-group">
//       <label htmlFor="wd-points" className="label">
//         Points
//       </label>
//       <input id="wd-points" value={100} className="input-field" />
//     </div>

//     {/* Assignment Group */}
//     <div className="form-group">
//       <label htmlFor="wd-group" className="label">
//         Assignment Group
//       </label>
//       <select id="wd-group" className="select-field">
//         <option value="A1">Assignments</option>
//         <option value="A2">A2</option>
//         <option value="A3">A3</option>
//         <option value="A4">A4</option>
//       </select>
//     </div>

//     {/* Display Grade As */}
//     <div className="form-group">
//       <label htmlFor="wd-display-grade-as" className="label">
//         Display Grade As
//       </label>
//       <select id="wd-display-grade-as" className="select-field">
//         <option value="points">Points</option>
//         <option value="percentage">Percentage</option>
//         <option value="letter">Letter Grade</option>
//       </select>
//     </div>

//     {/* Submission Type */}
//     <div className="form-group">
//       <label htmlFor="wd-submission-type" className="label">
//         Submission Type
//       </label>
//       <select id="wd-submission-type" className="select-field">
//         <option value="online">Online</option>
//         <option value="file">File</option>
//       </select>

//       <div className="checkbox-group">
//         <p className="label">Online Entry Options</p>
//         <div>
//           <input
//             type="checkbox"
//             name="online-entry-options"
//             id="wd-opt-text-entry"
//           />
//           <label htmlFor="wd-opt-text-entry">Text Entry</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="online-entry-options"
//             id="wd-opt-website-url"
//           />
//           <label htmlFor="wd-opt-website-url">Website URL</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="online-entry-options"
//             id="wd-opt-media-recordings"
//           />
//           <label htmlFor="wd-opt-media-recordings">Media Recordings</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="online-entry-options"
//             id="wd-opt-student-annotation"
//           />
//           <label htmlFor="wd-opt-student-annotation">
//             Student Annotation
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="online-entry-options"
//             id="wd-opt-file-upload"
//           />
//           <label htmlFor="wd-opt-file-upload">File Upload</label>
//         </div>
//       </div>
//     </div>

//     {/* Assign Section */}
//     <div className="form-group">
//       <label className="label">Assign</label>
//       <div className="assign-group">
//         <div className="assign-item">
//           <label htmlFor="wd-assign-to">Assign to</label>
//           <input
//             id="wd-assign-to"
//             value="Everyone"
//             className="input-field"
//           />
//         </div>
//         <div className="assign-item">
//           <label htmlFor="wd-due-date">Due</label>
//           <input id="wd-due-date" type="date" className="input-field" />
//         </div>
//         <div className="assign-item">
//           <label htmlFor="wd-available-from">Available from</label>
//           <input
//             id="wd-available-from"
//             type="date"
//             className="input-field"
//           />
//         </div>
//         <div className="assign-item">
//           <label htmlFor="wd-available-until">Until</label>
//           <input
//             id="wd-available-until"
//             type="date"
//             className="input-field"
//           />
//         </div>
//       </div>
//     </div>
//   </div>

//   <hr className="separator" />

//   {/* Action Buttons */}
//   <div className="form-actions">
//     <button id="wd-cancel-assignment" className="btn btn-secondary">
//       Cancel
//     </button>
//     <button id="wd-save-assignment" className="btn btn-danger">
//       Save
//     </button>
//   </div>
// </div>
// }

// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <label htmlFor="wd-name"><b>Assignment Name</b></label>
//             <br />
//             <br />
//             <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//             <textarea id="wd-text-entry" rows={10} cols={60}>
//                 The assignment is available online Submit a link to the landing page of
//                 your Web Application running on Netlify. The landing page should include
//                 the following: Your full name and section Links to each of the lab Links
//                 to all relevant source code repositories The Kanbas application should
//                 include a link to navigate back to the landing page.
//             </textarea>
//             <br />
//             <br />
//             <table>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-points">Points</label>
//                     </td>
//                     <td>
//                         <input id="wd-points" value={100} />
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-group">Assignment Group</label>
//                     </td>
//                     <td>
//                         <select id="wd-group">
//                             <option value="A1">Assignments</option>
//                             <option value="A2">A2</option>
//                             <option value="A3">A3</option>
//                             <option value="A4">A4</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-display-grade-as">Display grade as</label>
//                     </td>
//                     <td>
//                         <select id="wd-display-grade-as">
//                             <option value="points">Points</option>
//                             <option value="percentage">Percentage</option>
//                             <option value="letter">Letter Grade</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />



//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-submission-type">Submission Type</label>
//                     </td>
//                     <tr>
//                         <td align="left" valign="top">
//                             <tr>
//                                 <select id="wd-submission-type">
//                                     <option value="online">Online</option>
//                                     <option value="file">File</option>
//                                 </select>
//                             </tr>
//                             <br />
//                             <tr>
//                                 Online Entry Options <br />
//                                 <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
//                                 <label htmlFor="wd-opt-text-entry">Text Entry</label><br />
//                                 <input type="checkbox" name="online-entry-options" id="wd-website-url" />
//                                 <label htmlFor="wd-opt-website-url">Website URL</label><br />
//                                 <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
//                                 <label htmlFor="wd-opt-media-recordings">Media Recordings</label><br />
//                                 <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
//                                 <label htmlFor="wd-opt-student-annotation">Student Annotation</label><br />
//                                 <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
//                                 <label htmlFor="wd-opt-file-upload">File upload</label>
//                             </tr>
//                         </td>
//                     </tr>
//                 </tr>
//                 <br />

//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-assign-to">Assign</label>
//                     </td>
//                     <tr>
//                         <td>
//                             <tr>
//                                 Assign to <br />
//                                 <input id="wd-assign-to" value="Everyone" /> <br /><br />
//                             </tr>
//                             <tr>
//                                 Due <br />
//                                 <input id="wd-due-date" type="date" /><br /><br />
//                             </tr>
//                             <tr>
//                                 <td>
//                                     Available from <br />
//                                     <input id="wd-available-from" type="date" />
//                                 </td>
//                                 <td>
//                                     Until <br />
//                                     <input id="wd-available-until" type="date" />
//                                 </td>
//                             </tr>
//                         </td>
//                     </tr>
//                 </tr>
//                 <tr><td colSpan={2}><hr /></td></tr>
//                 {/* Complete on your own */}
//                 <tr>
//                     <td colSpan={2} align="right">
//                         <button id="wd-cancel-assignment">Cancel</button>
//                         <button id="wd-save-assignment">Save</button>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     );
// }
