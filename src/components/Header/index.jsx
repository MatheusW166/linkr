import React, { useContext, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context';
import client from '../../services/api/api.client';
import { TitleH1Styled, UserAvatarStyled } from '../../styled';
import { HeaderStyled, OutButton, UserDropdownStyled } from './styled';
import SearchBar from '../SearchBar/index';

export default function Header() {
  const navigate = useNavigate();
  const [logOutButton, setLogOutButton] = useState(false);
  const { user } = useContext(Context);

  function logOut() {
    const promise = client.delete('/log-out', {});

    promise
      .then(() => {
        navigate('/');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      })
      .catch(() => {
        navigate('/');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      });
  }

  return (
    <>
      <HeaderStyled>
        <TitleH1Styled>linkr</TitleH1Styled>
        <SearchBar />
        <UserDropdownStyled onClick={() => setLogOutButton(!logOutButton)}>
          {logOutButton === false ? (
            <MdKeyboardArrowDown />
          ) : (
            <MdKeyboardArrowUp />
          )}
          <UserAvatarStyled
            src={user?.photo}
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
