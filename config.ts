const config = {
  dashboardCacheDuration: process.env.NODE_ENV == "development" ? 0 : 5, //  0 : 5 Seconds
};

export default config;
