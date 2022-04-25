import React from 'react';
import AuthLayout from '../containers/layout/AuthLayout';
import RegisterForm from '../containers/auth/RegisterForm';

function Signup() {
  return (
    <AuthLayout title="Sign UP">
      <RegisterForm />
    </AuthLayout>
  );
}

export default Signup;
