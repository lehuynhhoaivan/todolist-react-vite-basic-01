import styles from './NewToDo.module.css'

const NewToDo = () => {
    const handleOnClick = () => {
        alert('Add todo clicked')
    }

    const handleOnChange = (event) => {
        console.log('Input changed', event.target.value)
    }
    return (
        <div className='new-todo'>
            <input 
            type='text' 
            placeholder='Enter your work ...' 
            onChange={handleOnChange}
            />
            <button 
            className={ styles.btnAdd }
            onClick={handleOnClick}
            >Add</button>
        </div>
    )
}

export default NewToDo