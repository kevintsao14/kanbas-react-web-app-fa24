// import Profile from "./Profile";
// import Signin from "./Signin";
// import Signup from "./Signup";
// import { Routes, Route, Navigate } from "react-router";
// import { useSelector } from "react-redux";
// import AccountNavigation from "./Navigation";


// export default function Account() {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     return (
//         <div id="wd-account-screen">
//             <h2>Account</h2>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td valign="top">
//                             <AccountNavigation />
//                         </td>
//                         <td valign="top">
//                             <Routes>
//                                 <Route path="/"
//                                     element={<Navigate to={currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"} />} />
//                                 <Route path="/Signin" element={<Signin />} />
//                                 <Route path="/Profile" element={<Profile />} />
//                                 <Route path="/Signup" element={<Signup />} />
//                             </Routes>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>

//         </div>
//     );
// }
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import Users from "./Users";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-screen">
      <div className="d-flex">
        
         <div className="m-3">
            <AccountNavigation />
         </div>
          <div className="m-3">
            <Routes>
              <Route path="/"
                     element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Users/:uid" element={<Users />} />
            </Routes>
          </div>
      </div>
    </div>
);}


