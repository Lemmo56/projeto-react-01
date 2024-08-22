import styles from './EmptyContent.module.css';
import clipBoard from './../../assets/Clipboard.svg'


export function EmptyContent() {
    return (
        <div className={styles.content}>
            <div className={styles.contentContainer}>
                <img className={styles.imgContainer} src={clipBoard} alt='Clip Board' />
                <span className={styles.spanContainer}>
                    <span><strong>Você ainda não tem tarefas cadastradas</strong></span><br />
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </span>
            </div>
        </div>
    );
}