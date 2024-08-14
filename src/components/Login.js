import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/images/login/login.svg';
const Login = () => {
    const { loginUser } = useContext(authContext);
    const navigate = useNavigate();
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
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
            .catch(err => console.error(err));
    };
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className='flex justify-center items-center'>
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full border pt-8">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handelLogin} className="card-body">
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
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] hover:opacity-75" value="Login" />
                        </div>

                        <div>
                            <p className='my-3 text-center'>Or Sign In with</p>
                            <div className='flex gap-5 justify-center items-center'>
                                <button className='btn btn-circle'>F</button>
                                <button className='btn btn-circle'>I</button>
                                <button className='btn btn-circle'>G</button>
                            </div>
                            <p className='py-5 text-center'>Have an account? <Link to='/signup' className='text-[#FF3811]'>Sign In</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;