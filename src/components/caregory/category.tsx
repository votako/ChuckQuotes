import { Category as CategoryDiv } from "./styled";

interface CategoryTypes {
  click: () => void;
  name: string;
}

export const Category = (props: CategoryTypes) => {
  return <CategoryDiv onClick={props.click}>{props.name}</CategoryDiv>;
};
