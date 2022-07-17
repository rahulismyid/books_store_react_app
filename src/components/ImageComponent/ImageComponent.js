import React, { Component } from "react";

class ImageComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<img
					width={"100%"}
					height={"250"}
					loading="lazy"
					src={this.props.url}
					alt="display image"
				/>
			</div>
		);
	}
}

export default ImageComponent;
