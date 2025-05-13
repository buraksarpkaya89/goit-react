import React, { useId } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const FormikApp = () => {

    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();
    const levelFieldId = useId();

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(2, "Çok kısa!").max(50, "Too Long!").required("Zorunlu"),
        email: Yup.string().email("Email girmeyi unutma!").required("Zorunlu"),
        message: Yup.string().min(3, "Çok kısa").max(256, "Too long").required("Zorunlu"),
        level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Zorunlu")
    });

    const initialValues = {
        username: "",
        email: "",
        message: "",
        level: "good",
    };

    const handleSubmit = (values, actions) => {
        console.log(actions);
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form>
                <div>
                    <label htmlFor={nameFieldId}>Username</label>
                    <Field type="text" name="username" id={nameFieldId} />
                    <ErrorMessage name="username" component="span" />
                </div>

                <div>
                    <label htmlFor={emailFieldId}>Email</label>
                    <Field type="email" name="email" id={emailFieldId} />
                    <ErrorMessage name="email" component="span" />
                </div>

                <div>
                    <label htmlFor={msgFieldId}>Message</label>
                    <Field as="textarea" name="message" id={msgFieldId} rows="5" />
                    <ErrorMessage name="message" component="span" />
                </div>

                <div>
                    <label htmlFor={levelFieldId}>Service satisfaction level</label>
                    <Field as="select" name="level" id={levelFieldId}>
                        <option value="good">Good</option>
                        <option value="neutral">Neutral</option>
                        <option value="bad">Bad</option>
                    </Field>
                    <ErrorMessage name="level" component="span" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default FormikApp