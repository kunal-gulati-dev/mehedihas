import React, { useState } from "react";
import logo from "../../images/Logo.png";
import talkLogo from "../../images/talk-logo.png";
import play from "../../images/play_circle.png";
import playTringle from "../../images/play_triangle.png";
import headerLine from "../../images/header_line.png";
import heroLightPurple from "../../images/hero_light_purple.png"
import heroBackLines from "../../images/header_back_lines.png"
import hamburgerMenu from "../../images/ham_menu.png"
import closeBtn from "../../images/close_btn.png"
import "./header.css"
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
	const [menuopen, setMenuOpen] = useState(false)

	const toggleNavbar = () => {
		setMenuOpen(!menuopen)
	}
 
  return (
		<header id="home-section">
			<img src={heroLightPurple} alt="" className="herolightpurple" />
			<img src={heroBackLines} alt="" className="hero-back-lines" />
			{/* nav section */}
			{menuopen ? (
				<div className="navigation-menu">
					<div className="menu-header">
						<div className="nav-logo">
							<img src={logo} alt="" className="logo" />
						</div>
						<div className="close-btn-container">
							<img
								src={closeBtn}
								alt=""
								className="close-btn"
								onClick={() => setMenuOpen()}
							/>
						</div>
					</div>
					<div className="menu-links">
						<ul>
							<li>
								<ScrollLink
									to="home-section"
									smooth={true}
									// duration={500}
									className="menu-link"
									onClick={() => setMenuOpen()}
								>
									Home
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="work-section"
									smooth={true}
									duration={500}
									className="menu-link"
									onClick={() => setMenuOpen()}
								>
									My work
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="blog-section"
									smooth={true}
									duration={500}
									className="menu-link"
									onClick={() => setMenuOpen()}
								>
									Resources
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="about-section"
									smooth={true}
									duration={500}
									className="menu-link"
									onClick={() => setMenuOpen()}
								>
									About
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="workshop-section"
									smooth={true}
									duration={500}
									className="menu-link"
									onClick={() => setMenuOpen()}
								>
									101Workshop
								</ScrollLink>
							</li>
						</ul>
					</div>
				</div>
			) : (
				""
			)}
			<div className="container">
				<nav>
					<div className="nav-logo">
						<img src={logo} alt="" className="logo" />
					</div>
					<div className="nav-links">
						<ul>
							<li className="nav-link">Home</li>
							<li className="nav-link-hr">
								<img src={headerLine} alt="" />
							</li>
							<li className="nav-link">My work</li>
							<li className="nav-link-hr">
								<img src={headerLine} alt="" />
							</li>
							<li className="nav-link">Resources</li>
							<li className="nav-link-hr">
								<img src={headerLine} alt="" />
							</li>
							<li className="nav-link">About</li>
							<li className="nav-link-hr">
								<img src={headerLine} alt="" />
							</li>
							<li className="nav-link">101Workshop</li>
						</ul>
					</div>
					<div className="lets-talk">
						<div className="talk-logo">
							<img
								src={talkLogo}
								alt="talk logo"
								className="talk-logo-image"
							/>
						</div>
						<p>Let's Talk</p>
					</div>
					<div className="menu">
						<p className="menu-heading">Menu</p>
						<div className="menu-container">
							<img
								src={hamburgerMenu}
								alt=""
								className="menu-icon"
								onClick={() => toggleNavbar()}
							/>
						</div>
					</div>
				</nav>
			</div>

			{/* hero secition */}
			<div className="container">
				<div className="hero">
					<h1 className="hero-heading">
						Crafting Memorable
						<br />
						User Experiences for
						<br />
						Business Success
					</h1>
					<p>
						I blend exquisite design with impeccable functionality
						for an exceptional
						<br />
						user experience, while keeping users captivated.
					</p>
					<div className="hero-play-button">
						<div className="play-circle-container">
							<img
								src={play}
								alt="play button"
								className="play-button"
							/>
						</div>
						<div className="play-triangle-container">
							<img
								src={playTringle}
								alt=""
								className="talk-logo-traingle"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
  );
}

export default Header