module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/movie/popular/page/1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/movie/popular/page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/movie/top/page',
        destination: '/movie/top/page/1',
        permanent: true,
      },
      {
        source: '/movie/top',
        destination: '/movie/top/page/1',
        permanent: true,
      },
    ]
  },
}
