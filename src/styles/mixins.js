// src/styles/mixins.js
import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  bigButton: css`
    display: inline-block;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    background-color: var(--green);
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-family: var(--font-mono);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00ff9f;
    }
  `,
};

export default mixins;
