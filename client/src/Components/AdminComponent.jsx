import React from 'react'
import {Link} from 'react-router-dom'

const AdminComponent = () => {
    return (
      <>
        <div className="sidebar__container">
          <div className="sidebar">
            {" "}
            <Link to="/view_users">Users</Link>
          </div>
          <div className="sidebar">
            <Link to="/manage_shops">Manage Logs</Link>
          </div>
          {/* <div className="sidebar">
            <Link to="/activate_users">Activate Users</Link>
          </div> */}
          <div className="sidebar">
            <Link to="/others">Others</Link>
          </div>
          <div className="sidebar">
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </>
    );
}

export default AdminComponent