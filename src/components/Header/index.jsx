import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TitleH1Styled, UserAvatarStyled } from '../../styled';
import { HeaderStyled, UserDropdownStyled } from './styled';

export default function Header() {
  return (
    <HeaderStyled>
      <TitleH1Styled>linkr</TitleH1Styled>
      <UserDropdownStyled>
        <MdKeyboardArrowDown />
        <UserAvatarStyled
          src="https://t.ctcdn.com.br/zchZha9msNRJoTyopHRHTgEJ5Iw=/1056x594/smart/i603337.jpeg"
          alt="avatar"
        />
      </UserDropdownStyled>
    </HeaderStyled>
  );
}
