import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
function Card(props) {
	console.log(props);
	//console.log(title);
	return (
		<div className="card mx-3 mb-4 shadow" style={{ width: "18rem" }}>
			<img src={props.image} className="card-img-top" alt="" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};

export default Card;
