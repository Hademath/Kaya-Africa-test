import React, {useState} from 'react'
import {  Link } from 'react-router-dom';
import AdminComponent from '../Components/AdminComponent';
import ActivativationModal from './ActivativationModal';

function ViewUsersComponent() {
    const [show, setShow] = useState(false);
     const showModal = () => {
       return setShow(true)? "activate": "deactivated";
        //   return (<ActivativationModal />)
     };
  return (
    <>
      <div className="container__fluid">
        <AdminComponent />
        <div className="container__right">
          <div className="right__table">
            <table cellPadding="20" border="2">
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>johndoe@gmail.com</td>
                <td>{show ? "deactivated" : "activate"}</td>
                <td>
                  <button className="btn-primary" onClick={showModal}>
                    {" "}
                    {!show ? "deactivated" : "activate"}
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>marymoe@gmail.com</td>
                <td>{show ? "deactivated" : "activate"}</td>
                <td>
                  <button className="btn-primary" onClick={showModal}>
                    {" "}
                    {!show ? "deactivated" : "activate"}
                  </button>
                </td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>julydo@gmail.com</td>
                <td>deactivated</td>
                <td>
                  <button className="btn-primary">Activate user</button>
                </td>
              </tr>
              <tr>
                <td>Foluso </td>
                <td>Bayo</td>
                <td>julydo@gmail.com</td>
                <td>active</td>
                <td>
                  <button onClick={showModal} className="btn-primary">
                    Deactivate user
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUsersComponent