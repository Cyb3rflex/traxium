import React, {useState} from 'react' 
import '../component/signup.css'
import image from '../image.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SignIn from './Signin';

const SignUp = () => {  
    const [formData, setFormData] = useState({  
        name: '',  
        username: '',  
        email: '',  
        password: ''  
       });
    const [agreedToTerms, setAgreedToTerms] = useState(false); 
    const handleChange = (e) => {  
    const { name, value } = e.target;  
        setFormData({  
            ...formData,  
            [name]: value  
        });  
      };
    const handleCheckboxChange = () => {  
        setAgreedToTerms(!agreedToTerms);  
    };  
    
    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (agreedToTerms) {  
            console.log('Form submitted:', formData);   
        } else {  
            alert("You must agree to the terms and conditions.");  
        }  
    };
   return (
    <div>
        <div id='base'>
          <div id='option'>
            <div id='header'>
                <h1>Sign in to KWARA RIDE</h1>
                <img className='image' src={image} alt="" />
            </div>
           
            <form onSubmit={handleSubmit}>
               <div>
                <div id='first'>
                   <div>
                     <label>
                        Surname <br />
                        <input id='name'
                             type='text'
                             name='name'
                             value={formData.name}
                             onChange={handleChange}
                             required
                        />
                      </label>
                    </div> <br />
                    <div>
                        <label>
                            Last name <br />
                            <input  id='user'
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required />
                        </label>
                    </div>
                </div> <br />
                <div>
                   <label>
                    Email <br />
                    <input id='email'
                    type='email'
                    placeholder='        Enter your email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                     />
                   </label>
                </div> <br />
                <div>
                    <label>
                        Password <br />
                        <input id='pass'
                        placeholder='    6+ character'
                        type="password"
                        name='password'
                        minLength="6"
                        
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
            </div> <br />
            <div>
            <label id='words'>
                <input id='check' 
                type="checkbox" 
                checked={agreedToTerms}
                onChange={handleCheckboxChange}
                required
                />
                <p id='agree'>i agree with KWARA RIDE terms, privacy <br />  
                   policy, and default notification setting</p>
            </label>
        </div>
        <button id='button' type='submit'> 
        
            Create account
        </button>
             
       </form>
         <p id='note'>Already have an account? <a href="./signin"  ></a> 
           <Link to='/signin'  rel="">log in</Link>
        </p>
         </div>
      </div>    
    </div>
   )
     
} 

export default SignUp;