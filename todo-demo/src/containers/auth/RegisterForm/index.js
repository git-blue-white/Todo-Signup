import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '../../../components/common';
import { InputField } from '../../../components/form';
import validationSchema from './schema';

const INITIAL_VALUES = {
  username: '',
  password: '',
  email: '',
  fullname: ''
};

function RegisterForm({ history }) {
  const SignUP = values => {
    const userInfo = {
      email:values.email,
      fullname: values.fullname,
      username:values.username,
      password:values.password
    }
    fetch("/savedata", {
      method: "post",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.state);
      if(data.state === 1)
        {
          alert("success!")
          window.location.replace("/login");
        }
        else
        {
          alert("Failed!")
          window.location.replace("/signup");
        }
    })
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={SignUP}
      validationSchema={validationSchema}
    >
    <Form>
      <Field component={InputField} name="email" label="E-mail" />
      <Field component={InputField} name="fullname" label="Fullname" />
      <Field component={InputField} name="username" label="Username" />
      <Field component={InputField} name="password" label="password" type="password" />
      <Button mr={2} type="submit">
        Sign Up
      </Button>
      <Button mr={2} type="button">
        Cancel
      </Button>
    </Form>
    </Formik>
  );
}

export default RegisterForm;
