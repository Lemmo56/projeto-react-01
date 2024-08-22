import styles from './InsertBar.module.css'
import plus from './../assets/plus.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

export function InsertBar({ onAddTask }: {onAddTask: (newTask: string) => void}) {

    const [newTask, setNewTask] = useState<string>('');

    function handleInsertNewTask(event: FormEvent){
        event.preventDefault();
        if(newTask.trim())
        onAddTask(newTask.trim());
        setNewTask('');
    }

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>){
        setNewTask(event?.target.value);
    }

    return (
        <div>
            <form  style={{ display: 'flex' }} onSubmit={handleInsertNewTask}>
                <input
                    className={styles.InsertBar}
                    type="text"
                    placeholder="Adicione um nova tarefa"
                    onChange={handleTaskChange}
                    value={newTask}
                />
                <button className={styles.criarButton} type='submit'>
                    Criar <img className={styles.plus} src={plus} alt="Plus" />
                </button>
            </form>    
        </div>
    );
}