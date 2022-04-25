import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components/common';
import { InputField } from '../../../components/form';
import AuthActions from '../../../redux/AuthRedux';
import validationSchema from './schema';
//import { useState, useEffect } from 'react';

const INITIAL_VALUES = {
  username: '',
  password: ''
};

function LoginForm() {

  const dispatch = useDispatch();
  const LogIN = values => {
    const userInfo = {
      username: values.username,
      password: values.password,
      state: 0
    }
    fetch("/login", {
      method: "post",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.state)
      if(data.state === 0)
      {
        alert("Wrong User")
        window.location.replace("/login")
      }
      else
        dispatch(AuthActions.login(data.fullname))
    })
    //dispatch(AuthActions.login(values.username));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={LogIN}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field component={InputField} name="username" label="Username" />
          <Field component={InputField} name="password" label="Password" type="password" />
          <Button mr={2} type="submit">
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
