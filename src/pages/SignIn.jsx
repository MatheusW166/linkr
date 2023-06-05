import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import {
  InputContainer,
  MainContainer,
  PageTitle,
} from '../components/InitialScreen/styled';
import client from '../services/api/api.client';

export default function SignInPage() {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(Context);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const signInTemplate = {
    email,
    password,
  };

  const token = localStorage.getItem('token');

  React.useEffect(() => {
    if (token) {
      navigate('/timeline');
    }
  });

  function signIn(event) {
    event.preventDefault();
    setIsSubmitting(true);
    client
      .post('/', signInTemplate)
      .then((res) => {
        setIsSubmitting(false);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        const stringUser = JSON.stringify(res.data.user);
        localStorage.setItem('user', stringUser);
        navigate('/timeline');
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert(error.response.data);
      });
  }

  return (
    <MainContainer>
      <PageTitle>
        <h1> linkr </h1>
        <h2> save, share and discover the best links on the web </h2>
      </PageTitle>
      <InputContainer>
        <form>
          <input
            required
            placeholder="E-mail"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            required
            placeholder="Senha"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button disabled={isSubmitting} type="submit" onClick={signIn}>
            Log In
          </button>
        </form>
        <button type="button" onClick={() => navigate('/sign-up')}>
          First time? Create an account!
        </button>
      </InputContainer>
    </MainContainer>
  );
}
