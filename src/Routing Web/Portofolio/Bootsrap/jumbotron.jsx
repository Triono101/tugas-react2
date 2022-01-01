import React from "react";

const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3 jumbotron">
            <div className="container-fluid py-5 text-center">
                <p className="fs-2 fs-italic mt-5 fw-bold">Coding student of Eduwork</p>
                <h1 className="display-4 fw-bold">TRIONO</h1>
           
                <button
                    text-white="true" type="button"
                    className="btn btn-primary btn-outline-info border border-green btn-sm mt-5 shadow-sm px-3 py-2"
                    id="btn">
                    <a text-white="true" href="https://www.linkedin.com/in/triono-101/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </button>
            </div>
		</div>
	);
};

export default Jumbotron;