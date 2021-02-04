import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import isEmail  from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessorMsg } from '../helpers/message';
import {showLoading } from '../helpers/loading';
import {signup} from '../api/auth';



export const Signup = () => {

    const [formData, setFormData] = useState({
        username: 'asdasd',
        email: 'asd@gmail.com',
        password: '123456',
        password2: '123456',
        successMsg: false,
        errorMsg: false,
        loading: false,
    })

    const {
        username, 
        email, 
        password, 
        password2, 
        successMsg, 
        errorMsg, 
        loading
    } = formData;

    //Event Handlers

    const handleChange = (e) => {
        // console.log(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            successMsg: '',
            errorMsg: ''
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //client-side validation
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
            setFormData({
                ...formData, errorMsg: 'All fields are required'
            })
        } else if(!isEmail(email)){
            setFormData({
                ...formData, errorMsg: 'Invalid email'
            })
        } else if(!equals(password, password2)){
            setFormData({
                ...formData, errorMsg: 'Passwords do not match'
            })
        } else {
           const {username, email, password} = formData;
           const data = {username, email, password};

           setFormData({...formData, loading: true});

           //return response
            signup(data)
                .then(response => {
                    console.log('Axios signup succes', response);
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage
                    })
                })
                .catch(err => {
                    console.log('Axios signup error: ', err);
                    setFormData({...formData, loading: false, errorMsg: err.response.data.errorMessage})
                })
        }
    }

    // Views
    const showSignUpForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate >
        {/* username */}
        <div className='form-group input-group mb-2' >
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                </span>
            </div>
            <input 
                name='username'
                value={username}
                className='form-control'
                placeholder='Username'
                type='text'
                onChange={handleChange}
            />
        </div>
        {/* email */}
        <div className='form-group input-group mb-2' >
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-envelope'></i>
                </span>
            </div>
            <input
                name='email'
                value={email}
                className='form-control'
                placeholder='Email address'
                type='email'
                onChange={handleChange}

            />
        </div>
        {/* password */}
        <div className='form-group input-group mb-2'>
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-lock'></i>
                </span>
            </div>
            <input 
                name='password'
                value={password}
                className='form-control'
                placeholder='Create password'
                type='password'
                onChange={handleChange}

            />
        </div>
        {/* password2 */}
        <div className='form-group input-group mb-2'>
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-lock'></i>
                </span>
            </div>
            <input 
                name='password2'
                value={password2}
                className='form-control'
                placeholder='Confirm password'
                type='password'
                onChange={handleChange}

            />
        </div>
        {/* signup button */}
        <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-block'>
                Signup
            </button>
        </div>
        {/* already have account */}
        <p className='text-center text-black'>
            Have an account? <Link to="/signin">Log In</Link>
        </p>
    </form>
);
    return (
       <div className='signup_container' >
           <div className='row px-2 vh-100'>
               <div className='col-md-5 mx-auto align-self-center'>
                {successMsg && showSuccessorMsg(successMsg) }
                {errorMsg && showErrorMsg(errorMsg) }
                {loading && <div className="text-center pb-4">{showLoading() }</div> }
                {showSignUpForm() }
                {/* <p style={{color:'white'}}>{JSON.stringify(formData)}</p> */}
               </div>
           </div>
       </div>
    )
};


