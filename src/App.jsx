import InputGroup from "./components/InputGroup";
import Button from "./components/Inputs/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import generateOutputData from "./components/helper/generateOutputData";

function App() {
  const [inputGroups, setInputGroups] = useState([]);

  const onHandleChangeInputGroup = (idSelected, newData) => {
    setInputGroups((prev) => {
      const index = prev.findIndex(({ id }) => id === idSelected);
      prev[index].data = newData;
      return prev;
    });
  };

  const onHandleCreate = () => {
    setInputGroups((prev) => [...prev, { id: uuid(), data: {} }]);
  };

  const onHandleDelete = (idSelected) => {
    setInputGroups((prev) => prev.filter(({ id }) => id !== idSelected));
  };

  const onHandleSave = () => {
    const outputdata = generateOutputData(inputGroups);
    console.log(outputdata);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col my-12 gap-4">
        <div className="flex gap-16">
          <Button
            classname="px-4 max-w-[200px] py-6 font-bold text-white rounded-md bg-blue-600"
            text="Adicionar itens"
            onHandleClick={onHandleCreate}
          />
          {inputGroups.length ? (
            <Button
              classname="px-4 max-w-[200px] py-6 font-bold text-white rounded-md bg-green-600"
              text="Salvar items"
              onHandleClick={onHandleSave}
            />
          ) : null}
        </div>
        {inputGroups.map((inputGroup) => (
          <InputGroup
            key={inputGroup.id}
            onHandleDelete={() => onHandleDelete(inputGroup.id)}
            onHandleChange={(data) =>
              onHandleChangeInputGroup(inputGroup.id, data)
            }
          />
        ))}
      </div>
    </>
  );
}

export default App;
