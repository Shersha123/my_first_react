import { useFormik } from "formik";
import * as yup from 'yup';

const formValidationSchema = yup.object({
    email: yup.string().min(4).required(),
    password: yup.string().min(4).required(),
});

export function BasicForm() {
    const {handleSubmit,values,handleBlur,handleChange,touched,errors} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("Form values: ", values);
        },
    })
    return (

        <form className="add-movie-form" onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email ? errors.email : null}
            <input
                value={values.password}
                type="text"
                placeholder="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.password && errors.password ? errors.password : null}
            <h2>errors</h2>
            <pre> {JSON.stringify(errors)}</pre>
            <h2>touched</h2>
            <pre> {JSON.stringify(touched)}</pre>
            <button type="submit">Submit</button>
        </form>

    );
}
