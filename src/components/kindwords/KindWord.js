import React from 'react'
import hrLine from "../../images/hr_line.png";
import lightYellow from "../../images/light_yellow.png"
import lightPurple from "../../images/light_purple.png"
import lightGreen from "../../images/light_green.png"
import "./kindwords.css"

const KindWord = () => {
  return (
		<section className="words-section">
			<div className="container">
				<h2 className="secondary-heading words-heading">Kind Words</h2>
				<p className="words-subheading">
					See what my clients have to say about working with me
				</p>
				<div className="work-cards">
					<div className="left-cards">
						<div className="card left-first">
							<img
								src={lightYellow}
								alt=""
								className="back-light-image"
							/>
							<p className="card-desc">
								"His quality of work is excellent! I prefer
								Mehedi in every important work of design. He is
								working fast, clean and present great usability
								results."
							</p>
							<h4 className="card-heading">Harald Pfeifer</h4>
						</div>
						<div className="card left-second">
							<img
								src={lightPurple}
								alt=""
								className="back-light-image"
							/>
							<p className="card-desc">
								I couldn't ask for a better Designer.
								Communication was 200% and this went above my
								expectations.
								<br />
								He threw in some additional perks for me. I will
								definitely be working with him for future
								projects. Happy and very satisfied customer
							</p>
							<h4 className="card-heading">Valenthino</h4>
						</div>
					</div>
					<div className="right-cards">
						<div className="card right-card">
							<img
								src={lightGreen}
								alt=""
								className="back-light-image"
							/>
							<p className="card-desc">
								Mehedi has worked with us on many projects and
								has always come through. Mehedi is professional
								with an eye for detail and makes his deadlines.
								<br />
								His work is always outstanding and uses a lot of
								his own creativity and understands us and our
								projects with simple direction.
								<br />
								He is easy to work with an responds quickly to
								any request we have ever had.
							</p>
							<h4 className="card-heading">Geoff Crutcher</h4>
						</div>
					</div>
				</div>
				<div className="words-stats">
					<div className="stat">
						<h2 className="secondary-heading stats-heading">5</h2>
						<p className="stats-desc">Years Of Experience</p>
					</div>
					<div className="stats-hr">
						<img src={hrLine} alt="" className="hr-line" />
					</div>
					<div className="stat">
						<h2 className="secondary-heading stats-heading">
							300+
						</h2>
						<p className="stats-desc">Freelance Projects</p>
					</div>
					<div className="stats-hr">
						<img src={hrLine} alt="" className="hr-line" />
					</div>
					<div className="stat">
						<h2 className="secondary-heading stats-heading">
							100%
						</h2>
						<p className="stats-desc">Customer Satisfaction</p>
					</div>
				</div>
			</div>
		</section>
  );
}

export default KindWord