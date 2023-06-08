import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function ScrollIndicator({ onIntersection }) {
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

  return <IndicatorStyled id="indicator" />;
}

const IndicatorStyled = styled.div`
  background-color: transparent;
  width: 100%;
  height: 50px;
`;
