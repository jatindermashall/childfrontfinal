export default {
  env: {
    apiUrl: process.env.API_URL || "https://strapibackendfinal.herokuapp.com",
    imageUrl: process.env.API_IMAGE_URL || "https://strapibackendfinal.herokuapp.com",
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        title: "Welcome to DreamChildname"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Great+Vibes:400"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=text-font|heading-font"
      },
            
           {
        rel: "javascript",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"
      }
    ]
  },
  //Global JS
  script: [
    {src: '~/assets/js/jquery.min.js',body: true},
    {src: '~/assets/js/bootstrap.min.js',body: true},
    {src: '~/assets/js/owl.carousel.min.js',body: true},
    {src: '~/assets/js/bootsnav.js',body: true},
    {src: '~/assets/js/main.js',body: true}
  ],
  /*
   ** Global CSS
   */
  css: ["~/assets/css/plugins.css","~/assets/css/common.css","~/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
