export const url = process.env.URL || 'http://localhost:8080';
export const shortSiteName = 'Fudge Factor';
export const siteName = 'Fudge Factor 🤔 💡 🤯 🤓';
export const siteDescription = 'The on again off again blog of Jay Cuthrell and Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Jay Cuthrell', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'jay@cuthrell.com', // i.e. hola@lenesaile.com - email of the author
  website: 'https://jaycuthrell.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  fediverse: 'https://cuthrell.com/@jay' // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
};
export const creator = {
  name: 'Jay Cuthrell', // i.e. Lene Saile - creator's (developer) name.
  email: 'jay@cuthrell.com',
  website: 'https://jaycuthrell.com',
  social: 'https://cuthrell/@jay'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#fb923c'; //  Manifest: defines the default theme color for the application
export const themeBgColor = '#F3F3F3'; // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
export const opengraph_default = '/assets/images/template/opengraph-default-fudge-factor.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: The on again off again blog of Jay Cuthrell and Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter',
  description: 'The on again off again blog of Jay Cuthrell and Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'RSS Feed',
      url: '/rss.xml',
      type: 'application/rss+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Topics',
  tagPlural: 'Topics',
  tagMore: 'More topics:',
  // pagination
  paginationLabel: 'Archive',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // this goes into src/common/greenweb.njk
  providers: {
    // if you want to add more than one, edit the array directly.
    domain: 'netlify.com',
    service: 'cdn'
  },
  credentials: {
    // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
    domain: '',
    doctype: '',
    url: ''
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = false;
