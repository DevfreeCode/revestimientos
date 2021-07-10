import Services from 'components/services'
import styles from './ServicesList.module.css'

export default function ServicesList (){
    return(
        <section className={styles.ServiceList}>
           
           <Services title='Promociones bancarias'
                    description='10% descuento con visa' 
                    class='fas fa-wallet'></Services>

            <Services title='Puntos de encuentros'
                                description='Coordinamos el encuentro en lugar claves' 
                                class='fas fa-map-marker-alt'></Services>

            <Services title='Envio a domicilio'
                                description='Envíos a todo el país' 
                                class='fas fa-shipping-fast'></Services>
        </section>
    )
}