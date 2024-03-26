import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription max-w-screen-lg mx-auto text-center">
        <p className="footer-subscription-heading text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
          Join The Advertising Newsletter To Receive Our Best Advertising Deals.
        </p>
        <p className="footer-subscription-text text-sm md:text-base lg:text-lg xl:text-xl mb-6">
          You Can Subscribe At Any Time.
        </p>
        <div className="input-areas flex justify-center items-center mb-10">
          <form className="flex flex-col md:flex-row items-center">
            <input
              className="h-12 w-full md:w-[300px] rounded-sm p-2 md:mr-4 mb-2 md:mb-0"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline text-white">Subscribe</Button>
          </form>
        </div>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
            <Link to='https://rishusinfotech.in/'>Testimonials</Link>
            <Link to='https://rishusinfotech.in/'>Careers</Link>
            <Link to='https://rishusinfotech.in/'>Investors</Link>
            <Link to='https://rishusinfotech.in/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Support</Link>
            {/* <Link to='https://rishusinfotech.in/'>Destinations</Link>
            <Link to='https://rishusinfotech.in/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Other Pages</h2>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/water.4_all?igsh=OGU0MmVlOWVjOQ=='>Instagram</Link>
            <Link to='https://www.facebook.com/profile.php?id=61556993383467'>Facebook</Link>
            <Link to='https://rishusinfotech.in/'>Youtube</Link>
            <Link to='https://x.com/water4all_ads?t=wfYzfCLm7Oi90Mh5MtsBww&s=09'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
           
             {/* <h1 className='social-logo'><img src='./images\IMG_20240302_192729 (1).png' width='100' height="100"/></h1> */}
              {/* <i class='fab fa-typo3' /> */}
          
          </div>&nbsp;
          <small className='website-rights font-sans'>Copyright ©2024 Design by Rishus Infotech. All rights reserved</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=61556993383467'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/water.4_all?igsh=OGU0MmVlOWVjOQ=='
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://rishusinfotech.in/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://x.com/water4all_ads?t=wfYzfCLm7Oi90Mh5MtsBww&s=09'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedIn'
              to='https://www.linkedin.com/company/rishus-infotech/?viewAsMember=true'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;