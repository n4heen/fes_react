import Title from "./components/Title";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="App">
      <Title />
      <Todo
        header='Finish FES'
      />
      <Todo
        header='Finish Interview Section'
      />
      <Todo
        header='Land a thing'
      />

    </div>
  );
}

export default App;
