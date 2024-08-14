import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../assets/images/login/login.svg';
const Signup = () => {
    const { createUser, updateUser } = useContext(authContext);
    const navigate = useNavigate();
    const handelSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('Account Created');
                form.reset();
                updateUser(name)
                    .then(() => {
                        const currentUser = {
                            email: user.email
                        };
                        fetch('http://localhost:5000/jwt', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(currentUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                localStorage.setItem('phone-book', data.token);
                                alert('Login Successfully');
                                navigate('/home');
                                form.reset();
                            });
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className='flex justify-center items-center'>
                    <img className='w-3/4' src={signupImg} alt="" />
                </div>
                <div className="card shrink-0 w-full border pt-8">
                    <h1 className="text-5xl font-bold text-center">Signup</h1>
                    <form onSubmit={handelSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="Your password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] hover:opacity-75" value="Signup" />
                        </div>

                        <div>
                            <p className='my-3 text-center'>Or Sign In with</p>
                            <div className='flex gap-5 justify-center items-center'>
                                <button className='btn btn-circle'>F</button>
                                <button className='btn btn-circle'>I</button>
                                <button className='btn btn-circle'>G</button>
                            </div>
                            <p className='py-5 text-center'>Already have an account?  <Link to='/login' className='text-[#FF3811]'>Login</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;