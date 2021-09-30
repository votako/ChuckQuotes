import { Body as BodyDiv, Categories, Main as MainDiv } from "./styled";
import Joke from "../../components/joke";
import Category from "../../components/caregory";
import Header from "../../components/header";
import useMainState from "./state";

export const Main = () => {
  const { State, setJoke, getData } = useMainState();
  const changeJoke = (val: string) => setJoke(val);

  if (!State.isLoaded) {
    getData();
    return "Loading";
  }
  return (
    <MainDiv>
      <Header />
      <BodyDiv>
        <Categories>
          {State.categories.map((el, index) => (
            <Category click={() => changeJoke(el)} name={el} key={index + 1} />
          ))}
          <Category
            click={() => changeJoke("random")}
            name={"random"}
            key={0}
          />
        </Categories>
        <Joke value={State.joke} />
      </BodyDiv>
    </MainDiv>
  );
};
