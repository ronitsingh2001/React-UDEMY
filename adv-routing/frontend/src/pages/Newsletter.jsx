import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageComponent";

function Newsletter() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default Newsletter;

export async function signupNewsletter({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}