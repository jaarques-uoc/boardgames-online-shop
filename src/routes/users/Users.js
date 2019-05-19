import React from 'react';
import {fetchUsers} from "./usersDAO";
import {Link} from "react-router-dom";

class Users extends React.Component {

    constructor(props) {
        super(props);

        this.loadUsers();
    }

    state = {
        users: []
    };

    loadUsers = () => fetchUsers()
        .then(users => this.setState({users}));

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1>Users</h1>
                        {this.state.users && this.state.users.length > 0 &&
                        <table className="table">
                            <thead className="thead-light text-center">
                            <tr>
                                <th scope="col">User id</th>
                                <th scope="col">Email address</th>
                                <th scope="col">Full name</th>
                                <th scope="col">Registration date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((user, key) => <UserRow user={user} key={key}/>)}
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const UserRow = ({user}) =>
    <tr className="text-center">
        <th scope="row">{user.id}</th>
        <td><Link to={`/users/${user.id}`}>{user.email}</Link></td>
        <td>{user.fullName}</td>
        <td>{user.date}</td>
    </tr>;

export {Users};