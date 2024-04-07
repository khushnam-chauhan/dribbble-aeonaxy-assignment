import React, { useState } from 'react';
import './DribbleOptions.css';
import laptop from  "../../assets/laptop.jpg";
import ai from  "../../assets/ai.jpg";
import bulb from  "../../assets/bulb.jpg";
import {useNavigate} from 'react-router-dom'
const DribbleOptions = () => {
  const navigate=useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const options = [
    {
      label: "I'm a designer looking to share my work",
      description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
      value: 'share_work',
      image: laptop, 
    },
    {
      label: "I'm looking to hire a designer",
      description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
      value: 'hire_designer',
      image: ai, 
    },
    {
      label: "I'm looking for design inspiration",
      description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
      value: 'design_inspiration',
      image: bulb,
    },
  ];

  return (
    <div className='dribbble-options'>
      <div className="heading">
        <h1>dribbble</h1>
        <p onClick={()=> navigate('/profile-creation')} > &lt; </p>
      </div>
      <div className="hero-section">
        <h2>What brings you to Dribbble?</h2>
        <p>Select the options that best describe you. Don't worry, you can explore other options later.</p>
        <div className='options'>
          {options.map((option) => (
            <div key={option.value} className='option-box'>
              <img src={option.image} alt={option.label} className="option-image" />
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionChange(option.value)}
                />
                {option.label}
              </label>
              {selectedOptions.includes(option.value) && (
                <p>{option.description}</p>
              )}
            </div>
          ))}
        </div>
        <button className='finish-btn' onClick={() => navigate('/landing-page')} disabled={selectedOptions.length===0}>Finish</button>
      </div>
    </div>
  );
};

export default DribbleOptions;
