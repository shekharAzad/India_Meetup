const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <img className='footer-icons' src='\socialmedia\india-meetup-high.png' alt='logo'/>

              <p className = "about-mmetup">Meetup peoples are uploaded image anytime & anywhere<br></br>
              visitor just click on </p>
            </div>

            <div class="col-md-7 fa-align-center">
              <ul class="footer__list">
                <li class="footer__link">
                  <a href="#">News & Events</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="/faq">Faq & Help</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="/contact">Contact</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="/about">About</a>
                </li>
              </ul>
              <ul class="footer__list footer__list--policy">
                <li class="footer__link">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <div class = "social-media">
              <div class=" follow">
                <h4>Follow Us On</h4>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <img src="\socialmedia\facebook.png" alt="facebook"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/socialmedia/inst.png" alt="Instagram"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/socialmedia/linkedin.png" alt="linkedin"></img>
                    </a>
                  </li>
                </ul>
                  <p>Copyright 2023 @ Meetup</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;