/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Leftover URL from the old Squarespace site structure — redirect any
      // lingering bookmarks/backlinks to the new homepage instead of 404ing.
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
 
module.exports = nextConfig;
