module.exports = {
  title: 'VuePress',
  description: 'VuePress default theme bolierplate',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Github', link: 'https://github.com/CheolHoJung/vuepress-blog-boilerplate' },
    ],
    sidebar: [
      '/',
      '/guide/',
      '/posts/',
    ]
  }
}
