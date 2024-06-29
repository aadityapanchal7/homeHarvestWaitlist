import { FaCheck, FaXmark } from "react-icons/fa6";

export const priceList = [
  {
    Type: 'Free',
    Description: 'Basic access for casual users looking to find a home',
    Price: '0$',
    Link: '',
    Features: [
      { name: '100 Property Views per Week', available: true },
      { name: 'No Notifications', available: false },
      { name: 'Basic Search Filters', available: true },
      { name: 'Access to Community Forums', available: true },
      { name: 'Saved Searches', available: false },
    ],
    Animation: 'fade-left',
    Duration: '2000',
  },
  {
    Type: 'Starter',
    Description: 'Ideal for individuals actively looking for a new home.',
    Price: '29$',
    Link: '',
    Features: [
      { name: '500 Property Views per Week', available: true },
      { name: 'Email Notifications', available: true },
      { name: 'Advanced Search Filters', available: true },
      { name: 'Saved Searches', available: true },
      { name: 'Priority Customer Support', available: false },
    ],
    Animation:'fade-up',
    Duration: '2500',
  },
  {
    Type: 'Pro',
    Description: 'Best for real estate professionals or power users.',
    Price: '49$',
    Link: '',
    Features: [
      { name: 'Unlimited Property Views', available: true },
      { name: 'Email and SMS Notifications', available: true },
      { name: 'Premium Search Filters', available: true },
      { name: 'Saved Searches', available: true },
      { name: 'Priority Customer Support', available: true },
    ],
    Animation: 'fade-right',
    Duration: '2000',
  },
];
