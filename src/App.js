import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Title from "./components/Title";
import Todo from "./components/Todo";


function App() {

  const [toggleModal, setToggleModal] = useState(false)

  function deleteToDo() {
    setToggleModal(true)
    console.log('egg')
  }

  function cancel() {
    setToggleModal(false)
  }

  useEffect(() => {

  }, [])


  return (
    <div className="App">

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
          deleteToDo={deleteToDo}

        />
        <Todo
          title='Finish Interview Section'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
          deleteToDo={deleteToDo}

        />
        <Todo
          title='Land a thing'
          para="Join a dynamically growing hacking community and take your cybersecurity skills to the next level through the most captivating, gamified, hands-on training experience!"
          deleteToDo={deleteToDo}


        />
      </div>
      {toggleModal && <Modal
        modalPara="Are you sure?"
        cancel={cancel}
      />}

    </div>
  );
}

export default App;
