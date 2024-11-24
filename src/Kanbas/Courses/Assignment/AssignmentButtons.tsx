import { IoEllipsisVertical } from "react-icons/io5";
// import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
// import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as assignmentClient from "./client";
export default function AssignmentButton({assignment,setAssignment} : {setAssignment: (assignment: any) => void; assignment : any; } ) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const removeAssignment = async (assignmentId: string) => {
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      };
    return (
        <div className="float-end">
            {currentUser.role === "FACULTY" && (<FaTrash className="text-danger me-2 mb-1" 
            onClick={() => 
            // dispatch(deleteAssignment(assignment._id))
            removeAssignment(assignment._id)
            } />)}
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}   