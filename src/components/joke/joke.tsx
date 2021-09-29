import { Joke as JokeDiv } from './styled'

export const Joke = (props: any) => {
    return (
        <JokeDiv>
            {props.value}
        </JokeDiv>
    )
}