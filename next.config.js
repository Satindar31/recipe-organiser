const { withLogtail } = require('@logtail/next');

module.exports = withLogtail({
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
        protocol: 'https'
      }
    ]
  }
});

