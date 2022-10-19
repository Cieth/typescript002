import React from 'react';
import Button from './Button';
import { Formik, Form, Field } from 'formik';
import { useAuth0 } from '@auth0/auth0-react';
interface MyFormValues {
  fullName: string;
  email: string;
}

const Inputs: React.FC<{}> = () => {
  const { user, loginWithPopup } = useAuth0();
  const initialValues: MyFormValues = {
    fullName: '',
    email: '',
  };
  console.log(user);
  return (
    <div className='InputCard__body'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        <div className='InputCard__inputs'>
          <Form className='InputCard__inputs_body'>
            <label htmlFor='fullName'> Full name</label>
            <Field id='fullName' name='fullName' placeholder='Full name' />
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email' name='email' placeholder='email' />
            <div className='login'>
              <Button type='submit'>Register </Button>
            </div>
          </Form>
        </div>
      </Formik>
      <div className='InputCard__buttons'>
        <>
          <button
            onClick={() => loginWithPopup({ connection: 'google-oauth2' })}
          >
            Log In with google
          </button>
          <button onClick={() => loginWithPopup({ connection: 'github' })}>
            Log In with github
          </button>
          <button onClick={() => loginWithPopup({ connection: 'facebook' })}>
            Log In with facebook
          </button>
        </>
      </div>
    </div>
  );
};

export default Inputs;
