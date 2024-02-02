import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateContact = () => {
    const loadedContact = useLoaderData();
    const handelAddContact = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const contact = {
            name,
            email,
            mobile
        };
        fetch(`http://localhost:5000/contacts/${loadedContact._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    alert('Contact Updated!!');
                }
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">

                    <form onSubmit={handelAddContact} className="card-body">
                        <h1 className="text-2xl font-bold">Update contact of <span className='text-green-500'>{loadedContact.name}</span></h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" defaultValue={loadedContact.name} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" defaultValue={loadedContact.email} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="text" name='mobile' placeholder="Enter Your Mobile Number" className="input input-bordered" defaultValue={loadedContact.mobile} required />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-green-500 text-2xl text-white" type="submit" value="Update Contact" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateContact;