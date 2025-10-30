import styles from './ListToDo.module.css'

const ListTodo = (props) => {
    const { todoList } = props;
    return (
        <ul className={ styles.listTodo }>
            <li>Learn React</li>
            <li>
                {JSON.stringify(props.todoList)}
            </li>
        </ul>
    )
}

export default ListTodo