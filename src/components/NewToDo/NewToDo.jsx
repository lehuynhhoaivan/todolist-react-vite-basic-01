import styles from './NewToDo.module.css'

const NewToDo = () => {
    const handleOnClick = () => {
        alert('Add todo clicked')
    }

    const handleOnChange = (name) => {
        console.log('Input changed', name)
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
        </div>
    )
}

export default NewToDo