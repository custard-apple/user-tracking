import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function AddUser( props ) {
    const [ fullname, setFullname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");

    const navigate = useNavigate();

    const clearSelection = () => {
        setFullname("");
        setEmail("");
        setPhone("");
    }
    const submit = (e) => {
        e.preventDefault();
        if( !fullname || !email || !phone ) {
            alert("Please fill all fields, all are mandatory!");
        } else {
            props.addUser(fullname, email, phone);
            clearSelection();
        }
        navigate('/', { replace: true })
    }

  return (
      <div className=''>
            <Form className='' onSubmit={submit}>
                <h3>Add New User</h3>
                <Form.Group className="mb-3" controlId="formBasicInput">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={fullname} onChange={(e)=> setFullname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <a className='btn-cancel' href='\'>Cancel</a>
            </Form>
    </div>
  );
}

export default AddUser;