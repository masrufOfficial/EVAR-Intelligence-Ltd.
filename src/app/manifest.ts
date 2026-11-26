import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EVAR Intelligence Ltd.',
    short_name: 'EVAR',
    description: 'An Innovation Hub for Human Protection in the Age of AI',
    start_url: '/',
    display: 'standalone',
    background_color: '#00171f',
    theme_color: '#00171f',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
