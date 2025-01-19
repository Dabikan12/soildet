import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ranges } from './ranges';
import ResearchButton from '../research-button/ResearchButton'; // Імпорт кнопки
import "./ResearchForm.css";

const ResearchForm = () => {
    const navigate = useNavigate();

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

    const handleSubmit = (values: any) => {
        // Обробка введених значень
        const results = ranges.map((range) => {
            let matchCount = 0;

            // Порівняння значень з діапазонами
            Object.keys(values).forEach((key) => {
                if (
                    values[key] >= range[key as keyof typeof range][0] &&
                    values[key] <= range[key as keyof typeof range][1]
                ) {
                    matchCount++;
                }
            });

            return { ...range, matchCount };
        });

        // Сортування за кількістю збігів
        results.sort((a, b) => b.matchCount - a.matchCount);

        // Перехід на сторінку результатів із передачею даних
        navigate('/result', { state: { results } });
    };

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
                onSubmit={handleSubmit}
            >
                <Form className="form">
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="nitrogen"
                                type="text"
                                className="input"
                                placeholder="Азот"
                            />
                            <ErrorMessage name="nitrogen" component="div" className="error" />
                        </div>
                        <div className="inputGroup">
                            <Field
                                name="phosphorus"
                                type="text"
                                className="input"
                                placeholder="Фосфор"
                            />
                            <ErrorMessage name="phosphorus" component="div" className="error" />
                        </div>
                        <div className="inputGroup">
                            <Field
                                name="potassium"
                                type="text"
                                className="input"
                                placeholder="Калій"
                            />
                            <ErrorMessage name="potassium" component="div" className="error" />
                        </div>
                    </div>
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="sulfur"
                                type="text"
                                className="input"
                                placeholder="Сірка"
                            />
                            <ErrorMessage name="sulfur" component="div" className="error" />
                        </div>
                        <div className="inputGroup">
                            <Field
                                name="magnesium"
                                type="text"
                                className="input"
                                placeholder="Магній"
                            />
                            <ErrorMessage name="magnesium" component="div" className="error" />
                        </div>
                        <div className="inputGroup">
                            <Field
                                name="calcium"
                                type="text"
                                className="input"
                                placeholder="Кальцій"
                            />
                            <ErrorMessage name="calcium" component="div" className="error" />
                        </div>
                    </div>
                    <div className="inputs-group">
                        <div className="inputGroup">
                            <Field
                                name="borax"
                                type="text"
                                className="input"
                                placeholder="Бор"
                            />
                            <ErrorMessage name="borax" component="div" className="error" />
                        </div>
                        <div className="inputGroup">
                            <Field
                                name="zinc"
                                type="text"
                                className="input"
                                placeholder="Цинк"
                            />
                            <ErrorMessage name="zinc" component="div" className="error" />
                        </div>
                        <div className="inputGroup">
                            <Field
                                name="molybdenum"
                                type="text"
                                className="input"
                                placeholder="Молібден"
                            />
                            <ErrorMessage name="molybdenum" component="div" className="error" />
                        </div>
                    </div>
                    {/* Додаємо компонент кнопки */}
                    <ResearchButton />
                </Form>
            </Formik>
        </div>
    );
};

export default ResearchForm;
