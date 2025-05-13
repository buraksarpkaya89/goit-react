import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";

const SurveyFormik = () => {

    const SurveySchema = Yup.object().shape({
        hobbies: Yup.array().min(1, "En az 1 tane seçiniz").required("Zorunlu"),
        gender: Yup.string().required("Zorunlu"),
        color: Yup.string().required("Zorunlu"),

    })



    return (
        <div>
            <h2>Anket</h2>
            <Formik
                initialValues={{}}
                onSubmit={(values) => console.log(values)}
                validationSchema={SurveySchema}
            >
                <Form>
                    <div>
                        <h3>Cinsiyet</h3>
                        <div>
                            <label>
                                <Field type="radio" name="gender" value="m" />
                                Erkek
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="f" />
                                Kadın
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="d" />
                                Diğer
                            </label>
                        </div>
                        <ErrorMessage name='gender' component="div" />
                    </div>
                    <div>
                        <h3>Renk seçiniz</h3>
                        <Field as="select" name="color">
                            <option value="">Seçiniz</option>
                            <option value="kırmızı">Kırmızı</option>
                            <option value="sarı">Sarı</option>
                            <option value="mavi">Mavi</option>
                            <option value="yeşil">Yeşil</option>
                        </Field>
                        <ErrorMessage name='color' component="div" />

                    </div>
                    <div>
                        <h3>Hobileriniz</h3>
                        <div>
                            <label>
                                <Field type="checkbox" name="hobbies" value="sports" />
                                Spor
                            </label>
                            <label>
                                <Field type="checkbox" name="hobbies" value="music" />
                                Müzik
                            </label>
                            <label>
                                <Field type="checkbox" name="hobbies" value="reading" />
                                Kitap
                            </label>
                            <label>
                                <Field type="checkbox" name="hobbies" value="cinema" />
                                Sinema
                            </label>
                            <label>
                                <Field type="checkbox" name="hobbies" value="gaming" />
                                Oyun
                            </label>
                        </div>
                        <ErrorMessage name='hobbies' component="div"/>

                    </div>
                    <div>
                        <button type='submit'>Gönder</button>
                    </div>
                </Form>


            </Formik>
        </div>
    )
}

export default SurveyFormik