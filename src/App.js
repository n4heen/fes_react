import { useState } from "react";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Title from "./components/Title";
import Todo from "./components/Todo";


function App() {



  const [toggleModal, setToggleModal] = useState(false)



  return (
    <div className="App">
      <Counter/>
      <Title />
      <>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </>
      <div className="todo__wrapper">
        <Todo
          title='Finish FES'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
          toggleModal={toggleModal}

        />
        <Todo
          title='Finish Interview Section'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
          toggleModal={toggleModal}

        />
        <Todo
          title='Land a thing'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
          toggleModal={toggleModal}


        />
      </div>
      {toggleModal && <Modal
        modalPara="Are you sure?"
        toggleModal={toggleModal}
      />}
    </div>
  );
}

export default App;
