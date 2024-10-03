import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import "./assignmentsStyles.css";
export default function AssignmentControls() {
  return (
    <div className="float-end">
        
      <span className="rounded-box p-2">
        ASSIGNMENTS 40% of Total
      </span>
      <BsPlus className="ms-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}