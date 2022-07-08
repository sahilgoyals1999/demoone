import { Field, Formik, Form, ErrorMessage } from "formik"
import * as Yup from 'yup';

const Register = () => {
    return (
        <div>
            <hr />
        <Formik
        initialValues={{
            firstName: '',
            lastName: ''
        }}
        validationSchema={Yup.object().shape({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required')
        })}
        onSubmit={fields => {
            alert("Success");
        }}>
        {({errors, status, touched}) => {
            return <Form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName"
                    type="text"
                    className={'form-control'+(errors.firstName?' is-invalid' : '')}
                    />
                    <ErrorMessage name='firstName' component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName"
                    type="text"
                    className={'form-control'+(errors.lastName?' is-invalid' : '')}
                    />
                    <ErrorMessage name='lastName' component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </Form>
        }}
        </Formik>
        <hr />
        </div>
    )
}

export default Register;