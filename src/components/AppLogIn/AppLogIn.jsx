import { useState } from 'react';
import './AppLogIn.scss';

export default function AppLogIn() {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
            passwordConfirm: '',
            joinedNewsletter: true
        }
    );

    function handlerChange (event) {
        const {name, value, type, checked} = event.target;
    
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    function handlerSubmit(event) {
        event.preventDefault();
        console.log(formData);

        if (formData.password === formData.passwordConfirm) {
            console.log('Successfully signed up 🙂');
            
        } else {
            console.log('Password do not match 🙁');
            return;
        }
        
        if (formData.joinedNewsletter) {
            console.log('Thanks for signing up for our newsletter! 👍');
        }
    }
 
    return (
        <div className="form-container">
            <form className="form" onSubmit={handlerSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="form--input" 
                    name="email"
                    onChange={handlerChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="form--input" 
                    name="password"
                    onChange={handlerChange}
                    value={formData.password}
                />
                 <input 
                    type="password" 
                    placeholder="Confirm password" 
                    className="form--input" 
                    name="passwordConfirm"
                    onChange={handlerChange}
                    value={formData.passwordConfirm}
                />

                <div className="form--marketing">
                    <input 
                        type="checkbox" 
                        name="joinedNewsletter" 
                        id="okayToEmail" 
                        onChange={handlerChange}
                        value={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">Join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    );
}