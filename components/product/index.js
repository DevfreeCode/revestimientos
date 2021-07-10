import styles from './Product.module.css'

export default function Product (){
    return(
        <section>
             <section className={styles.Product}>
                <section className={styles.Product_picture}>
                    <img className={styles.Product_img} src="/product.png" alt="Revestimiento plastico"/>
                </section>
                <section className={styles.Product_text}>
                    <h2 className={styles.Product_title}>Revestimiento Plástico Texturado</h2>
                    <h3 className={styles.Product_description}>Descripción</h3>
                    <p className={styles.Product_paragraph}>Revestimiento Plástico Texturado Vetex para interiores o exteriores impermeable. Revestimiento lavable, cubre 12 mts2 por litro y se recomienda dar 2 manos de producto. Su aplicación es con pincel, rodillo o soplete.</p>
                    <div className={styles.Product_price}><span className="Product_price_1">$6500</span></div>
                </section>
            </section>
            <section className={styles.Product_datasheet}>
                <h3 className={styles.Product_datasheet_title}>Ficha técnica</h3>
                <table className={styles.Product_datasheet_table}>
                    <tr>
                        <td>Producto</td>
                        <td>Revestimiento plástico</td>
                    </tr>
                    <tr>
                        <td>Capacidad</td>
                        <td>25Lt</td>
                    </tr>
                    <tr>
                        <td>Ambiente</td>
                        <td>Exterior/Interior</td>
                    </tr>
                    <tr>
                        <td>Superficie</td>
                        <td>Paredes</td>
                    </tr>
                    <tr>
                        <td>Rendimiento (M2 / Lt x mano)</td>
                        <td>12 aprox</td>
                    </tr>
                    <tr>
                        <td>Aplicación</td>
                        <td>Rodillo de lana / pincel / pistola convencional</td>
                    </tr>
                </table>
            </section>
        </section>
    )
}