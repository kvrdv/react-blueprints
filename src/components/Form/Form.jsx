import {useState} from "react";
import './form.scss';

export default function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            comment: '',
            isFriendly: true,
            status: '',
            color: ''
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
        alert(JSON.stringify(formData));
        // submitToApi(FormData);
    }

    return(
        <div className="form__wrapper">
            <form className="form" onSubmit={handlerSubmit}>    
                <div className="input-group mb-3">
                    <span className="input-group-text form__input-label" id="basic-addon3">First name</span>
                    <input 
                        className="form-control" 
                        type="text" 
                        aria-label="First Name" 
                        aria-describedby="basic-addon3"
                        name="firstName"
                        onChange={handlerChange}
                        value={formData.firstName}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text form__input-label" id="basic-addon3">Last name</span>
                    <input 
                        className="form-control" 
                        type="text" 
                        aria-label="Last name" 
                        aria-describedby="basic-addon3"
                        name="lastName"
                        onChange={handlerChange}
                        value={formData.lastName}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text form__input-label" id="basic-addon3">Email</span>
                    <input 
                        className="form-control" 
                        type="email" 
                        aria-label="Email" 
                        aria-describedby="basic-addon3"
                        name="email"
                        onChange={handlerChange}
                        value={formData.email}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text form__input-label">Comment</span>
                    <textarea 
                        name="comment" 
                        className="form-control" 
                        aria-label="Comment"
                        onChange={handlerChange}
                        value={formData.comment}
                    />              
                </div>

                <div className="input-group mb-3">
                    <label className="input-group-text form__input-label" htmlFor="color">Color</label>
                    <select 
                        className="form-select" 
                        id="color"
                        name="color"  
                        value={formData.color}
                        onChange={handlerChange}                      
                    >
                        <option value="random">Random</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                </div>

                <fieldset className="form__fieldset">
                    <legend>Current employment status:</legend>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="status" 
                            id="unemployed"  
                            value="unemployed"
                            checked={formData.status === 'unemployed'}
                            onChange={handlerChange}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="unemployed"
                        >
                            Unemployed
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="status" 
                            id="part-time"  
                            value="part-time"
                            checked={formData.status === 'part-time'}
                            onChange={handlerChange}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="part-time"
                        >
                            Part-time
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="status" 
                            id="full-time"   
                            value="full-time"
                            checked={formData.status === 'full-time'}
                            onChange={handlerChange}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="full-time"
                        >
                            Full-time
                        </label>
                    </div>           
                </fieldset>

                <div className="form-check form__checkbox">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={formData.joinedNewsletter} 
                        id="isFriendly" 
                        name="isFriendly"
                        onChange={handlerChange}
                        checked={formData.isFriendly}
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="isFriendly"
                    >
                        Are you friendly?
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Go</button>
            </form>
        </div>
    )
}
