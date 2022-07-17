import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NotFound = () => {
	return (
		<div className="fallback-loader-container">
			The page you are looking for does not exist.
			<div>
				<Link to="/" title="Home">
					Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
