import LoginFoot from './LoginFoot';
import LoginForm from './LoginForm';
import LoginHead from './LoginHead';
import { LoginLayout } from './LoginLayout';

export default function Login() {
  return (
    <LoginLayout>
      <LoginHead></LoginHead>
      <LoginForm></LoginForm>
      <LoginFoot></LoginFoot>
    </LoginLayout>
  );
}
