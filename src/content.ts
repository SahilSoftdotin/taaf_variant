export const company = {
  name: "Tenth Avenue Accountants & Financial Advisors",
  shortName: "TAAF",
  established: 2017,
  phone: "(02) 4399 1551",
  phoneHref: "tel:0243991551",
  email: "info@taafa.com.au",
  abn: "46 626 434 991",
  region: "Central Coast, NSW",
  address: "Unit 2/28 Canton Beach Road, Toukley NSW 2263",
  accreditation: "Xero Platinum Champion Partner",
  hours: "Mon–Fri · 9:00am – 5:00pm",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How we help", href: "#use-cases" },
  { label: "Why TAAF", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export interface Logo {
  name: string;
  src: string;
}

// Real brand marks (free Simple Icons SVGs + each institution's own brand icon)
export const platforms: Logo[] = [
  { name: "Xero", src: "/images/logos/real/xero.svg" },
  { name: "MYOB", src: "/images/logos/real/myob.svg" },
  { name: "QuickBooks", src: "/images/logos/real/quickbooks.png" },
  { name: "Visa", src: "/images/logos/real/visa.svg" },
  { name: "Mastercard", src: "/images/logos/real/mastercard.svg" },
  { name: "PayPal", src: "/images/logos/real/paypal.svg" },
  { name: "Stripe", src: "/images/logos/real/stripe.svg" },
  { name: "Wise", src: "/images/logos/real/wise.svg" },
];

export const banks: Logo[] = [
  { name: "CommBank", src: "/images/logos/real/commbank.png" },
  { name: "NAB", src: "/images/logos/real/nab.jpg" },
  { name: "Westpac", src: "/images/logos/real/westpac.ico" },
  { name: "ANZ", src: "/images/logos/real/anz.png" },
  { name: "Macquarie", src: "/images/logos/real/macquarie.png" },
  { name: "ING", src: "/images/logos/real/ing.jpg" },
  { name: "Bendigo Bank", src: "/images/logos/real/bendigo.ico" },
  { name: "St.George", src: "/images/logos/real/stgeorge.png" },
];

// Honest credential marquee (replaces a generic "backed by investors" strip)
export const credentials = [
  "Xero Platinum Champion Partner",
  "Registered Tax Agents",
  "Serving the Central Coast since 2017",
  "Transparent fixed-fee quotes",
  "Individuals & Business",
  "SMSF Specialists",
  "Estate & Financial Planning",
  "ATO-compliant lodgements",
];

export interface Service {
  slug: string;
  title: string;
  summary: string;
}

export interface Division {
  name: string;
  blurb: string;
  services: Service[];
}

export const divisions: Division[] = [
  {
    name: "Accounting Services",
    blurb: "Compliance and clarity for individuals and businesses.",
    services: [
      { slug: "personal-income-tax", title: "Personal Tax Returns", summary: "Every eligible deduction and offset, lodged accurately." },
      { slug: "sole-trader-tax", title: "Sole Trader Tax", summary: "Compliant, efficient reporting for your business." },
      { slug: "partnership-tax", title: "Partnership Tax", summary: "Clear returns and distribution statements." },
      { slug: "company-tax", title: "Company Tax", summary: "Organised, precise company lodgements." },
      { slug: "business-accounting", title: "Business Accounting", summary: "BAS, payroll and bookkeeping on Xero." },
      { slug: "bookkeeping-payroll", title: "Bookkeeping & Payroll", summary: "Tidy books and on-time payroll, every cycle." },
      { slug: "trusts", title: "Trusts & Disability Trusts", summary: "Structured, transparent trust administration." },
      { slug: "tax-planning", title: "Tax Planning", summary: "Forward-looking strategy within the law." },
    ],
  },
  {
    name: "Financial Advice",
    blurb: "Grow and protect wealth for the long term.",
    services: [
      { slug: "smsf", title: "Self-Managed Super (SMSF)", summary: "Set up and run your fund, compliantly." },
      { slug: "superannuation", title: "Superannuation", summary: "Track contributions and performance." },
      { slug: "financial-planning", title: "Financial Planning", summary: "A plan aligned to your life goals." },
      { slug: "estate-planning", title: "Estate Planning", summary: "Organise your affairs for the future." },
      { slug: "life-insurance", title: "Life Insurance", summary: "Protect what matters most to your family." },
      { slug: "income-protection-insurance", title: "Income Protection", summary: "Safeguard your earnings if you can't work." },
      { slug: "investment-property-advice", title: "Investment Property", summary: "Income, tax and clear documentation." },
      { slug: "business-advisory", title: "Business Advisory", summary: "Strategy for cashflow, structure and growth." },
    ],
  },
];

export interface ValueCard {
  title: string;
  body: string;
  image?: string;
  dark?: boolean;
}

export const valueCards: ValueCard[] = [
  {
    title: "Savings that work harder",
    body: "Smarter structures and proactive planning so more of what you earn stays yours.",
    image: "/images/services/financial-planning.jpg",
  },
  {
    title: "Always transparent,\nalways compliant",
    body: "Fixed-fee quotes and plain-English reporting — you always know where you stand.",
    dark: true,
  },
  {
    title: "Tax & wealth,\nunder one roof",
    body: "Accounting, advice, super and insurance handled by one local team.",
    dark: true,
  },
];

export interface UseCase {
  audience: string;
  title: string;
  body: string;
  video: string;
}

export const useCases: UseCase[] = [
  {
    audience: "For business",
    title: "Business",
    body: "BAS, payroll, company tax and advisory — books kept accurate on Xero so you can focus on running the business.",
    video: "/video/cards/accounting-docs.mp4",
  },
  {
    audience: "For individuals",
    title: "Individuals & families",
    body: "Personal tax, super, insurance and estate planning — explained simply, handled end to end.",
    video: "/video/cards/finance-meeting.mp4",
  },
  {
    audience: "For investors",
    title: "Investors & SMSF",
    body: "SMSF setup and administration, investment property and wealth strategy that compounds over time.",
    video: "/video/cards/finance-analysis.mp4",
  },
];
