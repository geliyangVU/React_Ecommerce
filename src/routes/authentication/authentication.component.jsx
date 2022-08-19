import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

const Authentication = () => {
  return (
    <div>
      <h1>This is Signin Component</h1>
      <SignInForm></SignInForm>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
