import styles from './MainContent.module.css';
import { Trash } from 'phosphor-react';



export function MainContent({ task, onDeleteTask, completedTask, isCompleted, onDeleteCompletedTask }: { task: string, completedTask: (task: string) => void, onDeleteTask: (task: string) => void, isCompleted: boolean, onDeleteCompletedTask: (task:string) => void }) {

    function handleDelete(){
        onDeleteTask(task);
        onDeleteCompletedTask(task);
    }



    return (
        <div className={styles.mainContainer}>
            <label className={styles.checkboxContainer}>
                <input type="checkbox" onClick={() => completedTask(task)} className={styles.checkboxRounded}></input>
                <span className={styles.checkmark}></span>
            </label>
            <span className={`${styles.textContainer}   ${isCompleted ? styles.completedTask : ''}`} >{task}</span>
            <button onClick={handleDelete} title='Deletar Task'>
                <Trash size={16}/>
            </button>
        </div>
    );
}