/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL:
      "mongodb+srv://pavan_a:Getmein_Connect@cluster0.xhw22.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
