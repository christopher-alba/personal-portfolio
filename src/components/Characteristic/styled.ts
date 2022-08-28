import styled from "styled-components";
import { ReactComponent as Spaceship } from "../../svg/spaceship2.svg";

export const SpaceshipStyled = styled(Spaceship)`
  color: ${({ theme }) => theme.colors.primaryLight};
  width: 40%;
  height: auto;
  filter: drop-shadow(0 5px 0 ${({ theme }) => theme.colors.tertiary}) drop-shadow(0 5px 0 ${({ theme }) => theme.colors.secondary});
`;

export const CharacteristicDiv = styled("div")`
  width: 300px;
  position: relative;
  text-align: center;
  padding: 20px;
  flex-grow: 1;
  margin: 20px;
`;

export const Characteristics = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Heading = styled("h1")`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.3rem;
  font-weight: 900;
`;
