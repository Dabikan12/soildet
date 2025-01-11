import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "./ResearchForm.css"

const ResearchForm = () => {

    const validationSchema = Yup.object({
        nitrogen: Yup.string().required('Введіть вміст азоту'),
        phosphorus: Yup.string().required('Введіть вміст фосфору'),
        potassium: Yup.string().required('Введіть вміст калію'),
        sulfur: Yup.string().required('Введіть вміст сірки'),
        magnesium: Yup.string().required('Введіть вміст магнію'),
        calcium: Yup.string().required('Введіть вміст кальцію'),
        borax: Yup.string().required('Введіть вміст бору'),
        zinc: Yup.string().required('Введіть вміст цинку'),
        molybdenum: Yup.string().required('Введіть вміст молібдену'),
    });

    return (
        <div className="research-wrapper">
            <Formik
                initialValues={{
                    nitrogen: '',
                    phosphorus: '',
                    potassium: '',
                    sulfur: '',
                    magnesium: '',
                    calcium: '',
                    borax: '',
                    zinc: '',
                    molybdenum: '',
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
                                name="nitrogen"
                                type="email"
                                className="input"
                                placeholder="Азот"
                            />
                            <ErrorMessage name="nitrogen" component="div" className="error}"/>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="phosphorus"
                                    type=""
                                    className="input"
                                    placeholder="Фосфор"
                                />
                                <ErrorMessage name="phosphorus" component="div" className="error}"/>
                            </div>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="potassium"
                                    type="email"
                                    className="input"
                                    placeholder="Калій"
                                />
                                <ErrorMessage name="potassium" component="div" className="error"/>
                            </div>
                        </div>
                    </div>
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="email"
                                type="email"
                                className="input"
                                placeholder="Сірка"
                            />
                            <ErrorMessage name="email" component="div" className="error}"/>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Магній"
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
                                    placeholder="Кальцій"
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
                                placeholder="Бор"
                            />
                            <ErrorMessage name="email" component="div" className="error}"/>
                        </div>
                        <div className="inputs-group">
                            <div className="inputGroup">
                                <Field
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Цинк"
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
                                    placeholder="Молібден"
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