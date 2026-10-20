// ─── Content Types ───────────────────────────────────────────────────────────

export type Location = {
  id: string
  slug: string
  city: string
  state: string
  address: string
  zip: string
  sundayTime: string
  format: 'in-person' | 'online' | 'hybrid'
  mapUrl: string
  timezone: string
  heroImage: string | null
  description: string
}

export type Ministry = {
  id: string
  slug: string
  name: string
  description: string
  category: string
  image: string | null
  meetingFormat: 'in-person' | 'virtual' | 'hybrid'
  scheduleDescription: string
  locationId: string | null
  participationUrl: string | null
  status: 'active' | 'requires-review'
  sourceUrl: string | null
  verificationStatus: 'verified' | 'needs-review'
  // legacy compat
  title?: string
  schedule?: string
  format?: 'in-person' | 'virtual' | 'hybrid'
  joinUrl?: string | null
}

export type Event = {
  id: string
  slug: string
  title: string
  description: string
  startAt: string
  endAt: string
  timezone: string
  locationId: string | null
  meetingType: 'in-person' | 'virtual' | 'hybrid'
  image: string | null
  registrationUrl: string | null
  status: 'confirmed' | 'requires-review' | 'cancelled'
  category: string
}

export type LeadhPillar = {
  letter: string
  name: string
  description: string
}

export type NavigationItem = {
  label: string
  href: string
  external?: boolean
  children?: NavigationItem[]
}

export type SiteSettings = {
  churchName: string
  tagline: string
  email: string
  phone: string
  socialLinks: { platform: string; url: string; label: string }[]
  givingUrl: string
  watchUrl: string
  membershipUrl: string
  serveUrl: string
}

export type TimelineEntry = {
  year: string
  title: string
  description: string
}

// ─── Site Settings ────────────────────────────────────────────────────────────

export const siteSettings: SiteSettings = {
  churchName: 'The GO Church',
  tagline: 'GO In Strength. GO In Power. GO In Obedience. GO In Faith.',
  email: 'info@thegochurchchicago.com',
  phone: '219-269-1794',
  socialLinks: [
    { platform: 'instagram', url: 'https://www.instagram.com/thegochurchchicago/', label: 'Instagram' },
    { platform: 'facebook', url: 'https://www.facebook.com/thegochurchchicago', label: 'Facebook' },
  ],
  givingUrl: 'https://gochurchchicago.breezechms.com/give/online',
  watchUrl: 'https://www.facebook.com/thegochurchchicago',
  membershipUrl: 'https://forms.gle/LWK7JNtDRKnFyjjC9',
  serveUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdcHVajbGpLy99iEZ83cxNyDufFtL6LRQrk8iM42Q11dofJ9A/viewform',
}

// ─── Locations ────────────────────────────────────────────────────────────────

export const locations: Location[] = [
  {
    id: 'joliet',
    slug: 'joliet',
    city: 'Joliet',
    state: 'Illinois',
    address: '101 N Reed Street',
    zip: '60435',
    sundayTime: '9:00 AM',
    format: 'in-person',
    mapUrl: 'https://maps.google.com?q=101+North+Reed+Street+Joliet+IL+60435',
    timezone: 'America/Chicago',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511118138-9QXER93T3B8JDFXS29FY/GoChurch_Community_Closet_Wide.JPG',
    description: 'The GO Church Joliet launched in January 2023, serving Illinois and the surrounding region. Join us every Sunday at 9:00 AM for an in-person service.',
  },
  {
    id: 'hammond',
    slug: 'hammond',
    city: 'Hammond',
    state: 'Indiana',
    address: '6021 Hohman Avenue',
    zip: '46320',
    sundayTime: '11:45 AM',
    format: 'hybrid',
    mapUrl: 'https://maps.google.com?q=6021+Hohman+Avenue+Hammond+IN+46320',
    timezone: 'America/Chicago',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511201849-FB45ZDZHSFO73V8UPVYE/GC_Empowerment_Wide.jpg',
    description: 'The original GO Church location, launched in 2020. Join us every Sunday at 11:45 AM in person or online.',
  },
]

// ─── LEADH Pillars ────────────────────────────────────────────────────────────

export const leadhPillars: LeadhPillar[] = [
  {
    letter: 'L',
    name: 'Leadership',
    description: 'We believe in building and preparing Godly leaders for dominion in their GO season.',
  },
  {
    letter: 'E',
    name: 'Empowerment',
    description: 'We believe in giving a word that will challenge the people and propel them into their GO!',
  },
  {
    letter: 'A',
    name: 'Application',
    description: 'We challenge our people out of comfort zones, complacency and excuses, that will propel them into their GO!',
  },
  {
    letter: 'D',
    name: 'Deliverance',
    description: 'We believe in the process of deliverance and that it brings peace, wisdom, and understanding to those who desire it.',
  },
  {
    letter: 'H',
    name: 'Hope',
    description: 'When people leave our church, they leave with expectation, and they leave with hope.',
  },
]

// ─── Ministries ───────────────────────────────────────────────────────────────

export const ministries: Ministry[] = [
  {
    id: 'tuesday-night-empowerment',
    slug: 'tuesday-night-empowerment',
    name: 'Tuesday Night Empowerment Session',
    title: 'Tuesday Night Empowerment',
    description: 'An in-person midweek service designed to shift you into your GO SEASON. Get into the building at our Hammond location every 2nd & 4th Tuesday at 7pm CT.',
    category: 'life-groups',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511201849-FB45ZDZHSFO73V8UPVYE/GC_Empowerment_Wide.jpg',
    meetingFormat: 'in-person',
    scheduleDescription: 'Every 2nd & 4th Tuesday · 7:00 PM CT',
    schedule: 'Every 2nd & 4th Tuesday · 7:00 PM CT',
    locationId: 'hammond',
    participationUrl: null,
    joinUrl: null,
    format: 'in-person',
    status: 'active',
    sourceUrl: 'https://www.thegochurchchicago.com/community',
    verificationStatus: 'verified',
  },
  {
    id: 'wholistic-woman',
    slug: 'wholistic-woman',
    name: 'Wholistic Woman Virtual Life Group',
    title: 'Wholistic Woman',
    description: 'Every sister needs a sister. Join this community of sisterhood every 2nd Thursday for a conversation that will expose your greatness and push you into your GO season.',
    category: 'life-groups',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1767307626127-91L4E6HS2NI7CR7CSS34/Go+Church_WholisticWoman_26%28Updated%29.jpg',
    meetingFormat: 'virtual',
    scheduleDescription: 'Every 2nd Thursday · 7:00 PM CT',
    schedule: 'Every 2nd Thursday · 7:00 PM CT',
    locationId: null,
    participationUrl: 'https://us02web.zoom.us/j/89197657693',
    joinUrl: 'https://us02web.zoom.us/j/89197657693',
    format: 'virtual',
    status: 'active',
    sourceUrl: 'https://www.thegochurchchicago.com/community',
    verificationStatus: 'verified',
  },
  {
    id: 'men-ergy',
    slug: 'men-ergy',
    name: "MEN-Ergy Men's Ministry",
    title: 'MEN-Ergy',
    description: 'Every man needs support. Every man needs a brother. Join this community of brothers every 3rd Thursday for a cutting-edge conversation that will expose your comfort zones and push you into your GO SEASON.',
    category: 'life-groups',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1767307624927-OP8JS3CK0QCQUNAE1SBV/Go+Church_Menergy_Wide_26%28Updated%29.jpg',
    meetingFormat: 'virtual',
    scheduleDescription: 'Every 3rd Thursday · 7:00 PM CT',
    schedule: 'Every 3rd Thursday · 7:00 PM CT',
    locationId: null,
    participationUrl: 'https://us02web.zoom.us/j/89644801777',
    joinUrl: 'https://us02web.zoom.us/j/89644801777',
    format: 'virtual',
    status: 'active',
    sourceUrl: 'https://www.thegochurchchicago.com/community',
    verificationStatus: 'verified',
  },
  {
    id: 'marriage-ministry',
    slug: 'marriage-ministry',
    name: 'Marriage Ministry',
    title: 'Marriage Ministry',
    description: 'Strengthen your marriage and get acquainted with a healthy community of marriages at The GO every 4th Thursday at 6PM CT.',
    category: 'life-groups',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1767307627119-7480KSA1L8ZSS5IBMQ9B/GoChurch_MarriageMinistr_a_Wide.jpg',
    meetingFormat: 'virtual',
    scheduleDescription: 'Every 4th Thursday · 6:00 PM CT',
    schedule: 'Every 4th Thursday · 6:00 PM CT',
    locationId: null,
    participationUrl: 'https://us02web.zoom.us/j/87515578722?pwd=DWyVb0JobwmbCMd0S9hOYgCW9P1REe.1',
    joinUrl: 'https://us02web.zoom.us/j/87515578722?pwd=DWyVb0JobwmbCMd0S9hOYgCW9P1REe.1',
    format: 'virtual',
    status: 'active',
    sourceUrl: 'https://www.thegochurchchicago.com/community',
    verificationStatus: 'verified',
  },
  {
    id: 'prayer-at-the-go',
    slug: 'prayer-at-the-go',
    name: 'Prayer at The GO',
    title: 'Prayer at The GO',
    description: 'Prayer is essential to every believer. Prayer is our lifeline. Join us every 1st Saturday at 8am for Prayer at THE GO. Kick your morning off in the presence of God.',
    category: 'prayer',
    image: null,
    meetingFormat: 'in-person',
    scheduleDescription: 'Every 1st Saturday · 8:00 AM CT',
    schedule: 'Every 1st Saturday · 8:00 AM CT',
    locationId: 'hammond',
    participationUrl: null,
    joinUrl: null,
    format: 'in-person',
    status: 'active',
    sourceUrl: 'https://www.thegochurchchicago.com/community',
    verificationStatus: 'verified',
  },
]

// ─── Pastor Timeline ──────────────────────────────────────────────────────────

export const pastorTimeline: TimelineEntry[] = [
  {
    year: '2015',
    title: 'Coffee and Conversations',
    description: 'Launched the leadership organization Coffee and Conversations — a monthly online gathering empowering Christian leaders to lead and make impact in their sphere of influence. The movement draws 300+ individuals for a time of empowerment.',
  },
  {
    year: '2020',
    title: 'The GO Church — Hammond',
    description: 'Heard the voice of God and launched The GO Church in Hammond, IN — a rapidly growing multi-generational church. Leveraged the hybrid model to serve the congregation through and beyond the pandemic.',
  },
  {
    year: 'January 2023',
    title: 'The GO Church — Joliet',
    description: 'Launched the second plant of The GO Church in Joliet, IL, serving Illinois and the surrounding region. 1 Church. 2 Locations.',
  },
]

// ─── Upcoming Events ──────────────────────────────────────────────────────────

export const upcomingEvents: Event[] = [
  {
    id: 'tuesday-empowerment-oct-27',
    slug: 'tuesday-night-empowerment-oct-27',
    title: 'Tuesday Night Empowerment Session',
    description: 'In-person midweek service at our Hammond location.',
    startAt: '2026-10-27T19:00:00',
    endAt: '2026-10-27T20:00:00',
    timezone: 'America/Chicago',
    locationId: 'hammond',
    meetingType: 'in-person',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511201849-FB45ZDZHSFO73V8UPVYE/GC_Empowerment_Wide.jpg',
    registrationUrl: null,
    status: 'confirmed',
    category: 'life-groups',
  },
  {
    id: 'marriage-ministry-oct-23',
    slug: 'marriage-ministry-oct-23',
    title: 'Marriage Ministry Virtual Life Group',
    description: 'Strengthen your marriage in community.',
    startAt: '2026-10-23T18:00:00',
    endAt: '2026-10-23T19:00:00',
    timezone: 'America/Chicago',
    locationId: null,
    meetingType: 'virtual',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1767307627119-7480KSA1L8ZSS5IBMQ9B/GoChurch_MarriageMinistr_a_Wide.jpg',
    registrationUrl: 'https://us02web.zoom.us/j/87515578722?pwd=DWyVb0JobwmbCMd0S9hOYgCW9P1REe.1',
    status: 'confirmed',
    category: 'life-groups',
  },
  {
    id: 'community-closet-oct-24',
    slug: 'community-closet-oct-24',
    title: 'Community Closet Outreach',
    description: 'Serving our community through clothing outreach at our Hammond location.',
    startAt: '2026-10-24T12:00:00',
    endAt: '2026-10-24T13:00:00',
    timezone: 'America/Chicago',
    locationId: 'hammond',
    meetingType: 'in-person',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511118138-9QXER93T3B8JDFXS29FY/GoChurch_Community_Closet_Wide.JPG',
    registrationUrl: null,
    status: 'confirmed',
    category: 'outreach',
  },
  {
    id: '8am-prayer-nov-7',
    slug: '8am-prayer-nov-7',
    title: '8AM Prayer',
    description: 'Monthly corporate prayer at our Hammond location.',
    startAt: '2026-11-07T08:00:00',
    endAt: '2026-11-07T09:00:00',
    timezone: 'America/Chicago',
    locationId: 'hammond',
    meetingType: 'in-person',
    image: null,
    registrationUrl: null,
    status: 'confirmed',
    category: 'prayer',
  },
  {
    id: 'wholistic-woman-nov-13',
    slug: 'wholistic-woman-nov-13',
    title: 'Wholistic Woman Virtual Life Group',
    description: 'Community of sisterhood — virtual.',
    startAt: '2026-11-13T19:00:00',
    endAt: '2026-11-13T20:00:00',
    timezone: 'America/Chicago',
    locationId: null,
    meetingType: 'virtual',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1767307626127-91L4E6HS2NI7CR7CSS34/Go+Church_WholisticWoman_26%28Updated%29.jpg',
    registrationUrl: 'https://us02web.zoom.us/j/89197657693',
    status: 'confirmed',
    category: 'life-groups',
  },
  {
    id: 'go-closet-joliet-nov-21',
    slug: 'go-closet-joliet-nov-21',
    title: 'Go Closet Joliet',
    description: 'Clothing outreach serving the Joliet community.',
    startAt: '2026-11-21T13:00:00',
    endAt: '2026-11-21T14:00:00',
    timezone: 'America/Chicago',
    locationId: 'joliet',
    meetingType: 'in-person',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511118138-9QXER93T3B8JDFXS29FY/GoChurch_Community_Closet_Wide.JPG',
    registrationUrl: null,
    status: 'confirmed',
    category: 'outreach',
  },
]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const headerNav: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Pastor Matt', href: '/pastor-matt' },
      { label: 'Pastoral Care', href: '/pastoral-care' },
    ],
  },
  {
    label: 'Ministries',
    href: '/community',
    children: [
      { label: 'Community & Life Groups', href: '/community' },
      { label: 'Prayer', href: '/prayer' },
      { label: 'Serve', href: '/serve' },
      { label: 'Momentum Care Center', href: '/momentum-care-center' },
    ],
  },
  { label: 'Watch', href: siteSettings.watchUrl, external: true },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'All Locations', href: '/locations' },
      { label: 'Joliet, IL', href: '/locations/joliet' },
      { label: 'Hammond, IN', href: '/locations/hammond' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Plan Your Visit', href: '/plan-your-visit' },
]
