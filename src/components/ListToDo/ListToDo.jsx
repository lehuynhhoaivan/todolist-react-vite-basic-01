import styles from './ListToDo.module.css'

const ListTodo = (props) => {
    // Cách 1
    const { todoList } = props;
    console.log('ListTodo props:', todoList)
    // Cách 2
    // const todoList = props.todoList;
    console.log('ListTodo props:', todoList)
    return (
        <ul className={ styles.listTodo }>
            
                {todoList.map((item, index) => { // Vẫn có thể dùng index làm key nếu không có id
                    console.log('>>> Check map itm:', item, index)
                    return (
                        <li key={item.id}>
                            {/* <div>vango</div> */}
                            <div>{item.name}</div>
                            <button>Delete</button>
                        </li>
                    )
                })}
            
            {/* <li>Learn React</li> */}
            <li>
                {JSON.stringify(props.todoList)}
            </li>
        </ul>
    )
}

export default ListTodo