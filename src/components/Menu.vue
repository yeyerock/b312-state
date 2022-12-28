<template>

<section id="section_menu">

    <v-app-bar 
        app
        class="" 
    >   
        <v-toolbar-title class="logo_letras">
            <router-link  to="/">
                 <img  src="../assets/images/logo.png" alt="">
            </router-link>
       </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn text 
        to="/inmueble_01"
        class="mx-1">
        Casas
      </v-btn>

      <v-btn text
          to="/oficina_01"
          class="mx-1"
      >
        Oficinas
      </v-btn>
        </v-app-bar>

    </section>
</template>

<style>

 #section_menu .logo_letras{
        width:  8rem;
    }

 #section_menu .logo_letras img{
    width: 100%;
 }

 
</style>