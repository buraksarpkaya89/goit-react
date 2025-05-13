import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";

const SignUpFormik = () => {

    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, "Çok kısa!")
            .max(15, "Çok uzun")
            .required("Zorunlu"),
        lastName: Yup.string()
            .min(3, "Çok kısa!")
            .max(15, "Çok uzun")
            .required("Zorunlu"),
        email: Yup.string()
            .email("Geçerli bir email giriniz.")
            .required("Zorunlu"),
        password: Yup.string()
            .min(8, "Minimum 8 karakter olmalı")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
            .required("Zorunlu")
    })

    return (
        <div>
            <h2>Kayıt Formu</h2>
            <Formik
                initialValues={{}}
                onSubmit={(values) =>console.log(values)}
                validationSchema={SignUpSchema}
            >
                <Form>
                    <div>
                        <label>Adınız</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name='firstName' component="div" />
                    </div>
                    <div>
                        <label>Soyadınız</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name='lastName' component="div" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name='email' component="div" />
                    </div>
                    <div>
                        <label>Şifre</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name='password' component="div" />
                    </div>
                    <button type='submit'>Kayıt Ol</button>

                </Form>

            </Formik>
        </div>
    )
}

export default SignUpFormik