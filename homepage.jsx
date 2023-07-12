import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';
// import CallMadeIcon from '@mui/icons-material/CallMade';

function Homepage() {
  return (
    <div>
    <header class="header">
    <img className="logo" src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg"></img>
    
<nav class="nav-items">
  
    <a href="loginform">Home</a>
    <a href="#">About</a>
    <a href="#">Event</a>
    <a href="#">Blogs</a>
    <a href="#">Contact</a>
    
</nav>

  </header>
  <main>
    <div class="intro">
    <p>All the fun starts here!</p>
      <h1>T4Tech</h1>
      <p>"Unleashing the power of technology."</p>
    {/* <button onclick="Login">Login</button> */}
      <Link to='/employeelogin'> <button className='loginbutton'>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
    {/* <button className='signupbutton'>HR Login<img className="upward"src={CallMadeIcon}></img></button> */}
    </div>
   <div className='quality'>
    <p>OUR QUALITY<img src="https://th.bing.com/th/id/OIP.0ERq-weaaWc6V0HME6NCTwHaHa?pid=ImgDet&w=800&h=800&rs=1" height="32px"width="40%"></img></p>
   </div>
    <div class="achievements">
      <div class="work">
        <i class="fas fa-atom"></i>
        <p class="work-heading">Expertise</p>
        <p class="work-text"> T4Tech boasts a team of highly skilled and experienced professionals who possess in-depth knowledge across various technology domains.</p>
      </div>
      <div class="work">
        <i class="fas fa-skiing"></i>
        <p class="work-heading">Innovation</p>
        <p class="work-text"> Innovation is at the core of T4Tech's DNA. We constantly strive to push boundaries and embrace new ideas, technologies, and methodologies.</p>
      </div>
      <div class="work">
        <i class="fas fa-ethernet"></i>
        <p class="work-heading">Results-Driven</p>
        <p class="work-text">At T4Tech, we are focused on delivering tangible results for our clients. We set clear goals and metrics, measure progress, and track success.</p>
      </div>
    </div>
    
    <div class="about-me">
      <div class="about-me-text">
        <h2>About</h2>
        <p>At T4Tech, we are passionate about driving digital transformation and empowering businesses to thrive in the ever-evolving technological landscape. As a leading technology solutions provider, we specialize in delivering innovative and tailored solutions that enable organizations to unlock their full potential.</p><br></br>
        <p>With a team of seasoned experts and cutting-edge technologies at our disposal, we offer a comprehensive range of services designed to address the diverse needs of our clients. From strategic consulting to software development, from cloud migration to cybersecurity, we are dedicated to delivering high-quality solutions that propel businesses forward.</p>
      </div>
      <img src="https://wallpapercrafter.com/th800/219774-sky-view-company-and-high-tech-hd.jpg" alt="me"></img>
    </div>
  </main>
  <footer class="footer">
    <div class="copy">&copy; 2022 Developer</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="links">
        <span>Social Links</span>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
  </div>

  )
}

export default Homepage