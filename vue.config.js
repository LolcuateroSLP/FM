module.exports = {
    pages: 
    {
        index: {
          // entry for the page
          entry: 'src/main.js',
          // the source template
          template: 'public/index.html',
          // output as dist/index.html
          filename: 'index.html',
          // when using title option,
          // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Index Page',
          // chunks to include on this page, by default includes
          // extracted common chunks and vendor chunks.
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        subpage: 'src/subpage/main.js'
    },

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