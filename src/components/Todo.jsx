import './Todo.css'

export default function Todo(props) {

    return (
        <div className='todo'>
            <h2>{props.title}</h2>

            <button onClick={props.deleteToDo}>Delete</button>
        </div>
    )
}
