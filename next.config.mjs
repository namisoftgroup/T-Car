/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/styles'],
    // Bootstrap 5.3 still uses the legacy @import syntax and global color
    // functions, which Dart Sass flags as deprecated. These are warnings from
    // the library (node_modules), not from our code, and don't affect output.
    // quietDeps silences dependency warnings; silenceDeprecations covers the
    // ones raised from our own bootstrap @import and the legacy JS API.
    quietDeps: true,
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
