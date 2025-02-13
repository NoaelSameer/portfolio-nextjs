/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictmode: true,
    Images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port:"",
                search:""
            }
        ]
    }
};

export default nextConfig;
