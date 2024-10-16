// src/components/About.js
import React from 'react';
import Html from '../Assets/html-5.png';
import Css from '../Assets/css-3.png';
import Bootstrap from '../Assets/Bootstrap.png';
import Java from '../Assets/java.png';
import JavaScript from '../Assets/js.png';
import ReactJs from '../Assets/React.png';
import MySQL from '../Assets/MySQL.png';
import SpringBoot from '../Assets/Springboot.png';
import Git from '../Assets/Git.png';

function About() {
  const skills = [Html, Css, Bootstrap, Java, JavaScript, ReactJs, MySQL, SpringBoot, Git];
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
        I have recently completed my B.Tech in Computer Science Engineering from NIET, Greater Noida, 
        where I gained a solid foundation in computer science principles and hands-on experience in programming 
        languages like Java, JavaScript, and SQL. My academic journey has equipped me with both the technical 
        knowledge and the problem-solving skills required for this role.<br/>
        During my B.Tech, I worked on various 
        projects that allowed me to apply my programming skills in real-world scenarios. These experiences have 
        not only strengthened my proficiency in coding but have also fostered my ability to work in teams, manage 
        time efficiently, and adapt quickly to new challenges.
        </p>
        <div className="skills-content">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <img key={index} src={skill} alt="Skill" className="skills" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



