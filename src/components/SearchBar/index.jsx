import React, { useState, useRef } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';
import styled from 'styled-components';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([]);
  const userRef = useRef(null);
  const userSearchRef = useRef(null);

  async function research(e) {
    setSearchValue(e.target.value);

    if (e.target.value.length < 3) {
      return;
    }

    const params = { params: { name: e.target.value } };

    const url = `${process.env.REACT_APP_API_URL}/search/user`;

    axios.get(url, params)
      .then((res) => {
        setUsers(res.data);
      }).catch(() => {
        setSearchValue('');
      });
  }

  return (
    <DebounceInput
          // eslint-disable-next-line no-use-before-define
      element={StyledInput}
      type="text"
      placeholder="Search for people"
      minLength={3}
      debounceTimeout={300}
      onChange={(e) => research(e)}
      inputRef={userSearchRef}
    />
  );
}

const StyledInput = styled.input``;
