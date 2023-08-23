import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function auth({ request }) {
  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get("mode") || 'login';
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: "Unsupported Mode!" }, { status: 422 })
  }
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }
  const res = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  })

  if (res.status === 422 || res.status === 401) {
    return res;
  }
  if (!res.ok) {
    throw json({ message: "Could Not authenticate user." }, { status: 500 })
  }
  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString())

  return redirect("/")
}