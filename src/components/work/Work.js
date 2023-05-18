import React from 'react'
import visualDesign from "../../images/visual_design_logo.png";
import caseStudy from "../../images/case_study_logo.png";
import projectLogo from "../../images/projects_logo.png";
import card_1 from "../../images/card1.png";
import card_2 from "../../images/card2.png";
import card_3 from "../../images/card3.png";
import workButton from "../../images/work_btn.png";
import arrowButton from "../../images/arrow-button.png";
import workBackImage from "../../images/work_back_image.png"
import lightYellowBack from "../../images/light_yellow_back.png"
import "./work.css"

const Work = () => {
  return (
		<section className="work-section" id='work-section'>
			<div className="container">
				<img src={workBackImage} alt="" className="work-back-image" />
				<div className="work-header">
					<h2 className="secondary-heading work-heading">My Work</h2>
					<div className="work-desc">
						<p className="work-desc-para">
							Here are some of my design works that showcase my{" "}
							<br />
							design skills and expertise. Click on each project
							to see
						</p>
						<div className="desc-items">
							<div className="desc-item">
								<div className="item-logo">
									<img
										src={visualDesign}
										alt=""
										className="visual-design-image"
									/>
								</div>
								<p className="item-heading">Visual Design</p>
							</div>
							<div className="desc-item">
								<div className="item-logo">
									<img
										src={caseStudy}
										alt=""
										className="visual-design-image"
									/>
								</div>
								<p className="item-heading">Case Study</p>
							</div>
							<div className="desc-item">
								<div className="item-logo">
									<img
										src={projectLogo}
										alt=""
										className="visual-design-image"
									/>
								</div>
								<p className="item-heading">Projects</p>
							</div>
						</div>
					</div>
				</div>
				<img src={lightYellowBack} alt="" className='work-light-yellow-back' />
				<div className="all-work-items">
					<div className="all-work-item">
						<div className="work-image-container">
							<img src={card_1} alt="" className="work-image" />
						</div>
						<div className="all-work-desc">
							<h4 className="all-work-heading">
								Personal Portfolio Website Hero Design Concept
							</h4>
							<div className="work-desc-logo-container">
								<img
									src={workButton}
									alt=""
									className="work-button"
								/>
							</div>
						</div>
					</div>
					<div className="all-work-item">
						<div className="work-image-container">
							<img src={card_2} alt="" className="work-image" />
						</div>
						<div className="all-work-desc">
							<h4 className="all-work-heading">
								Personal Portfolio Website Hero Design Concept
							</h4>
							<div className="work-desc-logo-container">
								<img
									src={workButton}
									alt=""
									className="work-button"
								/>
							</div>
						</div>
					</div>
					<div className="all-work-item">
						<div className="work-image-container">
							<img src={card_3} alt="" className="work-image" />
						</div>
						<div className="all-work-desc">
							<h4 className="all-work-heading">
								Personal Portfolio Website Hero Design Concept
							</h4>
							<div className="work-desc-logo-container">
								<img
									src={workButton}
									alt=""
									className="work-button"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="page-button">
					<button className="blue-button">
						More This Way
						<span className="blue-button-arrow-container">
							<img
								src={arrowButton}
								alt=""
								className="blue-button-arrow"
							/>
						</span>
					</button>
				</div>
			</div>
		</section>
  );
}

export default Work