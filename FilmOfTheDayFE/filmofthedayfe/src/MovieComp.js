import React, { useState, useEffect } from "react";
import { Button, Spinner, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

function MovieComp(props) {
    const [loading, setLoading] = useState(true);
    const [nameOfExcelFile, setNameOfExcelFile] = useState("");
    const [saveWithName, setSaveWithName] = useState(false);
    const [savingOptions, setSavingOptions] = useState(false);

    useEffect(() => {
        if (props.movieList && props.movieList.poster_path) {
            setLoading(false);
        }
    }, [props.movieList]);

    const handleSaving = async () => {
        const requestObj = {
            nameOfExcelFile: nameOfExcelFile || "",
            movieName: props.movieList.original_title,
            overview:props.movieList.overview,
            releaseDate:props.movieList.release_date
        };

        try {
            const resp = await axios.post('http://127.0.0.1:5000/generate_excel', requestObj);
            if (resp.status === 200) {
                swal('Success!', 'Movie Saved To Excel!', 'success');
            } else {
                swal('Error!', 'Some Issue came while Saving', 'warning');
            }
        } catch (error) {
            console.error('Error saving to Excel:', error);
            swal('Error!', 'Some Issue came while Saving', 'warning');
        }
    };

    const handleBack = () => {
        props.setOpenMovieComp(false);
    };

    const handleSave = () => {
        setSavingOptions(true);
    };

    const handleName = (evt) => {
        setNameOfExcelFile(evt.target.value);
    };

    const handleSavingWithName = () => {
        setSaveWithName(!saveWithName);
    };

    return (
        <div className="box movie-box">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div className="movie-details">
                    <h3><center>{props.movieList.original_title}</center></h3>
                    <h5><center>{props.movieList.release_date}</center></h5>
                    <h6 className="overview">{props.movieList.overview}</h6>
                    <div className="d-flex justify-content-center btns">
                        <Button variant="success" onClick={handleSave}>Save To Excel</Button>
                        <Button variant="warning" onClick={handleBack}>Back</Button>
                    </div>
                    {savingOptions && (
                        <div className="saving-options mt-3">
                            <Form.Check 
                                type="checkbox" 
                                checked={saveWithName} 
                                label="Select with name?" 
                                onChange={handleSavingWithName} 
                                style={{cursor:'pointer'}}
                            />
                        </div>
                    )}
                    
                    {saveWithName && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter the name please!"  
                            style={{ width: '200px', margin: '10px auto' }} 
                            value={nameOfExcelFile} 
                            onChange={handleName} 
                        />
                        <Button variant="success" onClick = {handleSaving}>Save</Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MovieComp;
