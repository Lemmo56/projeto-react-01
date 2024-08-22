import styles from './HeaderContent.module.css';



export function HeaderContent({ tasksSize, completedTasksSize }: {tasksSize: number, completedTasksSize: number}) {
    return (
        <div className={styles.headerContent}>
            <div className={styles.headerContainer}>
                <span className={styles.fontContentCreate}>Tarefas criadas </span>
                <span className={styles.circleContainer}>{tasksSize}</span>
            </div>
            <div className={styles.headerContainer}>
                <span className={styles.fontContentDone}>Concluídas </span>
                <span className={styles.circleContainer}>{completedTasksSize}</span>
            </div>
        </div>
    );
}