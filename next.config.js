/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
    remotePatterns:[{protocol:"http",hostname:"cdn.weatherapi.com"},{protocol:"https",hostname:"images.pexels.com"}]
    },
   
}

module.exports = nextConfig
