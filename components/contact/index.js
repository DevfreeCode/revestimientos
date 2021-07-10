import styles from './Contact.module.css'

export default function Contact (){
    return(
        <section className={styles.Contact}>
        <section className={styles.Contact_picture}>
            <img className={styles.Contact_img} src="/contact.png" alt="imagen de contactenos"/>
        </section>
        <section className={styles.Contact_information}>
            <div className={styles.Contact_sub_information}>
                <h2 className={styles.Contact_title}>Contactanos!</h2>
                <div className={styles.Contact_container}>
                    <i className="fas fa-phone-alt Contact_icons"></i>
                02320-457690</div>   
                <div className={styles.Contact_container}>   
                    <i className="fas fa-envelope  Contact_icons"></i>
                revestimientostyle@gmail.com</div>    
                <div className={styles.Contact_container}>
                    <i className="fab fa-facebook-square  Contact_icons"></i>
                Revestimientos Style</div>  
                <div className={styles.Contact_container}>
                    <i className="fab fa-instagram  Contact_icons"></i>
                Revestimiento_official</div>  
            </div>
        </section>
    </section>
    )
}