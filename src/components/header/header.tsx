import { Header as HeaderDiv } from "./styled";
import { HeaderImg } from "./headerImg";
import { HeaderText } from "./headerText";

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderImg />
      <HeaderText />
    </HeaderDiv>
  );
};
