<template>
 

    <v-footer
      padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="black lighten-1 text-center py-3"

      >
        

        <v-divider></v-divider>

        <v-card-text class="white--text">
            <span class="texto">Crafted by<a class="enlace red--text" href="https://b312studio.com" target="_blank"> B312 Studio</a></span>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<style>
    .texto a{
        color: var(--rojo);
    }

     .texto .enlace:hover{
        color: var(--amarillo) !important;
    }

</style>