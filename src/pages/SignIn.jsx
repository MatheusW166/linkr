import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';
import { InputContainer, MainContainer, PageTitle } from '../components/InitialScreen/styled';

export default function SignInPage() {
  const navigate = useNavigate();
  const { setToken } = useContext(Context);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signInTemplate = {
    email,
    password,
  };

  const url = 'http://localhost:5000';

  const token = localStorage.getItem('token');

  React.useEffect(() => {
    if (token) {
      navigate('/timeline');
    }
  });

  function signIn(event) {
    event.preventDefault();
    const promise = axios.post(url, signInTemplate);

    promise
      .then((res) => {
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      })
      // eslint-disable-next-line no-alert
      .catch((error) => alert(error.response.data));
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
          <button type="submit" onClick={signIn}>Log In</button>
        </form>
        <button type="button" onClick={() => navigate('/sign-up')}> First time? Create an account! </button>
      </InputContainer>
    </MainContainer>
  );
}
