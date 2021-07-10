import styles from './Services.module.css'

export default function Services (props){
    return(
        <section className={styles.Services} >
            <section className={styles.Services_picture}>
                <i className={props.class} />
            </section>
            <section className={styles.Services_info}>
                <span className={styles.Services_title}>{props.title}</span>
                <span className={styles.Services_description}>{props.description}</span>
            </section>
        </section>
    )
}