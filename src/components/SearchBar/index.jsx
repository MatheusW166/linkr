/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [form, setForm] = useState('');
  const [users, setUsers] = useState([]);
  const searchRef = useRef(null);

  const navigate = useNavigate();

  async function searchUsers(e) {
    setForm(e.target.value);

    if (e.target.value.length < 3) {
      return;
    }

    const params = { params: { name: e.target.value } };

    const url = `${process.env.REACT_APP_API_URL}/search/user`;

    axios
      .get(url, params)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        setForm('');
      });
  }

  function searchResultsPosition() {
    const userRect = searchRef.current.getBoundingClientRect();
    const top = userRect.bottom - 7;
    const { left } = userRect;
    const { width } = userRect;
    const position = 'absolute';
    const backgroundColor = 'white';
    const borderRadius = '5px';
    const border = 'solid 1px rgba(0, 0, 0, 0.1)';
    return {
      top,
      left,
      width,
      position,
      backgroundColor,
      borderRadius,
      border,
    };
  }

  return (
    <SearchBarContainer>
      <DebounceInput
        // eslint-disable-next-line no-use-before-define
        element={StyledInput}
        type="text"
        placeholder="Search for people &#128269;"
        minLength={3}
        debounceTimeout={300}
        onChange={(e) => searchUsers(e)}
        inputRef={searchRef}
      />
      {users.length > 0 && form.length !== 0 ? (
        <div style={{ ...searchResultsPosition() }}>
          <ul>
            {users.map((user) => (
              <Item
                key={user.id}
                onClick={() => {
                  navigate(`/user/${user.id}`);
                }}
              >
                <img src={user.photo} alt={user.name} />
                <p>{user.name}</p>
              </Item>
            ))}
          </ul>
        </div>
      ) : undefined}
    </SearchBarContainer>
  );
}

const StyledInput = styled.input`
  z-index: 1;
  width: 563px;
  height: 45px;
  background: #ffffff;
  border-radius: 8px;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #C6C6C6;
  padding-left: 10px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  padding-left: 10px;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  img {
    width: 39px;
    height: 39px;
    border-radius: 60px;
    border: solid 1px;
    object-fit: cover;
  }
  p {
    color: black;
  }
`;
