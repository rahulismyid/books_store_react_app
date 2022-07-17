import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../../assets/1.jpeg";
import logo2 from "../../assets/2.jpeg";
import logo3 from "../../assets/3.jpeg";
import logo4 from "../../assets/4.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

const Carousal = () => {
	const imageList = [
		{ img: logo1, alt: "fImage" },
		{ img: logo2, alt: "sImage" },
		{ img: logo3, alt: "tImage" },
		{ img: logo4, alt: "frImage" },
	];

	return (
		<>
			<Carousel interval={2000} fade keyboard autoPlay>
				{imageList.map(({ img, alt }) => (
					<Carousel.Item key={img}>
						<img className="d-block w-100 img-carousal" src={img} alt={alt} />
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
};

export default Carousal;
