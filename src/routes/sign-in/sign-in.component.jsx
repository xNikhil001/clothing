import React, { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <SignUpForm />
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
}
