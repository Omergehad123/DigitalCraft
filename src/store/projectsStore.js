import { create } from 'zustand';

export const useProjectsStore = create((set, get) => ({
  activeCategory: 'Websites',
  
  categories: [
    {
      id: 'websites',
      name: 'Websites',
      badge: 'Web & Cloud Solutions',
      title: 'Web Platforms & Digital Experiences',
      description: 'Scalable web applications, modern platforms, and conversion-focused digital products.',
      projects: [
        {
          id: 'w-01',
          number: '01',
          title: 'Nexus Cloud',
          category: 'Enterprise SaaS',
          tools: 'Next.js 15, TypeScript, TailwindCSS, PostgreSQL, AWS',
          tagline: 'High-Scale Cloud Infrastructure Platform',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          accent: '#34d399',
          badges: ['99.99% Uptime', 'Telemetry Engine', 'Zero-Trust'],
          link: 'https://nexuscloud.io'
        },
        {
          id: 'w-02',
          number: '02',
          title: 'VoteChain',
          category: 'Blockchain',
          tools: 'Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, Node.js',
          tagline: 'Blockchain-Powered Smart Election System',
          image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
          accent: '#2dd4bf',
          badges: ['Tamper-Proof', 'Live Results', 'Postal Voting', 'Verified Votes'],
          link: 'https://votechain.io'
        },
        {
          id: 'w-03',
          number: '03',
          title: 'Flood Spaces 2.0',
          category: 'AI / ML',
          tools: 'Python, TensorFlow, Pandas, React, FastAPI, GIS',
          tagline: 'AI-Powered Flood Prediction & Risk Analysis',
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
          accent: '#10b981',
          badges: ['Accuracy 94.2%', 'Satellite GIS', 'Early Warning'],
          link: 'https://floodspaces.org'
        },
        {
          id: 'w-04',
          number: '04',
          title: 'Phoenix AI',
          category: 'AI Desktop Assistant',
          tools: 'Python, Speech Recognition, PyAutoGUI, Tkinter, FastAPI',
          tagline: 'Your Command-Driven AI Workspace Suite',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          accent: '#38bdf8',
          badges: ['Voice Control', 'Smart Tasks', 'Auto Actions'],
          link: 'https://phoenixai.app'
        }
      ]
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      badge: 'Cross-Platform Mobile',
      title: 'Mobile Applications & Smart Ecosystems',
      description: 'Fluid, gesture-rich mobile applications engineered for native performance on iOS & Android.',
      projects: [
        {
          id: 'm-01',
          number: '01',
          title: 'PulseFit Pro',
          category: 'Health & Fitness',
          tools: 'Flutter, Dart, Firebase, HealthKit, Google Fit',
          tagline: 'Real-Time Biometrics & AI Coach Companion',
          image: 'https://images.unsplash.com/photo-1510519138161-5844da972bf9?auto=format&fit=crop&w=1200&q=80',
          accent: '#34d399',
          badges: ['Biometric Sync', 'Workout AI', 'Low Latency'],
          link: 'https://pulsefit.app'
        },
        {
          id: 'm-02',
          number: '02',
          title: 'NomadPay',
          category: 'Fintech Wallet',
          tools: 'React Native, TypeScript, Node.js, Stripe, Plaid',
          tagline: 'Borderles Multi-Currency Mobile Wallet',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          accent: '#2dd4bf',
          badges: ['Instant FX', 'Virtual Cards', 'Sub-sec QR Pay'],
          link: 'https://nomadpay.io'
        },
        {
          id: 'm-03',
          number: '03',
          title: 'CineFlow',
          category: 'Media Streaming',
          tools: 'React Native, Expo, Redux, Video.js, Cloudflare',
          tagline: '4K Ultra-Low Latency Video Streaming Hub',
          image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80',
          accent: '#10b981',
          badges: ['Dolby Audio', 'Offline Cache', 'PIP Mode'],
          link: 'https://cineflow.tv'
        },
        {
          id: 'm-04',
          number: '04',
          title: 'QuickBite',
          category: 'On-Demand Delivery',
          tools: 'Flutter, Google Maps API, Socket.io, NestJS',
          tagline: 'Hyper-Local Express Delivery Network',
          image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
          accent: '#38bdf8',
          badges: ['Live Driver GPS', 'Split Cart', 'Instant ETA'],
          link: 'https://quickbite.me'
        }
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      badge: 'Retail & Commerce',
      title: 'Conversion-Driven E-Commerce Stores',
      description: 'Modern storefronts, high-converting checkout funnels, and enterprise inventory integrations.',
      projects: [
        {
          id: 'e-01',
          number: '01',
          title: 'Velour Atelier',
          category: 'Luxury Fashion',
          tools: 'Shopify Plus, Next.js, TailwindCSS, Hydrogen, Sanity',
          tagline: 'High-End Minimalist Fashion E-Store',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
          accent: '#34d399',
          badges: ['Dynamic Lookbook', '1-Click Pay', '3D Garment View'],
          link: 'https://velour.fashion'
        },
        {
          id: 'e-02',
          number: '02',
          title: 'HyperTech',
          category: 'Consumer Electronics',
          tools: 'Next.js 15, Stripe, PostgreSQL, Redis, TailwindCSS',
          tagline: 'Hardware & Next-Gen Components Marketplace',
          image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
          accent: '#2dd4bf',
          badges: ['Custom PC Builder', 'Live Inventory', 'Instant Credit'],
          link: 'https://hypertech.shop'
        },
        {
          id: 'e-03',
          number: '03',
          title: 'ArtisanCraft',
          category: 'Handcrafted Goods',
          tools: 'React, TailwindCSS, Supabase, Stripe Connect',
          tagline: 'Direct-to-Consumer Artisan Marketplace',
          image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
          accent: '#10b981',
          badges: ['Creator Payouts', 'Verified Reviews', 'Multi-Vendor'],
          link: 'https://artisancraft.co'
        },
        {
          id: 'e-04',
          number: '04',
          title: 'UrbanKicks',
          category: 'Sneaker Drops',
          tools: 'Next.js, TailwindCSS, Redis, Node.js, WebSockets',
          tagline: 'Limited Edition Sneaker Drop Platform',
          image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
          accent: '#38bdf8',
          badges: ['Anti-Bot Queues', 'Raffle Engine', 'Real-Time Drops'],
          link: 'https://urbankicks.io'
        }
      ]
    }
  ],

  setActiveCategory: (categoryName) => set({ activeCategory: categoryName }),
}));

export default useProjectsStore;
