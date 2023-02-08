import React, { useEffect } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss'

export default function Authentication() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
