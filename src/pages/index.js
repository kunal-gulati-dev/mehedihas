import * as React from "react";
import "./global-style.css";
import Header from "../components/header/Header";
import Work from "../components/work/Work"
import KindWord from "../components/kindwords/KindWord"
import Blog from "../components/blog/Blog"
import Story from "../components/story/Story"
import Footer from "../components/footer/Footer"



const IndexPage = () => {
	return (
		<main>
			<Header />
			<Work />
			<KindWord />
			<Blog />
			<Story />
			<Footer />
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Mehedihas</title>;
