import React from 'react';
import {fetchUsers} from "./usersDAO";
import {Link} from "react-router-dom";

const Users = () => {
    const users = fetchUsers();
    return (
        <div className="container content-padding">
            <div className="row justify-content-center">
                <div className="col-8">
                    {users.map(user => <UserRow user={user}/>)}
                </div>
            </div>
        </div>
    );
};

const UserRow = ({user}) =>
    <div className="row">
        <div className="col-1">{user.id}</div>
        <div className="col-4"><Link to={`/user/${user.id}`}>{user.email}</Link></div>
        <div className="col-3">{user.fullName}</div>
    </div>;

export {Users};