'use client';

import styles from './RegistrationForm.module.css';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import Loader from '../Loader/Loader';

type RegistrationFormProps = {
  /** Текст заголовка (опціонально) */
  title?: string;
  /** Підзаголовок або опис під заголовком */
  subtitle?: string;
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Мінімум 1 символ')
    .required('Ім’я є обов’язковим')
    .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9\s'-]+$/, 'Ім’я може містити лише літери та цифри'),
  email: Yup.string().email('Невірна пошта').required('Пошта є обов’язковою'),
  message: Yup.string()
    .min(5, 'Мінімум 5 символів')
    .max(500, 'Максимум 500 символів')
    .required('Повідомлення є обов’язковим'),
});

type ValuesProps = {
  name: string;
  email: string;
  message: string;
};

const initialValues: ValuesProps = {
  name: '',
  email: '',
  message: '',
};

const RegistrationForm = ({
  title = 'Привіт! Ми раді вас чути!',
  subtitle = 'Якщо у Вас є питання, побажання чи ідеї — залиште нам повідомлення, і ми обов’язково відповімо!',
}: RegistrationFormProps) => {
  const router = useRouter();

  const handleSubmit = async (values: ValuesProps) => {
    try {
      toast.success('Дякуємо за ваш відгук! Ми зв’яжемося з Вами найближчим часом.');

      setTimeout(() => {
        router.back();
      }, 2000);
    } catch {
      toast.error('Щось пішло не так. Спробуйте ще раз.');
    }
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.wrapper}>
        <h1 className={styles.formTitle}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form className={styles.form}>
              {isSubmitting && <Loader />}

              <Field name="name">
                {({ field, meta }: FieldProps<string>) => (
                  <div className={styles.formGroup}>
                    <label
                      htmlFor="name"
                      className={`${styles.formLabel} ${meta.touched && meta.error ? styles.labelError : ''}`}
                    >
                      Ім’я*
                    </label>
                    <input
                      {...field}
                      id="name"
                      type="text"
                      placeholder="Ваше ім’я"
                      className={`${styles.input} ${meta.touched && meta.error ? styles.inputError : ''}`}
                    />
                    {meta.touched && meta.error && (
                      <div className={styles.errorText}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }: FieldProps<string>) => (
                  <div className={styles.formGroup}>
                    <label
                      htmlFor="email"
                      className={`${styles.formLabel} ${meta.touched && meta.error ? styles.labelError : ''}`}
                    >
                      Пошта*
                    </label>
                    <input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`${styles.input} ${meta.touched && meta.error ? styles.inputError : ''}`}
                    />
                    {meta.touched && meta.error && (
                      <div className={styles.errorText}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <Field name="message">
                {({ field, meta }: FieldProps<string>) => (
                  <div className={styles.formGroup}>
                    <label
                      htmlFor="message"
                      className={`${styles.formLabel} ${meta.touched && meta.error ? styles.labelError : ''}`}
                    >
                      Повідомлення*
                    </label>
                    <textarea
                      {...field}
                      id="message"
                      placeholder="Ваше повідомлення"
                      className={`${styles.textarea} ${meta.touched && meta.error ? styles.inputError : ''}`}
                      rows={4}
                    />
                    {meta.touched && meta.error && (
                      <div className={styles.errorText}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <button
                type="submit"
                disabled={!dirty || !isValid || isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Надсилаємо...' : 'Надіслати'}
              </button>
            </Form>
          )}
        </Formik>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default RegistrationForm;
