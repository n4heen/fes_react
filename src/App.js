import Todo from "./components/Todo";


function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
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
