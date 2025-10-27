'use client';

import css from './RegistrationForm.module.css';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import Loader from '../Loader/Loader';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Мінімум 1 символ')
    .required('Ім’я є обов’язковим')
    .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9\s'-]+$/, 'Ім’я може містити лише літери та цифри'),
  email: Yup.string().email('Невірна пошта').required('Пошта є обов’язковою'),
  comment: Yup.string().max(300, 'Максимум 300 символів'),
});

type ValuesProps = {
  name: string;
  email: string;
  comment: string;
};

const initialValues: ValuesProps = {
  name: '',
  email: '',
  comment: '',
};

const RegistrationForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: ValuesProps) => {
    try {
      console.log('Form submitted with:', values);

      toast.success('Дані надіслані успішно!');

      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      toast.error('Щось пішло не так. Спробуйте ще раз.');
    }
  };
  return (
    <div className={css.mainContent}>
      <div className={css.wrapper}>
        <h1 className={css.formTitle}>Реєстрація</h1>

        <Formik
          initialValues={initialValues}
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form className={css.form}>
              {isSubmitting && <Loader />}

              <Field name="name">
                {({ field, meta }: FieldProps<string>) => (
                  <div className={css.formGroup}>
                    <label
                      htmlFor="name"
                      className={`${css.formLabel} ${meta.touched && meta.error ? css.labelError : ''}`}
                    >
                      Імʼя*
                    </label>
                    <input
                      {...field}
                      id="name"
                      type="text"
                      placeholder="Ваше ім’я"
                      className={`${css.input} ${meta.touched && meta.error ? css.inputError : ''}`}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.errorText}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }: FieldProps<string>) => (
                  <div className={css.formGroup}>
                    <label
                      htmlFor="email"
                      className={`${css.formLabel} ${meta.touched && meta.error ? css.labelError : ''}`}
                    >
                      Пошта*
                    </label>
                    <input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`${css.input} ${meta.touched && meta.error ? css.inputError : ''}`}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.errorText}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <Field name="comment">
                {({ field, meta }: FieldProps<string>) => (
                  <>
                    <textarea
                      {...field}
                      id="comment"
                      placeholder="Коментар"
                      className={`${css.textarea} ${
                        meta.touched && meta.error ? css.inputError : ''
                      }`}
                      rows={4}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.errorText}>{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <button
                type="submit"
                disabled={!dirty || !isValid || isSubmitting}
                className={css.submitButton}
              >
                {isSubmitting ? 'Реєстрація...' : 'Відправити форму'}
              </button>
              {/* 
              {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>} */}
            </Form>
          )}
        </Formik>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default RegistrationForm;
