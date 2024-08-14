import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const Home = () => {
    const { user } = useContext(authContext);
    const handelAddContact = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;

        const contact = {
            name,
            email,
            mobile,
            userEmail: user.email
        };

        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    alert('Contact Added Successfully');
                    form.reset();
                }
                else {
                    alert('Something went wrong!!!');
                }
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">

                    <form onSubmit={handelAddContact} className="card-body">
                        <h1 className="text-2xl">Welcome To <strong>{user?.displayName}</strong> PhoneBook </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="text" name='mobile' placeholder="Enter Your Mobile Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn text-black bg-green-600 hover:bg-green-400 text-2xl text-white" type="submit" value="Add Contact" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;