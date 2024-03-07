import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import AddCosts from "./AddCosts";
import List from "./List";
import InitialBudget from "./InitialBudget";

interface MainContentProps {}
const MainContent: FC<MainContentProps> = ({}) => {
  const { isBudget } = useAppSelector((state) => state.budget);
  return (
    <>
      {isBudget ? (
        <section className="contenido-principal">
          <div className="row">
            <div className="col ">
              <AddCosts />
            </div>

            <div className="col">
              <List />
            </div>
          </div>
        </section>
      ) : (
        <InitialBudget />
      )}
    </>
  );
};

export default MainContent;
