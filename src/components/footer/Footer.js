import React from 'react'
import "./footer.css"
import socialTwitter from "../../images/social_media_twitter.png";
import socialYoutube from "../../images/social_media_youtube.png";
import socialBe from "../../images/social_media_be.png";
import socialFigma from "../../images/social_media_figma.png";
import socialGlobe from "../../images/social_media_globe.png";
import socialM from "../../images/social_media_m.png";
import socialLinkedin from "../../images/social_media_linkedin.png";
import footerLightBack from "../../images/footer_light_back.png"
import footerLines from "../../images/bottom_background_lines.png"

const Footer = () => {
  return (
		<footer className="footer-section">
			<div className="container footer">
				<p>MehediHas © 2023</p>
				<div className="footer-icons">
					<img src={socialLinkedin} alt="" className="social-icon" />
					<img src={socialTwitter} alt="" className="social-icon" />
					<img src={socialGlobe} alt="" className="social-icon" />
					<img src={socialBe} alt="" className="social-icon" />
					<img src={socialYoutube} alt="" className="social-icon" />
					<img src={socialM} alt="" className="social-icon" />
					<img src={socialFigma} alt="" className="social-icon" />
				</div>
			</div>
			<img src={footerLightBack} alt="" className="footer-light-back" />
			<img src={footerLines} alt="" className='footer-lines' />
		</footer>
  );
}

export default Footer