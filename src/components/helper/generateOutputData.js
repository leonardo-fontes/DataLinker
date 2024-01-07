import { inputList } from "../../json/lista-input.json";
import { v4 as uuid } from "uuid";

export default (oldData) => {
  const cells = oldData.map(
    ({
      id,
      data: {
        function: functionValue,
        param,
        fileName,
        column: columnValue,
        literalValue,
      },
    }) => {
      const newData = {
        id,
        functionName: functionValue,
        param: {
          type: param,
        },
      };
      if (param === "COL") {
        const column = inputList
          .find(({ fileName: file }) => file === fileName)
          .columns.find(({ columnName }) => columnValue === columnName);
        newData.param.column = column;
      } else {
        newData.param.literalValue = literalValue;
      }
      return newData;
    }
  );

  return { outputdata: { id: uuid(), cells } };
};
