import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',

    },
    {
      text: 'Learn More',
      links: [

        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },

      ],
    },

    {
      text: 'Contact',
      href: '#',
    },
  ],
  actions: [{ text: 'Join Us', href: 'github.com', target: '_blank' }],
};

export const footerData = {
  
};
