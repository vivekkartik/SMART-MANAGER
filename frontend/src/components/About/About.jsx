import React from 'react';
import './About.css';
import profileImage from '../../public/dp.jpg'; 

const About = () => {
  return (
    <div className='About justify-content-center aline-item-center d-flex flex-column'>
      <div className='container d-flex justify-content-center align-items-center flex-column gap-4'>
        <div><h1>About Us</h1></div>
        <img src={profileImage} alt='Profile' className='about-image mx-3' />
        <h5 className='Name-tag-about-page mx-2'>--C.VIVEK KARTIK</h5>
        <p className='about-us-para mx-3'> At <b>SMART MANAGER</b>, we believe that productivity doesn’t have to be complicated.<br/> Our mission is to help individuals and teams stay organized, focused, and in control of their time with a simple yet powerful to-do list application. <br/>Whether you're managing daily tasks, planning long-term goals, or juggling work and personal responsibilities, our platform is designed to keep you on track.

Born out of a desire to make task management stress-free,SMART MANAGER offers an intuitive interface, customizable task categories, reminders, and progress tracking—all tailored to fit the way you work.<br/> We’re passionate about helping people turn intentions into actions, one task at a time.

Join us on the journey to smarter productivity and start making every day more meaningful.</p>
      </div>
    </div>
  );
};

export default About;
