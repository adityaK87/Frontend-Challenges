import React from 'react';
import './Form.css';
import logo from '../../../Challenge1/appleLogo.png';

const Form = () => {
    const createdAccount = () => {
        window.alert("Account Created Sucessfully")

    }

    return (
        <div className='formContainer'>
            <img className='logo' src={logo} alt="logo" width='70px'></img>
            <span className="signUp"> Sign Up </span>

            <form action='' className='userForm'>
                <label id='name'>
                    <div className='form name'> NAME </div>
                    <input className='name-input' type="text" placeholder='Aditya pal' required />
                </label>

                <label id="userName">
                    <div className='form userName'> USERNAME </div>
                    <input className='userName-input' type="text" placeholder='Adityapal87' required />
                </label>

                <label id='userEmail'>
                    <div className='form email'> EMAIL </div>
                    <input className='userEmail-input' type="email" placeholder='aditya@gmail.com' required />
                </label>

                <div className='form account'><input className='createAccount' type="Submit" value="CREATE ACCOUNT" onClick={() => createdAccount()} /></div>

            </form>
        </div>
    )
}

export default Form;