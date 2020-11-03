import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: 0.8s;
    color: #312e38;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 8px 8px 0 8px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
