<template>
    <section>
        <v-container class="py-6">
            <v-row>
                <v-col
                    cols="12"
                    sm="8"
                    md="6"
                    class="mx-auto">
                    <h1 class="titulo text-justify"><span class="titulo_bold">Cañadas del Lago |</span>  Casa</h1>
                    <h3 class="subtitulo text-justify">$ 3,000,000 MXN</h3>
                    <div class="cont_video my-6">
                        <video  src="../../assets/videos/demo_inmueble_01.mp4" autoplay  playsinline muted loop ></video>
                    </div>
                    <p class="texto">
                         </p>
                </v-col>
                <v-col
                    cols="12"
                    sm="9"
                    md="5"
                    class="mx-auto">
                    
                    <v-card 
                        outlined
                        class="pa-6">
                        <v-card-title class="titulo">
                            Descripción
                        </v-card-title>
                        <v-row>
                            <v-col cols="12">
                                <v-card-text class="texto text-justify">
                                    Casa con estilo minimalista dentro de un residencial que además cuenta con vigilancia, casa club, parque y lago donde se puede caminar, andar en bicicleta y contemplar el atardecer.
                                </v-card-text>
                            </v-col>
                        </v-row>
                        <v-card-title class="titulo">
                            Características
                        </v-card-title>
                        <v-row >
                            <v-col cols="12" sm="6"  class="mb-0 pb-0">
                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-home</v-icon> | 189 m²
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-door</v-icon> | Entrada minimalista
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-car</v-icon> | 2 cajones de estacionamiento
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-elevator</v-icon> | 2 Plantas
                                </v-card-text>                                

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-bed</v-icon> <v-icon>mdi-toilet</v-icon> | 2 recámaras con closet y baño compartido
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-bed</v-icon> <v-icon>mdi-toilet</v-icon> <v-icon>mdi-hanger</v-icon> | 1 recámara principal con baño completo y con vestidor
                                </v-card-text>

                                                               
                            </v-col>
                            <v-col cols="12" sm="6"  class="mt-0 py-0">

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-sofa</v-icon> | Sala doble altura
                                </v-card-text>
                               
                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-toilet</v-icon> | Medio baño en planta baja
                                </v-card-text> 
                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-table-furniture</v-icon> | Cocina equipada con barra
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-table-chair</v-icon> | Comedor
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-flower</v-icon> | Jardín
                                </v-card-text>
                         
                        <v-card-text class="texto text-left">
                            <v-icon>mdi-package-variant</v-icon> | Cuarto de alacena
                           </v-card-text>
                        <v-card-text class="texto text-left">
                            <v-icon>mdi-vacuum</v-icon> | Cuarto de servicios
                           </v-card-text>           
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col 
                cols="12"
                    sm="8"
                    md="6"
                    class="mx-auto mt-md-5"
                >
                <h3 class="titulo text-center mb-6"> Galería</h3>
                    <v-card class="card_carousel"  elevation="24">
                    <v-carousel 
                        hide-delimiters
                        :continuous="true"
                        class="cont_carousel"
                    >

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_07.jpg"
                                src="../../assets/images/inmuebles/reel_07.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_01.jpg"     
                                src="../../assets/images/inmuebles/reel_01.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_02.jpg"
                                src="../../assets/images/inmuebles/reel_02.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_03.jpg"
                                src="../../assets/images/inmuebles/reel_03.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_04.jpg"
                                src="../../assets/images/inmuebles/reel_04.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_05.jpg"
                                src="../../assets/images/inmuebles/reel_05.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_06.jpg"     
                                src="../../assets/images/inmuebles/reel_06.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_08.jpg"
                                src="../../assets/images/inmuebles/reel_08.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_09.jpg"
                                src="../../assets/images/inmuebles/reel_09.jpg"
                            >                            
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_10.jpg"
                                src="../../assets/images/inmuebles/reel_10.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                                lazy-src="../../assets/images/inmuebles/reel_11.jpg"
                                src="../../assets/images/inmuebles/reel_11.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item        height="200" max-height="500"
              contain>
                            <v-img 
                     
                                class="img_carousel"
                             lazy-src="../../assets/images/inmuebles/reel_12.jpg"
                                src="../../assets/images/inmuebles/reel_12.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>
                </v-carousel>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    class="mx-auto"
                >
                <div class="section_cont_contacto text-center mt-6">
                <h3 class="titulo_bold text-center mb-3">
                        Agenda una visita
                </h3>
                <div class="text-center">
                    <v-btn
                            href="https://wa.me/+5214425772540?text=Hola%20,%20quisiera%20informes%20sobre%20Casa20en%20Cañadas%20del%20lago" 
                            target="_blank"
                            class="ma-2"
                            outlined
                            large
                            fab
                            color="black"
                        >
                            <v-icon>mdi-whatsapp</v-icon>
                        </v-btn>

                        <v-btn
                            href="tel:+5214425772540"
                            class="ma-2"
                            outlined
                            large
                            fab
                            color="black"
                        >
                            <v-icon>mdi-cellphone-basic</v-icon>
                        </v-btn>

                        <v-btn
                            href="mailto:crear@b312studio.com"
                            class="ma-2"
                            outlined
                            large
                            fab
                            color="black"
                        >
                            <v-icon>mdi-email-outline</v-icon>
                        </v-btn>

                        <v-btn
                        href="https://goo.gl/maps/PEeuF6WktUHnucdv6" target="_blank"
                            class="ma-2"
                            outlined
                            large
                            fab
                            color="black"
                        >
                            <v-icon>mdi-google-maps</v-icon>
                        </v-btn>
                    </div>        
              
            </div>
                </v-col>
            </v-row>

        </v-container>
    </section>
</template>

<script>
    export default {
    data () {
      return {
        fotos: [
          
        ],
      }
    },
  }
</script>

<style>
  
</style>
