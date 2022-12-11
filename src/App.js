import Modal from "./components/Modal";
import Title from "./components/Title";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo__wrapper">
        <Todo
          title='Finish FES'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
        />
        <Todo
          title='Finish Interview Section'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
        />
        <Todo
          title='Land a thing'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"

        />
      </div>
      {/* <Modal
      modalPara="Are you sure?"
      /> */}
    </div>
  );
}

export default App;
