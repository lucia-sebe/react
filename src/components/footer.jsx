import React from 'react';
import '../styles/footer.css';

function Footer(){
    return(
        <footer>
            <h1 id='titleFooter'>Questions? Call +1 (408) 600-1722 (USA)</h1>
           
            <div className="infoFooter">
                <div className="boxInFooter">
                    <p>FAQ</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>

                <div className="boxInFooter">
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                </div>

                <div className="boxInFooter">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                </div>

                <div className="boxInFooter">
                    <p>Media Center</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>      
  </footer>
    )
}

export default Footer;
