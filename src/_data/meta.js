module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  shortSiteName: 'Fudge Factor',
  siteName: 'Fudge Factor 🤔 💡 🤯 🤓',
  siteDescription:
    'the on again off again blog of Jay Cuthrell and Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Jay Cuthrell', 
  authorEmail: 'jay@cuthrell.com', 
  authorWebsite: 'https://jaycuthrell.com', 
  themeColor: '#fb923c', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: fudge.org is powered by an Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://cuthrell.com/@jay' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter',
    description:
      'the on again off again blog of Jay Cuthrell and Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Cuthrell Consulting LLC',
    street: '1903 Live Oak St #92',
    city: 'Beaufort',
    state: 'North Carolina',
    zip: '28516',
    mobileDisplay: '+1 4157638343',
    mobileCall: ' +1 4157638343',
    email: 'jay@cuthrell.com',
    cif: ''
  },
  "feed": {
    "subtitle": "fudge.org and Fudge Factor 🤔 💡 🤯 🤓 weekly newsletter contain the on again off again ramblings of Jay Cuthrell",
    "filename": "rss.xml",
    "path": "/rss.xml",
    "url": "https://fudge.org/rss.xml",
    "id": "https://fudge.org/"
  },
  menu: {
    closedText: 'Menu'
  }
};
