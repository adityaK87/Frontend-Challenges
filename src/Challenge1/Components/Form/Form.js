import React from 'react';
import './Form.css';
import logo from '../../../Challenge1/logo192.png';

const Form = () => {

    return (
        <div className='formContainer'>
            <img className='logo' src={logo} alt="logo" width='50px'></img>
            <form action='' className='userForm'>
                <label id='userName'>
                    <div className='form name'> Name : <input className='userName' type="text" required /></div>
                </label>

                <label id="userEmail">
                    <div className='form email'> Email : <input className='userEmail' type="email" required /></div>
                </label>

                <label id='userPassword'>
                    <div className='form password'> Password : <input className='userPassword' type="password" required /></div>
                </label>

                <div className='form submit'><input className='signUp' type="Submit" value="Sign Up" onChange={(e) => (e.prevent.default())} /></div>

            </form>
        </div>
    )
}

export default Form;