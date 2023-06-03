import React, { useContext, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
      <div>
        <HeaderStyled>
          <TitleH1Styled>linkr</TitleH1Styled>
          <DesktopSearchBarDisplay>
            <SearchBar />
          </DesktopSearchBarDisplay>
          <UserDropdownStyled onClick={() => setLogOutButton(!logOutButton)}>
            {logOutButton === false ? (
              <MdKeyboardArrowDown />
            ) : (
              <MdKeyboardArrowUp />
            )}
            <UserAvatarStyled src={user?.photo} alt="avatar" />
          </UserDropdownStyled>
        </HeaderStyled>
        {logOutButton === false ? null : (
          <OutButton onClick={() => logOut()}>Log Out</OutButton>
        )}
      </div>
      <MobileSearchBarDisplay>
        <MobileAbsolute>
          <SearchBar />
        </MobileAbsolute>
      </MobileSearchBarDisplay>
    </>
  );
}

const DesktopSearchBarDisplay = styled.div`
  width: 563px;
  @media (max-width: 850px) {
    display: none;
  }
`;

const MobileSearchBarDisplay = styled.div`
  position: relative;
`;

const MobileAbsolute = styled.div`
  top: 82px;
  position: absolute;
  width: 100%;
  @media (min-width: 850px) {
    display: none;
  }
`;
