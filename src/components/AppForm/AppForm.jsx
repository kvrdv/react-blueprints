import {useState} from "react";
import './AppForm.scss';

export default function AppForm() {
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            isFriendly: true,
            status: '',
            favColor: ''
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
        // submitToApi(FormData);
        console.log(formData);
    }

    return(
        <div>
            <form 
                className="form--wrapper"
                onSubmit={handlerSubmit}
            >
                <input 
                    type="text" 
                    placeholder="First Name"
                    onChange={handlerChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    onChange={handlerChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    onChange={handlerChange}
                    name="email"
                    value={formData.email}
                />
                <textarea 
                    name="comments" 
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handlerChange}
                />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    checked={formData.isFriendly}
                    onChange={handlerChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>          
                <br />                       
                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                        type="radio" 
                        id="unemployed" 
                        name="status" 
                        value="unemployed"
                        checked={formData.status === 'unemployed'}
                        onChange={handlerChange}
                    />
                    <label htmlFor="one">Unemployed</label>
                    <br />
                    <input 
                        type="radio" 
                        id="part-time" 
                        name="status" 
                        value="part-time"
                        checked={formData.status === 'part-time'}
                        onChange={handlerChange}
                    />
                    <label htmlFor="one">Part-time</label>
                    <br />
                    <input 
                        type="radio" 
                        id="full-time" 
                        name="status" 
                        value="full-time"
                        checked={formData.status === 'full-time'}
                        onChange={handlerChange}
                    />
                    <label htmlFor="one">Full-time</label>             
                </fieldset>
                <br />
                <select 
                    name="favColor" 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handlerChange}
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}