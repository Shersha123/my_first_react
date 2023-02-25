import { useFormik } from "formik";
import * as yup from 'yup';

const movieValidationSchema = yup.object({
    email: yup.string().min(4).required(),
    password: yup.string().min(4).required(),
});

export function BasicForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: movieValidationSchema,
        onSubmit: (values) => {
            console.log("Form values: ", values);
        },
    })
    return (

        <form className="add-movie-form" onSubmit={formik.handleSubmit}>
            <input
                value={formik.values.email}
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
            <input
                value={formik.values.password}
                type="text"
                placeholder="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}
            <h2>errors</h2>
            <pre> {JSON.stringify(formik.errors)}</pre>
            <h2>touched</h2>
            <pre> {JSON.stringify(formik.touched)}</pre>
            <button type="submit">Submit</button>
        </form>

    );
}
