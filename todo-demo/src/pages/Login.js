import React from 'react';
import AuthLayout from '../containers/layout/AuthLayout';
import LoginForm from '../containers/auth/LoginForm';

function Login() {
  return (
    <AuthLayout title="Log In">
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
