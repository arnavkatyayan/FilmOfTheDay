import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function MovieComp(props) {
    console.log(props.movieList);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.movieList && props.movieList.poster_path) {
            setLoading(false);
        }
    }, [props.movieList]);

    return (
        <div className="box movie-box">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                // Content to show after loading completes
                <div className="movie-details"> {/* You can add movie details here */}</div>
            )}
        </div>
    );
}

export default MovieComp;
