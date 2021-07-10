import React from 'react';
import Head from 'next/head';

import common_styles from 'styles/Common.module.css';
import styles from 'styles/Home.module.css';

import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Bootcamp from 'components/bootcamp';
import ServicesList from 'components/services-list';
import Contact from 'components/contact';
import Product from 'components/product';

export default function Home() {
  return ( <React.Fragment>
    <Navbar></Navbar>
    <div className={common_styles.container}>
      
      <Head>
        <title>Revestimientos vetex</title>
        <link rel="icon" type="ico" href="favicon.ico"/>
        <meta name="description" content="Revestimientos vetex - revestimiento Plástico Texturado Vetex para interiores o exteriores impermeable. Revestimiento lavable, cubre 12 mts2 por litro y se recomienda dar 2 manos de producto. Su aplicación es con pincel, rodillo o soplete."/>
        <meta property="og:title" content="Revestimientos vetex"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:description" content="Venta de revestimiento Plástico Texturado Vetex para interiores o exteriores impermeable. Revestimiento lavable, cubre 12 mts2 por litro y se recomienda dar 2 manos de producto. Su aplicación es con pincel, rodillo o soplete." />
      </Head>

      <main className={common_styles.main}>

        <section className={common_styles.main_header}>
        </section>
        
        <ServicesList></ServicesList>

        <section className={styles.main_what_do}>
          <h2 className={styles.subtitle}>Producto</h2>      
          <Product></Product>
        </section>
        
      </main>

      <Bootcamp></Bootcamp>

      <Contact></Contact>

      <Footer></Footer>
    </div>
    </React.Fragment>
  )
}
