import { useState } from 'react'
import styles from './NewToDo.module.css'

const NewToDo = (props) => {
    const { addNewTodo } = props;
    // useState hook
    // const valueInput = 'vango'
    const [valueInput, setValueInput] = useState('vango')

    const handleOnClick = () => {
        // alert('Add todo clicked')
        // console.log('Output', valueInput)
       addNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        console.log('Input changed', name)
        setValueInput(name)
    }
    return (
        <div className='new-todo'>
            <input 
            type='text' 
            placeholder='Enter your work ...' 
            onChange={(event) => handleOnChange(event.target.value)}
            />
            <button 
            className={ styles.btnAdd }
            onClick={handleOnClick}
            >Add</button>
            <span>my text {valueInput}</span>
        </div>
    )
}

export default NewToDo