import React from 'react';
import profileImage from '../Assets/profile-img.jpg'; // Update with your image path

function Home() {
  return (
    <section id="home">
      <div className="home-content-1">
        <img src={profileImage} alt="Profile-Name" className="home-image" />
        <div className='home-content-2'>
        <h1>I'm a Frontend Developer</h1>
        <p>
          My name is Neha singh.<br/> 
          I have a passion for web development and enjoy creating dynamic and responsive web applications.
        </p>
        <button className='btn-down'><a href='https://drive.google.com/file/d/1fi9RpxXASzPYTgmngKvMVpgtZLw8YXW6/view?usp=sharing'>Download Resume</a></button>
        </div>
      </div>
    </section>
  );
}

export default Home;