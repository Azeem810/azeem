import React from "react";
import Head from "next/head";
import style from "./Whatsapp.module.scss";
const Whatsapp = () => {
  return (
    <>
      <Head>
        <title>
          I am Azeem a React js Developer.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"images/loog.png" ?? ''} />
        
      </Head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          
        />
      <a
        href="https://wa.me/9105326920"
        target="_blank"
        rel="noopener noreferrer"
        className={style.whatsapp_float}
        
      >
        <i className={`fa-brands fa-whatsapp ${style.whatsapp_icon}`}></i>
      </a>
    </>
  );
};

export default Whatsapp;
