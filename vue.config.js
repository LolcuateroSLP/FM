module.exports = {
    css: {
        loaderOptions: {
            "less": {
                javascriptEnabled: true
            },
        }
    },
    pwa: {
        name: 'WICS',
        themeColor: '#1a3180',
        msTileColor: '#1a3180',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'public/service-worker.js',
        }
    }
}