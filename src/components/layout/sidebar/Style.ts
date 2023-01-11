import styled from "styled-components";
import { color } from "../../../styles/theme";

export const Menu = styled.menu``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: ${color.origin.offsetBackground};

  width: 300px;
  height: 100vh;
`;

export const ToggleButton = styled.button<{ isHidden: boolean }>`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
`;
