import styled from "styled-components";

export default styled("div")`
  width: 80%;
  margin: 0 auto;
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;
