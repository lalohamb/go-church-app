export interface Ministry {
  id: string;
  title: string;
  tagline: string;
  description: string;
  schedule: string;
  location: string;
  image: string;
  imageAlt: string;
  link: string;
  linkLabel: string;
}

export const ministries: Ministry[] = [
  {
    id: "men-ergy",
    title: "MEN-Ergy",
    tagline: "Men Growing Together",
    description:
      "A brotherhood built on faith, accountability, and purpose. MEN-Ergy equips men to lead with integrity in their homes, workplaces, and community.",
    schedule: "Contact the church for current meeting times.",
    location: "The GO Church Chicago",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    imageAlt: "Men gathered in fellowship and prayer",
    link: "https://www.thegochurchchicago.com",
    linkLabel: "Learn about MEN-Ergy",
  },
  {
    id: "wholistic-woman",
    title: "Wholistic Woman",
    tagline: "Spirit, Mind & Body",
    description:
      "Wholistic Woman empowers women to thrive in every dimension of life — spiritually, mentally, and physically — through community, teaching, and authentic connection.",
    schedule: "Contact the church for current meeting times.",
    location: "The GO Church Chicago",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    imageAlt: "Women in community worship and fellowship",
    link: "https://www.thegochurchchicago.com",
    linkLabel: "Learn about Wholistic Woman",
  },
  {
    id: "marriage-ministry",
    title: "Marriage Ministry",
    tagline: "Stronger Together",
    description:
      "Dedicated to helping couples build Christ-centered marriages. Through workshops, counseling resources, and community, couples grow closer to each other and to God.",
    schedule: "Contact the church for current meeting times.",
    location: "The GO Church Chicago",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    imageAlt: "Couple in prayer and community",
    link: "https://www.thegochurchchicago.com",
    linkLabel: "Learn about Marriage Ministry",
  },
  {
    id: "prayer-at-the-go",
    title: "Prayer at The GO",
    tagline: "Intercession & Worship",
    description:
      "Prayer is the foundation of everything we do. Join our prayer community as we intercede for our city, our families, and the nations through corporate and personal prayer.",
    schedule: "Contact the church for current prayer times.",
    location: "The GO Church Chicago & Virtual",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b671e4b8a?w=800&q=80",
    imageAlt: "Community gathered in prayer",
    link: "https://www.thegochurchchicago.com",
    linkLabel: "Join Prayer at The GO",
  },
  {
    id: "tuesday-night-empowerment",
    title: "Tuesday Night Empowerment",
    tagline: "Weekly Teaching & Growth",
    description:
      "Every Tuesday, the GO Church community gathers for in-depth Bible teaching, worship, and fellowship. Come ready to be equipped and empowered for everyday life.",
    schedule: "Tuesdays — contact the church for current times.",
    location: "The GO Church Chicago & Virtual",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    imageAlt: "Tuesday night church gathering and teaching",
    link: "https://www.thegochurchchicago.com",
    linkLabel: "Join Tuesday Night Empowerment",
  },
];
