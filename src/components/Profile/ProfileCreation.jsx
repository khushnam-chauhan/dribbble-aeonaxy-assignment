import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileCreation.css';

const ProfileCreation = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');
  const [defaultAvatarSelected, setDefaultAvatarSelected] = useState(false);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  const [selectedDefaultAvatar, setSelectedDefaultAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(URL.createObjectURL(file));
    setDefaultAvatarSelected(false);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatar && location) {
      console.log('Avatar:', avatar);
      console.log('Location:', location);
      navigate('/dribble-options');
    }
  };

  const handleReturnClick = () => {
    setSelectedDefaultAvatar(null);
    setAvatar(null);
    setDefaultAvatarSelected(false);
  };

  const toggleAvatarOptions = () => {
    setShowAvatarOptions(!showAvatarOptions);
  };

  const selectAvatar = (defaultAvatar) => {
    let defaultAvatarUrl = '';
    if (defaultAvatar === 'default-avatar-1') {
      defaultAvatarUrl = 'https://i.pinimg.com/236x/20/c6/77/20c677b590a91c81a194e33798a09581.jpg';
    } else if (defaultAvatar === 'default-avatar-2') {
      defaultAvatarUrl = 'https://static-prod.adweek.com/wp-content/uploads/2023/01/WhatsApp-Avatar-Profile-Photo-Hero-652x367.png';
    }
    setSelectedDefaultAvatar(defaultAvatar);
    setAvatar(defaultAvatarUrl);
    setDefaultAvatarSelected(true);
    setShowAvatarOptions(false);
  };

  return (
    <div className="profile-creation-container">
      <div className="heading">
        <h1>dribbble</h1>
      </div>
      <div className="creation-container">
        <div className="header">
          <h2>Welcome! Let's create your profile</h2>
          <p>Let others get to know you better! You can do these later</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="avatar-section">
            <h3>Add an avatar</h3>
            <div className="avatar-container">
              {avatar ? (
                <img src={avatar} alt="Avatar" className="avatar-preview" />
              ) : (
                <div className="avatar-hero">
                  <div className="avatar-placeholder">
                    <span>+</span>
                  </div>
                  <div className="avatar-hero-left">
                    <label htmlFor="upload-image" className="upload-avatar">
                      Choose Image
                    </label>
                    <input
                      type="file"
                      id="upload-image"
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                    <p className="default" onClick={toggleAvatarOptions}>
                      or choose one of our defaults
                    </p>
                  </div>
                </div>
              )}
              {showAvatarOptions && (
                <div className="avatar-options">
                  <button onClick={() => selectAvatar('default-avatar-1')}>
                    <img
                      src="https://i.pinimg.com/236x/20/c6/77/20c677b590a91c81a194e33798a09581.jpg"
                      alt="avatar-1"
                    />
                  </button>
                  <button onClick={() => selectAvatar('default-avatar-2')}>
                    <img
                      src="https://static-prod.adweek.com/wp-content/uploads/2023/01/WhatsApp-Avatar-Profile-Photo-Hero-652x367.png"
                      alt="avatar-2"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="location-section">
            <h3>Add your location</h3>
            <input
              type="text"
              placeholder="enter a location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <button type="submit" className="next-button" disabled={!avatar || !location}>
            Next
          </button>
          <p className="return-info" onClick={handleReturnClick}>
            or press <span>return</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProfileCreation;
