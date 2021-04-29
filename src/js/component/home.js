import React from "react";
import PropTypes from "prop-types";

export function Home(props) {
	return (
		<div className="container rounded d-flex justify-content-center text-center text-white mt-5">
			<div className="numero col-1 m-1 rounded">
				<i className="far fa-clock"></i>
			</div>
			<div className="numero col-1 m-1 rounded">{props.sexto}</div>
			<div className="numero col-1 m-1 rounded">{props.quinto}</div>
			<div className="numero col-1 m-1 rounded">{props.cuarto}</div>
			<div className="numero col-1 m-1 rounded">{props.tercero}</div>
			<div className="numero col-1 m-1 rounded">{props.segundo}</div>
			<div className="numero col-1 m-1 rounded">{props.primero}</div>
		</div>
	);
}

Home.propTypes = {
	sexto: PropTypes.number,
	quinto: PropTypes.number,
	cuarto: PropTypes.number,
	tercero: PropTypes.number,
	segundo: PropTypes.number,
	primero: PropTypes.number
};
