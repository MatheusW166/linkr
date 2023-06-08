/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import Context from '../../Context';

export default function SearchBar({ followedUsers }) {
  const [form, setForm] = useState('');
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const { token } = useContext(Context);

  async function searchUsers(e) {
    setForm(e.target.value);

    if (e.target.value.length < 3) {
      return;
    }

    const params = { params: { name: e.target.value } };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const url = `${process.env.REACT_APP_API_URL}/search/user`;

    try {
      const res = await axios.get(url, { ...config, ...params });
      setUsers(res.data);
    } catch (error) {
      setForm('');
    }
  }

  return (
    <SearchBarContainer>
      <DebounceInput
        // eslint-disable-next-line no-use-before-define
        element={StyledInput}
        type="text"
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        onChange={(e) => searchUsers(e)}
        data-test="search"
      />
      <GlassEmoji>
        <HiMagnifyingGlass />
      </GlassEmoji>
      {users.length > 0 && form.length !== 0 ? (
        <SearchResultsBox>
          <ul>
            {users.map((user) => (
              <Item
                key={user.id}
                onClick={() => {
                  navigate(`/user/${user.id}`);
                }}
                data-test="user-search"
              >
                <img src={user.photo} alt={user.name} />
                <p>
                  {user.name}
                </p>
                {followedUsers.some((f) => f.followerId === user.id) === true ? <span>• following</span> : '' }
              </Item>
            ))}
          </ul>
        </SearchResultsBox>
      ) : undefined}
    </SearchBarContainer>
  );
}

const GlassEmoji = styled.div`
  position: absolute;
  right: 13px;
  top: 15px;
  color: black;
`;

const StyledInput = styled.input`
  width: inherit;
  height: 45px;
  background: #ffffff;
  border-radius: 8px;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #C6C6C6;
  padding-left: 10px;
`;

const SearchResultsBox = styled.div`
  position: absolute;
  width: inherit;
  border-radius: 8px;
  background-color: #E7E7E7;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  position: relative;
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
    border-radius: 8px;
  }
  img {
    width: 39px;
    height: 39px;
    border-radius: 60px;
    border: solid 1px;
    object-fit: cover;
  }
  p {
    color: #515151;
  }

  span {
    color: #C5C5C5;
  }
`;
