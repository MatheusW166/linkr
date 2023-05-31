import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Context from '../Context';

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
      navigate('/home');
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

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const PageTitle = styled.div`
    height: 100vh;
    width: 62vw;
    left: 0;
    top: 0;
    background-color: #151515;
    color: #FFFFFF;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

    h1{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        margin-left: 10vw;
        padding-top: 30vh;
    }
    
    h2{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        margin-left: 10vw;
        width: 450px;
    }
    @media (max-width: 800px) {
        height: 25vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 76px;
            line-height: 84px;
            padding-top: 0;
            margin-left: 0;
        }

        h2{
            font-size: 23px;
            line-height: 34px;    
            margin-left: 0;
            width: 100vw;
            padding: 0 20vw;
            text-align: center;
            margin-bottom: 20px;
        }
    }
`;

const InputContainer = styled.div`
    height: 100vh;
    width: 38vw;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        font-family: 'Oswald';
        width: 30vw;

        input{
            font-weight: 700;
            height: 65px;
            margin-bottom: 15px;
            background: #FFFFFF;
            color: #9F9F9F;
            border-radius: 6px;
            padding-left: 15px;
        }
        input::placeholder{
            font-style: normal;
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
        }

        button{
            cursor: pointer;
            height: 65px;
            margin-bottom: 15px;
            background: #1877F2;
            color: #FFFFFF;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: normal;
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            text-decoration-line: none;
        }
    }

    button{
        cursor: pointer;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
    @media (max-width: 800px) {
        width: 100vw;
        form{
            width: 100vw;
            padding: 25px;
            margin-bottom: -25px;
        }
    }
`;
