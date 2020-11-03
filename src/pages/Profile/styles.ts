import styled, { keyframes } from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;

      a,
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        transition: 0.5s;

        &:hover {
          border-radius: 50px;
          background: #99959114;

          svg {
            color: ${lighten(0.2, '#999591')};
          }
        }

        svg {
          color: #999591;
        }
      }

      a {
        svg {
          width: 24px;
          height: 24px;
        }
      }

      button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  margin: -176px 0 auto;
  width: 100%;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromTop} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    > div:nth-of-type(4) {
      margin-top: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#ff9000')};

      svg {
        color: ${lighten(0.2, '#312e38')};
      }
    }

    > input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;
