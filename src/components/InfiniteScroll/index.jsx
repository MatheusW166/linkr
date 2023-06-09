import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LoaderStyled } from '../../styled';

export function ScrollIndicator({ onIntersection, loader, message }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const indicator = entries[0];
      if (!indicator.isIntersecting) return;
      if (!onIntersection) return;
      onIntersection();
    });
    observer.observe(document.querySelector('#indicator'));
    return () => observer.disconnect();
  }, []);

  return (
    <IndicatorStyled id="indicator">
      {loader}
      {message && <p>{message}</p>}
    </IndicatorStyled>
  );
}

export default function InfiniteScroll({
  dataLength,
  loadingNewData,
  hasMoreData = true,
  message,
  fetch,
}) {
  if (!dataLength || !hasMoreData) {
    return null;
  }

  return (
    <ScrollIndicator
      onIntersection={fetch}
      loader={loadingNewData && <LoaderStyled />}
      message={loadingNewData && message}
    />
  );
}

const IndicatorStyled = styled.div`
  background-color: transparent;
  position: relative;
  width: 100%;
  height: 75px;
  color: #6d6d6d;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  span {
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 36px;
    border-color: #6d6d6d;
    border-bottom-color: transparent;
    border-width: 3px;
  }
`;
