import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LoaderStyled } from '../../styled';

export function ScrollIndicator({ onIntersection, loader }) {
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

  return <IndicatorStyled id="indicator">{loader}</IndicatorStyled>;
}

export default function InfiniteScroll({
  dataLength,
  loadingNewData,
  hasMoreData = true,
  fetch,
}) {
  if (!dataLength || !hasMoreData) {
    return null;
  }

  return (
    <ScrollIndicator
      onIntersection={fetch}
      loader={loadingNewData && <LoaderStyled />}
    />
  );
}

const IndicatorStyled = styled.div`
  background-color: transparent;
  position: relative;
  width: 100%;
  height: 50px;

  span {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    border-width: 4px;
  }
`;
