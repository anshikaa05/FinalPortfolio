// src/styles/theme.js
import { css } from "styled-components";

const theme = {
  mixins: {
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
      font-family: var(--font-mono);
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #00ff9f;
      }
    `,
  },
};

export default theme;
