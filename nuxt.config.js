const pkg = require('./package')

module.exports = {
    mode: 'universal',
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        '@/assets/css/common.css'
    ],
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3600/'
    },
    plugins: [
        '~/plugins/axios',
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    build: {
        extend(config, {isDev, isClient, loaders: {imgUrl}}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            imgUrl.limit = 5000
        }
    }
}
