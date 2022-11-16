import styled from '@emotion/styled';

const Checkboxes = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 493px;

  @media (max-width: 768px) {
    width: 323px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 400px;
    padding: 0;

    @media (max-width: 768px) {
      min-width: 240px;
    }
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .aside {
    color: #ccc;
  }

  input {
    position: relative !important;
    appearance: none;
    margin: 8px;
    box-sizing: content-box;
    overflow: hidden;
    cursor: pointer;

    // circle
    &:before {
      content: '';
      display: block;
      box-sizing: content-box;
      width: 16px;
      height: 16px;
      border: 2px solid #ccc;
      transition: 0.2s border-color ease;
    }

    &:checked:before {
      border-color: #a3ffae;
      transition: 0.5s border-color ease;
    }

    &:disabled:before {
      border-color: #ccc;
      background-color: #ccc;
    }

    // dot
    &:after {
      content: '';
      display: block;
      position: absolute;
      box-sizing: content-box;
      top: 50%;
      left: 50%;
      transform-origin: 50% 50%;
      background-color: #a3ffae;
      width: 16px;
      height: 16px;
      border-radius: 100vh;
      transform: translate(-50%, -50%) scale(0);
    }

    &[type='radio'] {
      &:before {
        border-radius: 100vh;
      }

      &:after {
        width: 16px;
        height: 16px;
        border-radius: 100vh;
        transform: translate(-50%, -50%) scale(0);
      }

      &:checked:after {
        animation: toggleOnRadio 0.2s ease forwards;
      }
    }

    &[type='checkbox'] {
      &:before {
        border-radius: 16px / 4;
      }

      &:after {
        width: 16px * 0.6;
        height: 16px;
        border-radius: 0;
        transform: translate(-50%, -85%) scale(0) rotate(45deg);
        background-color: transparent;
        box-shadow: 4px 4px 0px 0px #a3ffae;
      }

      &:checked:after {
        animation: toggleOnCheckbox 0.2s ease forwards;
      }
    }

    &[type='checkbox'].filled {
      &:before {
        border-radius: 16px / 4;
        transition: 0.2s border-color ease, 0.2s background-color ease;
      }

      &:checked:not(:disabled):before {
        background-color: #a3ffae;
      }

      &:not(:disabled):after {
        box-shadow: 4px 4px 0px 0px white;
      }
    }
  }

  @keyframes toggleOnCheckbox {
    0% {
      opacity: 0;
      transform: translate(-50%, -85%) scale(0) rotate(45deg);
    }

    70% {
      opacity: 1;
      transform: translate(-50%, -85%) scale(0.9) rotate(45deg);
    }

    100% {
      transform: translate(-50%, -85%) scale(0.8) rotate(45deg);
    }
  }

  @keyframes toggleOnRadio {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }

    70% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.9);
    }

    100% {
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
`;

export default Checkboxes;
