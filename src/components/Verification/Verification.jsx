import React from 'react';
import './Verification.css'
const VerificationPage = () => {
  return (
    <div className="verification-page">
      <h1>Please verify your email...</h1>
      <div className="verification-content">
        <div className="mail-icon">✉️</div>
        <p>Please verify your email address. We've sent a confirmation email to:</p>
        <p><span>account@refero.design</span></p>
        <p>Click the confirmation link in that email to begin using Dribbble.</p>
        <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#">resend the confirmation email</a>.</p>
        <p>Wrong email address? <a href="#">Change it</a>.</p>
      </div>
    </div>
  );
};

export default VerificationPage;