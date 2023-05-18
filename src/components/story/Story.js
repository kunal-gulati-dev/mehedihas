import React from 'react'
import person from "../../images/person.png";
import messageBox from "../../images/person_button_part.png";
import "./story.css"

const Story = () => {
  return (
		<section className="story-section" id="about-section">
			<div className="container">
				<div className="story-container">
					<div className="left-part">
						<div className="owner-image-container">
							<img src={person} alt="" className="person-image" />
						</div>
						<h5>Mehedi Hasan</h5>
						<p>
							UX UI Designer, Mentor and <br />
							Content Creator at Youtube @Mehedihas
						</p>
						<button className="person-button">
							<span>
								<img src={messageBox} alt="" />
							</span>
							Let's Talk
						</button>
					</div>
					<div className="right-part">
						<h2 className="secondary-heading story-heading">
							My Long <br /> Story Short
						</h2>
						<p className="story-para">
							<span className="story-para-color">
								Growing up in a small village without access to
								the internet
							</span>
							or the latest technology sparked my curiosity for
							computers. I began learning Photoshop in a photo
							studio where I paid for. <br />
							<br />
							My love for gaming led me to play FPS video games
							like PUBG and Valorant, which taught me valuable
							skills in making critical decisions under pressure.
							When I'm not gaming, I enjoy unwinding with Netflix.
							<br />
							<br /> As a former cricket team captain, I gained
							valuable teamwork and empathy skills that have
							helped me contribute positively to any situation.
							<br />
							<br /> Now, I'm passionate about helping others, and
							I'm working to build a Designer Community to assist
							new designers in their journey to success.
						</p>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Story