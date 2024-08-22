import { Header } from './component/Header';
import { Content } from './component/Content';
import { InsertBar } from './component/InsertBar';

import  styles  from './App.module.css';
import './global.css';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState<string[]>([]);


  function handleAddTask(newTask: string) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskToDelete: string) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }

  return (
    <div>
      <header className={styles.headerComponent}>
        <Header />
      </header>
      <div className={styles.insertBar}>
        <InsertBar onAddTask={handleAddTask}/>
      </div>
      <main className={styles.mainClass}>
        <Content tasks={tasks} onDeleteTask={handleDeleteTask}/>
      </main>
      <footer className={styles.footerContainer}>

      </footer>
    </div>
  )
}

export default App
