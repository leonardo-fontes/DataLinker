import Button from "./Inputs/Button";
import Select from "./Inputs/Select";
import Input from "./Inputs/Input";
import { inputList } from "../json/lista-input.json";
import { data as functionList } from "../json/lista-funcoes.json";
import { useMemo, useState, useEffect } from "react";

//parametros = supportedDataTypes
//funcao = data.name
//input = inputlist.filename

function InputGroup({ onHandleDelete, onHandleChange }) {

  //criando o estado "data" 
  const [data, setData] = useState({
    function: functionList[0].name,
    fileName: inputList[0].fileName,
    param: functionList[0].supportedValueTypes[0],
    column: inputList[0].columns[0].columnName,
    literalValue: "",
  });

  //funcao que muda o valor de uma unica propriedade do data 
  const handleChange = (dataProp, value) => {
    setData((prev) => ({ ...prev, [dataProp]: value }));
  };

  //aqui pego os parametros de dentro do data
  const parametros = useMemo(() => {
    const { supportedValueTypes } = functionList.find(
      ({ name }) => name === data.function
    );
    handleChange("param", supportedValueTypes[0]);
    handleChange("literalValue", "");
    return supportedValueTypes;
  }, [data.function]);

  const columns = useMemo(() => {
    
    const dataTypes = functionList.find(({name}) => name === data.function).supportedDataTypes

    const columns = inputList
      .find(({ fileName: file }) => file === data.fileName)
      ?.columns.filter(({columnType})=> dataTypes.includes(columnType)).map(({ columnName }) => columnName);
    handleChange("column", columns[0]);
    return columns;
  }, [data.fileName, data.function]);

  useEffect(() => {
    onHandleChange(data);
  }, [data]);

  return (
    <div className="flex w-full items-center gap-20">
      <Select
        label="Escolha Input"
        onChange={(event) =>
          handleChange("fileName", event.currentTarget.value)
        }
        options={inputList.map(({ fileName }) => fileName)}
      />
      <Select
        label="Escolha uma função"
        onChange={(event) =>
          handleChange("function", event.currentTarget.value)
        }
        options={functionList.map(({ name }) => name)}
      />
      <Select
        value={data.param}
        label="Tipo de parâmetro"
        options={parametros}
        onChange={(event) => handleChange("param", event.currentTarget.value)}
      />
      {data.param == "COL" ? (
        <Select
          value={data.column}
          label="Escolha Coluna"
          options={columns}
          onChange={(event) =>
            handleChange("column", event.currentTarget.value)
          }
        />
      ) : (
        <Input
          name="literalValue"
          onChange={(event) =>
            handleChange("literalValue", event.currentTarget.value)
          }
          label={"Escreva um texto"}
        />
      )}
      <Button
        text="x"
        classname="text-white border-[1px] rounded-md px-3 self-end bg-red-600"
        onHandleClick={onHandleDelete}
      />
    </div>
  );
}

export default InputGroup;
