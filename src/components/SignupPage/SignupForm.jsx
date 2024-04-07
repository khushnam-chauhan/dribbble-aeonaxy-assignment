import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'
import bgg from '../../assets/bgg.jpg'
import ProfileCreation from '../Profile/ProfileCreation';
function SignupForm() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [usernameTaken, setUsernameTaken] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate =useNavigate();
  const handleNameChange= (e) =>{
    setName(e.target.value);
  };
  const handleUsernameChange= (e) =>{
    setUsername(e.target.value);
    setUsernameTaken(true);
  };
  const handleEmailChange= (e) =>{
  setEmail(e.target.value);
};
const handlePasswordChange=(e) =>{
  setPassword(e.target.value);
  if(e.target.value.length >=6){
    setUsernameTaken(false);
  }
};
const handleTermsChange=(e)=>{
  setTermsAccepted(e.target.checked);
};
const handleSubmit= (e)=>{
  e.preventDefault();
  console.log('Submitted');
  navigate('/profile-creation');
};

  return (
    <div className='SignupForm'>
      <div className="leftContainer">
        <h1>dribbble</h1>
        <p className='sub-heading'>Discover the world's top Designers & Creatives.</p>
        <img src={bgg} alt="bg-image" />
        <div className="illustration-credit">
          <p>Art by <span>Peter Tarka</span></p>
        </div>
      </div>
      <div className="rightContainer">
        <p className="sign-in-Link">Already a member? <span>Sign In</span></p>
        <h2>Sign up to dribbble</h2>
        {usernameTaken && <p className='username-taken'>Username has already been taken</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={name} placeholder='john' onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text"
            id='username'
            value={username}
            onChange={handleUsernameChange}
            className='username-input'
            placeholder='john'
             />
          </div>
          <div className="form-group" id='email-sec'>
            <label htmlFor="email">Email</label>
            <input type="email" 
            id='email' 
            value={email}
            onChange={handleEmailChange}
              placeholder='account@refero.design'
            />
          </div>
          <div className="form-group" id='pass-sec'>
            <label htmlFor="password">Password</label>
            <input type="password"
            id='password'
            value={password} 
            onChange={handlePasswordChange}
            placeholder='6+ characters'
            />
          </div>
          <div className="terms-condition">
            <div className="checkbox">
              <input type="checkbox" id='terms' checked={termsAccepted} onChange={handleTermsChange} />
              <label htmlFor="terms">
              Creating an account means you're okay with our <span> Terms of Service, Privacy Policy,</span>  and our default
               <span> Notification Settings.</span>
              </label>
            </div>
          </div>
          <button type='submit' className='create-acc-btn' disabled={!termsAccepted}>Create Account</button>

        </form>
        <p className="captcha-info">
        This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span>apply.
        </p>
      </div>
    </div>
  )
}

export default SignupForm
