import Profile from "../../Users/Profile";
import Signin from "../../Users/Signin";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import UserTable from "../../Users/Table";

export default function Account() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile/>} />
                <Route path="/Admin/Users" element={<UserTable />} />
            </Routes>
        </div>
    );
}
