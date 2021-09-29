import { HeaderName } from "./constants"
import { HeaderText as HeaderTextDiv } from "./styled";

export const HeaderText = () => {
    return (
        <HeaderTextDiv>
            {HeaderName}
        </HeaderTextDiv>
    )
}