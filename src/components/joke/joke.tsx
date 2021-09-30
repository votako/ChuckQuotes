import { Joke as JokeDiv } from "./styled";

export const Joke = (props: { value: string }) => {
  return <JokeDiv>{props.value}</JokeDiv>;
};
