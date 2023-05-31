import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputContainer, MainContainer, PageTitle } from '../components/InitialScreen/styled';

export default function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [password, setPassword] = React.useState('');

  const templateSignUp = {
    email,
    password,
    name,
    photo,
  };

  const url = 'http://localhost:5000';

  const token = localStorage.getItem('token');

  React.useEffect(() => {
    if (token) {
      navigate('/timeline');
    }
  });

  function createAccount(event) {
    event.preventDefault();
    const promise = axios.post(`${url}/sign-up`, templateSignUp);

    promise.then(() => navigate('/'));

    // eslint-disable-next-line no-alert
    promise.catch((error) => alert(error.response.data));
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
            placeholder="e-mail"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            required
            placeholder="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            required
            placeholder="username"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            required
            placeholder="picture url"
            type="url"
            onChange={(event) => setPhoto(event.target.value)}
          />
          <button type="submit" onClick={createAccount}>Sign Up</button>
        </form>
        <button type="button" onClick={() => navigate('/')}> Switch back to log in </button>
      </InputContainer>
    </MainContainer>
  );
}
