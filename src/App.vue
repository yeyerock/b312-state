<template>
  <v-app>
    <Menu/>
      
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
    components:{
      Menu, Footer
    },
  data: () => ({
    //
  }),
};
</script>

<style>
  /* Estilos Generales */

  :root{
    --hueso: #F8F4F2;
    --negro: #1C0B19;
    --blanco: #FFFFFF;
    --rojo: #8f0000;
    --amarillo: #fad201;
  }

  #app{
    background: var(--hueso);
  }

  html,
body{
    overflow-x: hidden;
    width: 100vw;    
}

*{
    margin:0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

a, a:hover, a:focus, a:active {
    text-decoration: none;  
    cursor: pointer;
    color: var(--negro);
}

/* Fuentes */
  .titulo_bold{
    font-family: asap, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.5rem;
  }

  .titulo{
    font-family: asap, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem;
  }

  .subtitulo{
    font-family: asap, sans-serif;
    font-weight: 700;
    font-style: italic;
       font-size: 1rem;
  }

  .texto{
    font-family: asap, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 0.9rem;
    text-align: justify;
  }

  /* Estilos Cards */

    .cont_video{
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
    }

    .cont_video video{
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

  
      .cont_carousel{
        height: auto !important;
      }

      .img_carousel{
        width: 100%;
      }

    .section_cont_contacto{
        width: 100%;
     }

</style>
