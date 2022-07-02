import React from 'react';
import Table from 'react-bootstrap/Table';


export const Home = (props) => {
  return (
    <div>
        <a class="btn-add" href='\adduser'>Add User</a>
        
        <div>
            <h3>Users</h3>
            <Table className='table-users'>
                {/* {(props.users.length===0) ? <div>No data avaialble</div> */}
                      {/* :  */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                {props.users.map((user) => (
                    <tbody className='flex-child' key={user.id}>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button className="btn-delete" onClick={()=> props.onDelete(user)}><strong>X</strong></button></td>
                        </tr>
                    
                    </tbody>
                ))}
            </Table>
        </div>
    </div>
  )
}
