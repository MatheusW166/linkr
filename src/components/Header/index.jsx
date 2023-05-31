import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context';
import { TitleH1Styled, UserAvatarStyled } from '../../styled';
import { HeaderStyled, OutButton, UserDropdownStyled } from './styled';

export default function Header() {
  const navigate = useNavigate();
  const [logOutButton, setLogOutButton] = useState(false);

  const { token } = useContext(Context);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = 'http://localhost:5000';

  function logOut() {
    const promise = axios.delete(`${url}/log-out`, {}, config);

    promise
      .then(() => {
        navigate('/');
        localStorage.removeItem('token');
      })
      .catch(() => {
        navigate('/');
        localStorage.removeItem('token');
      });
  }

  return (
    <>
      <HeaderStyled>
        <TitleH1Styled>linkr</TitleH1Styled>
        <UserDropdownStyled onClick={() => setLogOutButton(!logOutButton)}>
          {logOutButton === false ? (
            <MdKeyboardArrowDown />
          ) : (
            <MdKeyboardArrowUp />
          )}
          <UserAvatarStyled
            src="https://t.ctcdn.com.br/zchZha9msNRJoTyopHRHTgEJ5Iw=/1056x594/smart/i603337.jpeg"
            alt="avatar"
          />
        </UserDropdownStyled>
      </HeaderStyled>
      {logOutButton === false ? null : (
        <OutButton onClick={() => logOut()}>
          Log Out
        </OutButton>
      )}
    </>
  );
}
