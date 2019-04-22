import React from 'react';
import {fetchUsers} from "./usersDAO";
import {Link} from "react-router-dom";

const Users = () => {
    const users = fetchUsers();
    return (
        <div className="container content-padding">
            <div className="row justify-content-center">
                <div className="col-8">
                    <table className="table">
                        <thead className="thead-light text-center">
                        <tr>
                            <th scope="col">Order id</th>
                            <th scope="col">Order id</th>
                            <th scope="col">User id</th>
                            <th scope="col">Registration date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => <UserRow user={user}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const UserRow = ({user}) =>
    <tr className="text-center">
        <th scope="row">{user.id}</th>
        <td><Link to={`/users/${user.id}`}>{user.email}</Link></td>
        <td>{user.fullName}</td>
        <td>{user.creationDate}</td>
    </tr>;

export {Users};