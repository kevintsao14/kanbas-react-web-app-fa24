import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to={"/Kanbas/Account/Signin"} 
      className=
      {({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
      Signin </NavLink> <br/>
      <NavLink to={"/Kanbas/Account/Signup"} 
      className=
      {({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
      Signup </NavLink> <br/>
      <NavLink to={"/Kanbas/Account/Profile"} 
      className=
      {({ isActive }) => `list-group-item text-danger ${isActive ? 'active text-black' : ''} border border-0`}>
      Profile </NavLink> <br/>
    </div>
);}
