import React from "react";
import { Component } from "react";
import '../App.css';
import { Router } from "react-router-dom";

function FirstPage() {
    return (
      <div className="App">
      
        <div className='nav'>
        <a href='#App' id="header" className='header'>#vibesDiscover</a>
        <nav className='navigation'>
              
              <a href="SignUp">SIGN UP</a>
              <a href="About">ABOUT</a>
              <a href="Contact">CONTACT US</a>
              <a href="Bookings">BOOKINGS</a>
  
        </nav>
          
          </div>
          <div className='ABOUT'>
         <h1 id="name">VIBES DISCOVER</h1>
         <h2 id='tagline'>DISCOVER THINGS WITH VIBES</h2>
        <p id='desc'>Our goal is to make travel easy, exciting, and full of good vibes.
  We're not just a website; we're your friend in travel, here to help you discover new places and create lasting memories.
  With us, you'll find simple tips, friendly advice, and stories from people who love to explore, just like you.
  No complicated jargon here – we believe in keeping things easy and enjoyable for everyone.
  Join our community of fellow wanderers. Share your experiences, get inspired,
  and connect with people who share your passion for adventure.
  Vibes Discover – where discovering the world is easy, fun, and for everyone!</p>
  <button id='BOOK'>BOOK NOW</button>
  </div>
  
  <div className='kuchbhi'>
  <div className='l1'>
  <img className='img' src="https://static.toiimg.com/thumb/msid-100486881,width-748,height-499,resizemode=4,imgsize-102540/.jpg"></img>
  <h2 className='location'>Maldives</h2>
  <p className='Description'>The Maldives is a nation of islands in the Indian Ocean, 
  that spans across the equator. The country is comprised of 1192 islands that stretch along a length of 871 kilometers.
   While the country covers an area of approximately 90,000 square kilometers, only 298 square kilometers of that is dry land.
   The islands are grouped into a double chain of 26 atolls.</p>
  <button className='explore' id='btn1'>Explore</button>
  </div>
  <div className='l2'>
  <img className='img2'src="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_18/525826/246057.jpg"></img>
  <h2 className='location'>Lakshadweep</h2>
  <p className='Description'>Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to ‘a hundred thousand islands’. 
  A club of 36 atolls and coral reefs, 
  the nature tourism destination is known for preserved ecology and water sports.</p>
  <button className='explore'id='btn2'>Explore</button>
  </div>
  <div className='l3'>
  <img className='img'src="https://static.india.com/wp-content/uploads/2019/10/Andaman-Nicobar.jpg?impolicy=Medium_Resize&w=1200&h=800"></img>
  <h2 className='location'>Andaman</h2>
  <p className='Description'>Looking for a perfect place to unwind? Pack your bags and head towards peaceful and breathtakingly 
   beautiful islands of Andaman & Nicobar. Ready to welcome you with its picturesque beauty, turquoise blue water, and pristine beaches, Andaman & Nicobar is popular for its historical significance as well. You may have heard of Cellular Jail- ‘Kaala Paani’.
   Well, it is here in the capital city (Port Blair) of this union territory.</p>
  
  
  <button className='explore'id='btn3'>Explore</button>
  </div>
  
  </div>
   
        </div>
    );
  }
  
  export default FirstPage;
  