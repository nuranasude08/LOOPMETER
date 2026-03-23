import { Transaction, Reward, Machine } from './lib/utils';

export const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Metromall Machine',
    date: 'Today, 10:45 AM',
    amount: 50,
    type: 'deposit',
    icon: 'Recycle',
  },
  {
    id: '2',
    title: 'Coffee Discount',
    date: 'Yesterday, 4:20 PM',
    amount: -200,
    type: 'reward',
    icon: 'Coffee',
  },
  {
    id: '3',
    title: 'TEMA Foundation',
    date: '2 days ago',
    amount: -1000,
    type: 'donation',
    icon: 'TreePine',
  },
];

export const REWARDS: Reward[] = [
  {
    id: 'r1',
    title: 'Coffee Discount',
    description: 'Valid at GreenBrew locations',
    cost: 200,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    category: 'Food & Drink',
    isNew: true,
  },
  {
    id: 'r2',
    title: 'Public Transport Pass',
    description: 'City-wide 24h digital pass',
    cost: 500,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    category: 'Transport',
  },
];

export const MACHINES: Machine[] = [
  {
    id: 'm1',
    name: 'EcoLoop Hub #42',
    address: 'Friedrichstraße 12, Mitte, Berlin',
    distance: '320m away',
    status: 'available',
    fillLevels: { plastic: 85, metal: 22, paper: 100, glass: 45 },
    lat: 52.52,
    lng: 13.405,
  },
];

export const WEEKLY_DATA = [
  { day: 'Mon', carbon: 2 },
  { day: 'Tue', carbon: 5 },
  { day: 'Wed', carbon: 3 },
  { day: 'Thu', carbon: 8 },
  { day: 'Fri', carbon: 6 },
  { day: 'Sat', carbon: 4 },
  { day: 'Sun', carbon: 12 },
];
