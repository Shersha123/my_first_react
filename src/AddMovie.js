import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

const movieValidationSchema = yup.object({
    name:yup.string().required(),
    poster:yup.string().required().min(4),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
    trailer:yup.string().required().min(4).url(),
});

export function AddMovie() {

    const {handleSubmit,values,handleBlur,handleChange,touched,errors} = useFormik({
        initialValues: {
            name:"",
            poster: "",
            rating: "",
            summary: "",
            Trailer: "",
        },
        validationSchema: movieValidationSchema,
        onSubmit: (newMovie) => {
            console.log("Form values: ", newMovie);
            addMovie(newMovie);
        },
    })

    const navigate = useNavigate();
    const addMovie = (newMovie) => {
        // const newMovie = {
        //     name:"",
        //     poster: "",
        //     rating: "",
        //     summary: "",
        //     Trailer: "",
        // };
        fetch("https://63f306d8864fb1d6000db605.mockapi.io/movies", {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: { "Content-type": "application/json" },
        }).then(() => navigate('/movies'));
    };

    return (
  <form className="add-movie-form" onSubmit={handleSubmit} >
        <TextField
            label="Name"
            variant="outlined"
            value={values.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
        />{touched.Name && errors.Name ? errors.Name : null}
        <TextField
            label="poster"
            variant="outlined"
            value={values.poster}
            name="poster"
            onChange={handleChange}
            onBlur={handleBlur}
        />{touched.poster && errors.poster ? errors.poster : null}
        <TextField
            label="summary"
            variant="outlined"
            value={values.summary}
            name="summary"
            onChange={handleChange}
            onBlur={handleBlur}
        />{touched.summary && errors.summary ? errors.summary : null}
        <TextField
            label="Rating"
            variant="outlined"
            value={values.rating}
            name="rating"
            onChange={handleChange}
            onBlur={handleBlur}
        />{touched.Rating && errors.Rating ? errors.Rating : null}
        <TextField
            label="Trailer"
            variant="outlined"
            value={values.trailer}
            name="trailer"
            onChange={handleChange}
            onBlur={handleBlur}
        />{touched.trailer && errors.trailer ? errors.trailer : null}

        {/* Copy Existing movieList & Add Newmovie  to it  */}

        <Button variant="contained" type="submit" >Add Movie</Button>
        </form>

    );
}
