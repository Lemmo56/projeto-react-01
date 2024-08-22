import styles from './Content.module.css'
import { HeaderContent } from './contentComponent/HeaderContent';
import { EmptyContent } from './contentComponent/EmptyContent';
import { MainContent } from './contentComponent/MainContent';
import { useState } from 'react';

export function Content({ tasks, onDeleteTask }: { tasks: string[], onDeleteTask: (task: string) => void }) {

    const [completedTasks, setCompletedTasks] = useState<string[]>([]);

    function handleCompletedTask(task: string){
        setCompletedTasks(prevCompletedTasks => 
            prevCompletedTasks.includes(task) ? prevCompletedTasks.filter(t => t !== task) : [...prevCompletedTasks, task]
        );
    }

    function handleDeleteCompletedTask(taskToDelete: string){
        setCompletedTasks(prevCompletedTasks => prevCompletedTasks.filter(t => t !== taskToDelete));
    }

    return (
        <div className={styles.content}>
            <header className={styles.headerContainer}>
                <HeaderContent 
                    tasksSize={tasks.length}
                    completedTasksSize={completedTasks.length}
                />
            </header>
            <div className={styles.mainContainer}>
                {
                    tasks.length === 0 ? (
                    <EmptyContent />
                    ) : ( 
                    tasks.map((task) => (
                        <MainContent 
                            key={task} 
                            task={task} 
                            onDeleteTask={onDeleteTask} 
                            onDeleteCompletedTask={handleDeleteCompletedTask}
                            completedTask={handleCompletedTask}
                            isCompleted={completedTasks.includes(task)} 
                        /> 
                    )))
                }
            </div>
        </div>
    );
}