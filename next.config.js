/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'https://buscador.enzona.net',
          port: '',
        },
      ],
    },
  }