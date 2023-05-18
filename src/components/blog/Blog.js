import React from 'react'
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import smallCard1 from "../../images/smallcard1.png";
import smallCard2 from "../../images/smallcard2.png";
import smallCard3 from "../../images/smallcard3.png";
import workButton from "../../images/work_btn.png";
import arrowButton from "../../images/arrow-button.png";
import "./blog.css"

const Blog = () => {
  return (
		<section className="blog-section" id="blog-section">
			<div className="container">
				<div className="blog-header">
					<h2 className="secondary-heading blog-heading">
						Blog & Resources
					</h2>
					<div className="blog-desc">
						<p className="blog-desc-para">
							I love to write whenever i can. Here is some of my
							<br />
							blog and resources for the designers and developers.
						</p>
						<div className="left-right-arrows">
							<div className="left-arrow-container">
								<img src={leftArrow} alt="" />
							</div>
							<div className="right-arrow-container">
								<img src={rightArrow} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="all-work-items blog-items">
					<div className="all-work-item">
						<div className="blog-image-container">
							<img
								src={smallCard1}
								alt=""
								className="work-image"
							/>
						</div>
						<div className="all-work-desc">
							<h4 className="all-work-heading">
								How to plan and manage <br />
								project like pro?
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
						<div className="blog-image-container">
							<img
								src={smallCard2}
								alt=""
								className="work-image"
							/>
						</div>
						<div className="all-work-desc">
							<h4 className="all-work-heading">
								How to make 3d <br />
								illustration for your next projects
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
						<div className="blog-image-container">
							<img
								src={smallCard3}
								alt=""
								className="work-image"
							/>
						</div>
						<div className="all-work-desc">
							<h4 className="all-work-heading">
								Best keyboard for <br />
								Designers and Developer
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

export default Blog