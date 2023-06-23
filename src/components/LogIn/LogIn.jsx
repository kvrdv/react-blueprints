import {useState} from 'react';
import './login.scss';

export default function LogIn() {
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
        if (formData.password === formData.passwordConfirm) {
            alert('Successfully signed up. ');  
        } else {
            alert('Password do not match. ');
            return;
        }
        if (formData.joinedNewsletter) {
            alert('Thanks for signing up for our newsletter. ');
        }
    }
 
    return (
        <div className="login">
            <form className="login__form" onSubmit={handlerSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">📨</span>
                    <input 
                        className="form-control" 
                        type="email"                       
                        placeholder="Email" 
                        aria-label="Email" 
                        aria-describedby="basic-addon1"
                        name="email"
                        onChange={handlerChange}
                        value={formData.email}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">🔑</span>
                    <input 
                        className="form-control" 
                        type="password"                        
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="basic-addon1"
                        name="password"
                        onChange={handlerChange}
                        value={formData.password}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">🔐</span>
                    <input 
                        className="form-control" 
                        type="password"                        
                        placeholder="Confirm password" 
                        aria-label="Confirm password" 
                        aria-describedby="basic-addon1"
                        name="passwordConfirm"
                        onChange={handlerChange}
                        value={formData.passwordConfirm}
                    />
                </div>

                <div className="form-check login__checkbox">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={formData.joinedNewsletter} 
                        id="mailing"
                        name="joinedNewsletter" 
                        onChange={handlerChange}
                    />

                    <label 
                        className="form-check-label" 
                        htmlFor="mailing"
                    >
                        Join the newsletter
                    </label>
                </div>

                <button type="button" className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}
