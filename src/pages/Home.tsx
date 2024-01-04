import { useEffect } from "react";
import Header from "../components/header/Header";
import { useAppContext } from "../config/AppContext";
import HeaderImage from "../images/mockup/viewpoint.png";
import Container from "../components/general/Container";
import Carousel from "../components/home/Carousel";
import CarouselImg1 from "../images/mockup/mountains.png";
import CarouselImg2 from "../images/mockup/couple.png";
import H2 from "../components/typography/H2";
import Featured from "../components/home/Featured";
import FeatureImage from "../images/mockup/dreamy.png";

const Home = () => {
	const { screenSize, setBlogsPageActive } = useAppContext();
	useEffect(() => {
		setBlogsPageActive(false);
	}, []);

	return (
		<div>
			<Header
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>

			<main>
				<Container className={screenSize > 750 ? "!px-0" : ""}>
					<H2
						className={`text-center ${
							screenSize < 750
								? "mb-5"
								: screenSize < 1250
								? "mb-7"
								: "mb-9"
						}`}
					>
						Lorem ipsum dolor sit
					</H2>
					<Carousel
						items={[
							{
								src: CarouselImg1,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
							{
								src: CarouselImg2,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
							{
								src: CarouselImg1,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
							{
								src: CarouselImg2,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
						]}
					/>
				</Container>

				<Featured
					Image={() => <img src={FeatureImage} alt="Viewpoint" />}
				/>

				<Container>
					<div>test</div>
				</Container>
			</main>
		</div>
	);
};

export default Home;
