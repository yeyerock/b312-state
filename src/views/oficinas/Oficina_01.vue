<template>
    <section id="section_oficina" class="py-6">
        <v-container>
            <v-row>
                <v-col
                    cols="12"
                    sm="8"
                    md="6"
                    class="mx-auto">
                    <h1 class="titulo text-justify"><span class="titulo_bold">Loma Dorada |</span>  Oficinas</h1>
                    <h3 class="subtitulo text-justify">$ 2,000,000 MXN</h3>
                    <div class="cont_video my-6">
                        <video class="my-auto"  src="../../assets/videos/demo_oficina_lomadorada_2.mp4" autoplay  playsinline muted loop ></video>
                    </div>
                </v-col>

                <v-col
                    cols="12"
                    sm="9"
                    md="5"
                    class="mx-auto">
                    
                    <v-card 
                        outlined
                        class="pa-6 mt-md-6">
                        <v-card-title class="titulo mb-4">
                            Descripción
                        </v-card-title>
                        <v-row>
                            <v-col cols="12">
                                <v-card-text class="texto text-justify">
                                    Oficina nueva en renta o venta, cerca de Bernardo Quintana y Constituyentes en la colonia Loma Dorada, Querétaro, Qro.
                                </v-card-text>
                            </v-col>
                        </v-row>
                        <v-card-title class="titulo mb-4">
                            Características
                        </v-card-title>
                        <v-row>
                            <v-col cols="12" sm="6"  class="mb-0 pb-0">
                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-home</v-icon> | 50 m² 
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-elevator</v-icon> | Elevador
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-account-group</v-icon> | Sala de Juntas
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" sm="6"  class="mt-0 py-0">
                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-sofa</v-icon> | Sala de Descanso
                                </v-card-text>  

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-car</v-icon> | 2 Cajones de estacionamiento
                                </v-card-text>

                                <v-card-text class="texto text-left">
                                    <v-icon>mdi-google-maps</v-icon> | Excelente Ubicación
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
                <div class="card_carousel" elevation="24">
                    <v-carousel 
                        hide-delimiters
                        :continuous="true"
                        class="cont_carousel"
                    >
                        <v-carousel-item>
                            <v-img 
                                contain
                                class="img_carousel"
                                lazy-src="../../assets/images/oficinas/reel_01.jpg"     
                                src="../../assets/images/oficinas/reel_01.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item>
                            <v-img 
                                contain
                                class="img_carousel"
                                lazy-src="../../assets/images/oficinas/reel_02.jpg"
                                src="../../assets/images/oficinas/reel_02.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item>
                            <v-img 
                                contain
                                class="img_carousel"
                                lazy-src="../../assets/images/oficinas/reel_03.jpg"
                                src="../../assets/images/oficinas/reel_03.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item>
                            <v-img 
                                contain
                                class="img_carousel"
                                lazy-src="../../assets/images/oficinas/reel_04.jpg"
                                src="../../assets/images/oficinas/reel_04.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>

                        <v-carousel-item>
                            <v-img 
                                contain
                                class="img_carousel"
                                lazy-src="../../assets/images/oficinas/reel_05.jpg"
                                src="../../assets/images/oficinas/reel_05.jpg"
                            >
                            </v-img>                        
                        </v-carousel-item>                        
                    </v-carousel>
                </div>
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
                            href="https://wa.me/+5214425772540?text=Hola%20,%20quisiera%20informes%20sobre%20las%20oficinas%20en%20loma%20dorada" 
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

<style>
   

    

</style>