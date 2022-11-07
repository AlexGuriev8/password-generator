import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const PasswordStrength = styled.div`
  display: flex;
  align-items: center;
  background-color: #191820;
  height: 72px;
  width: 446px;
  margin: 10px auto;
  padding: 5px 25px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 260px;
  }

  .strength-wrapper {
    display: flex;
  }
`;
const GenerateWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #191820;
  height: 72px;
  width: 446px;
  margin: 10px auto;
  padding: 5px 25px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 260px;
  }

  .generate-button {
    border: 2px solid hsl(127deg, 100%, 82%);
    background: hsl(248deg, 15%, 11%);
    color: #a3ffae;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    width: 100%;
    height: 70%;

    &:disabled {
      background: #ccc;
      color: #000;
      border: none;
      cursor: not-allowed;
    }
  }
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 540px;
  padding: 20px;
  background-color: #23222a;

  @media (max-width: 768px) {
    width: 323px;
  }

  .character-length {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 493px;

    @media (max-width: 768px) {
      width: 311px;
    }

    .character-length-value {
      color: #a3ffae;
      font-size: 21px;
    }
  }

  .range {
    width: 493px;
    height: 17px;
    -webkit-appearance: none;
    background: #111;
    outline: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
    margin-top: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 311px;
    }
  }
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #a3ffae;
    border: 4px solid #333;
    box-shadow: -407px 0 0 400px #a3ffae;
  }
`;

const Header = styled.h1`
  color: #807c92;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`;

const Password = styled.div`
  height: 64px;
  width: 540px;
  background-color: #23222a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 323px;
  }

  .password-text {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #e7e6eb;
  }

  .opacity {
    opacity: 0.25;
  }

  svg {
    cursor: pointer;
    fill: #a3ffae;
  }

  .copy {
    display: flex;
    align-items: center;
  }

  .copy-button {
    background-color: #23222a;
    border: none;
  }
`;

export {
  StyledContainer,
  Header,
  Password,
  BodyContent,
  PasswordStrength,
  GenerateWrapper,
};
