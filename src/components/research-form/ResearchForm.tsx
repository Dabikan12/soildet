import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "./ResearchForm.css"

const ResearchForm = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required('Введите имя'),
        secondName: Yup.string().required('Введите фамилию'),
        email: Yup.string().email('Неверный E-mail').required('Введіть...'),
        telegram: Yup.string().required('Введите Telegram'),
        password: Yup.string().min(6, 'Пароль должен быть минимум 8 символов').required('Введите пароль'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
            .required('Повторите пароль'),
        referralCode: Yup.string().required('Введите реферальный код'),
    });

    return (
        <div className="research-wrapper">
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    email: '',
                    telegram: '',
                    password: '',
                    confirmPassword: '',
                    referralCode: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form className="form">
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="email"
                                type="email"
                                className="input"
                                placeholder="E-mail"
                            />
                            <ErrorMessage name="email" component="div" className="error}"/>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage name="email" component="div" className="error}"/>
                            </div>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage name="email" component="div" className="error"/>
                            </div>
                        </div>
                    </div>
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="email"
                                type="email"
                                className="input"
                                placeholder="E-mail"
                            />
                            <ErrorMessage name="email" component="div" className="error}"/>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage name="email" component="div" className="error}"/>
                            </div>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage name="email" component="div" className="error"/>
                            </div>
                        </div>
                    </div>
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="email"
                                type="email"
                                className="input"
                                placeholder="E-mail"
                            />
                            <ErrorMessage name="email" component="div" className="error}"/>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage name="email" component="div" className="error}"/>
                            </div>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage name="email" component="div" className="error"/>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default ResearchForm;