import { useState } from 'react'
import styles from './NewToDo.module.css'

const NewToDo = (props) => {
    const { addNewTodo } = props;
    // useState hook
    // const valueInput = 'vango'
    const [valueInput, setValueInput] = useState('vango')

    const handleOnClick = () => {
        // console.log('Output', valueInput)
       addNewTodo(valueInput)
       setValueInput('')
       alert(`Add todo clicked ${valueInput}`)
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
            value={valueInput}
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