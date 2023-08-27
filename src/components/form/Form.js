import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import "./Form.scss";

const CustomForm = () => {
    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                message: '',
                checkbox: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, '*Минимум 2 символа')
                        .required('*Обязательное поле'),
                email: Yup.string()
                        .email('*Неправильный email адрес')
                        .required('*Обязательное поле'),
                amount: Yup.number()
                        .min(5, '*Не менее 5')
                        .required('*Обязательное поле'),
                currency: Yup.string()
                        .required('*Выберите валюту'),
                message: Yup.string()
                        .min(10, '*Не менее 10 символов'),
                checkbox: Yup.boolean()
                        .required('*Необходимо согласие')
                        .oneOf([true], '*Необходимо согласие')
    
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2 className="form__title">Отправить пожертование</h2>
                <div className="form__item">
                    <label htmlFor="name">Ваше имя{<ErrorMessage className="form__error" name="name" component="div"/>}</label>
                    <Field 
                        className="form__input" 
                        name="name" 
                        type="text" 
                        id="name"/>
                </div>
                <div className="form__item">
                    <label htmlFor="email">Ваша почта{<ErrorMessage className="form__error" name="email" component="div"/>}</label>
                    <Field 
                        className="form__input" 
                        name="email" 
                        type="email" 
                        id="email"/>
                </div>
                <div className="form__item">
                    <label htmlFor="amount">Количество{<ErrorMessage className="form__error" name="amount" component="div"/>}</label>
                    <Field 
                        className="form__input" 
                        name="amount" 
                        type="number" 
                        id="amount"/>
                </div>
                <div className="form__item">
                    <label htmlFor="currency">Валюта{<ErrorMessage className="form__error" name="currency" component="div"/>}</label>
                    <Field 
                        className="form__select" 
                        name="currency" 
                        id="currency"
                        as="select">
                            <option value="">Выберите валюту</option>
                            <option value="USD">USD</option>
                            <option value="UAH">UAH</option>
                            <option value="RUB">RUB</option>
                    </Field>
                </div>
                <div className="form__item">
                    <label htmlFor="message">Ваше сообщение{<ErrorMessage className="form__error" name="message" component="div"/>}</label>
                    <Field
                        className="form__textarea"
                        name="message" 
                        id="message"
                        as="textarea"/>
                </div>
                <div className="form__item form__item__checkbox">
                    <Field 
                        type="checkbox" 
                        name="checkbox" 
                        className="form__checkbox" 
                        id="checkbox"/>
                    <label htmlFor="checkbox">Соглашаетесь с политикой конфидициальности?{<ErrorMessage className="form__error" name="checkbox" component="div"/>}</label>
                </div>  
                <button type="submit" className="form__button">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;