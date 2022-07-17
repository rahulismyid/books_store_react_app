import React from "react";
import "./styles.css";

const Star = ({ length = 5, comments = 10, noMargin = false }) => {
	return (
		<div style={{ display: `${noMargin ? "block" : ""}` }}>
			{[1, 2, 3, 4, 5].map((i, idx) => {
				return (
					<span key={i} className={`star-icon ${i <= length ? "filled" : ""}`}>
						★
					</span>
				);
			})}
			<span className="reviews-text">{comments} comments</span>
		</div>
	);
};

export default Star;
