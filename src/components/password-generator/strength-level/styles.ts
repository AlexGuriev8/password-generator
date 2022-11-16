import styled from '@emotion/styled';

const StyledStrengthLevel = styled.div`
  width: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
`;

const StyledLevel = styled.div`
  height: 20px;
  width: 6px;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
`;

export { StyledStrengthLevel, StyledLevel };
