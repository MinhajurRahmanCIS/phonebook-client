import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Contacts = () => {
    const loadedContacts = useLoaderData();
    const [contacts, setContacts] = useState(loadedContacts);
    const handelDelete = _id => {
        fetch(`http://localhost:5000/contacts/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Contact Delete Successfully');
                    const remaining = contacts.filter(contact => contact._id !== _id);
                    setContacts(remaining);
                }
            })
    };
    return (
        <div className="hero">
             <div className="hero-content ">
             <div className="shrink-0 shadow-2xl bg-base-100 border rounded-xl">
             <div className="overflow-x-auto">
            <h1 className='text-3xl text-center font-bold my-5'>All Contacts</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr className="hover text-center">
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    contacts.map((contact, i) =>
                        <tbody key={contact._id}>
                            <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.mobile}</td>
                                <td>
                                    <Link to={`/updatecontact/${contact._id}`}><button className='btn bg-green-600 hover:bg-green-400 me-5'>Update</button></Link>
                                    <button onClick={() => handelDelete(contact._id)} className='btn bg-red-600 hover:bg-red-400'>X</button>
                                </td>
                            </tr>
                        </tbody>)
                }
            </table>
        </div>
             </div>
            </div>
            </div>
        
    );
};

export default Contacts;