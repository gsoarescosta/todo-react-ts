import { useState } from "react";
import * as C from "./App.styles";
// import { Container } from './App.styles';
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Pagar a conta de luz", done: false },
    { id: 2, name: "Pagar a conta de água", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleChecked = (id: number, done: boolean) => {
    let newList = [...list];
    newList.forEach((listItem) => {
      if (listItem.id === id) {
        listItem.done = done;
      }
    });
    setList(newList);
    console.log(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>TODO List</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleChecked} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
