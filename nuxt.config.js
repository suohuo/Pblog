module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
<<<<<<< HEAD
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
=======
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1,user-scalable=no'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
>>>>>>> dev
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~plugins/vant.js',
    ssr: true
<<<<<<< HEAD
  }],
=======
  },
  {
    src: '~/plugins/route',
    ssr: true
  }
  ],
>>>>>>> dev
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
<<<<<<< HEAD

  
=======
  // router: {
  //   extendRoutes(routes) {
  //     routes.push({
  //       path: "/home",
  //       redirect: "/home/category/0",
  //     }, {
  //       path: "",
  //       redirect: "/home/category/0",
  //     })
  //   },
  //   // middleware:['authenticated']
  // },

>>>>>>> dev
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
<<<<<<< HEAD
    extend(config, ctx) {}
  }
}
=======
    extend(config, ctx) { }
  }
}
>>>>>>> dev
