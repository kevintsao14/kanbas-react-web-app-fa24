// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <NavLink to={"/Kanbas/Account/Signin"} 
//       className=
//       {({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
//       Signin </NavLink> <br/>
//       <NavLink to={"/Kanbas/Account/Signup"} 
//       className=
//       {({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
//       Signup </NavLink> <br/>
//       <NavLink to={"/Kanbas/Account/Profile"} 
//       className=
//       {({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
//       Profile </NavLink> <br/>
//     </div>
// );}

import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const {pathname} = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link id="wd-signin-link"    to="/Kanbas/Account/Signin" 
      className={`list-group-item border border-0
        ${pathname.includes("Signin") ? "active" : "text-danger"}`}>Signin</Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup"
      className={`list-group-item border border-0
        ${pathname.includes("Signup") ? "active" : "text-danger"}`}>Signup
        </Link>
      <Link id="wd-profile-link"  to="/Kanbas/Account/Profile"
      className={`list-group-item border border-0
        ${pathname.includes("Profile") ? "active" : "text-danger"}`}>Profile</Link>
    </div>
);}


