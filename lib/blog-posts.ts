export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "darkweb-intelligence-without-the-noise",
    title: "Darkweb intelligence without the noise",
    summary:
      "How Hackstle filters ransomware chatter and leak data into action-ready signals for your SOC.",
    date: "2024-12-05",
    readingTime: "5 min read",
    category: "Darkweb Monitoring",
    tags: ["Darkweb", "Triage", "Signal quality"],
    sections: [
      {
        heading: "Cut through leak chatter",
        body:
          "We score and de-dupe breach posts, leaked credential dumps, and ransomware claims so you only see items mapped to your domains, brands, and executives.",
      },
      {
        heading: "Action-first context",
        body:
          "Each alert ships with adversary intel, source screenshots, and next steps your SOC can run immediately—no hunting through dashboards required.",
      },
      {
        heading: "Less false positives",
        body:
          "Correlation with exposed assets, current CVEs, and attack surface telemetry keeps distractions low and focuses teams on threats that can move the needle.",
      },
    ],
  },
  {
    slug: "linking-cves-to-your-attack-surface",
    title: "Linking CVEs to your attack surface",
    summary:
      "Why vulnerability chatter matters more when paired with real asset exposure across your footprint.",
    date: "2024-11-12",
    readingTime: "6 min read",
    category: "CVE Correlation",
    tags: ["CVE", "Exposure", "Prioritization"],
    sections: [
      {
        heading: "Match exploits to what you own",
        body:
          "Hackstle maps darkweb exploit discussions and proof-of-concept drops to the internet-facing services and technologies we continuously inventory for you.",
      },
      {
        heading: "Prioritize by adversary interest",
        body:
          "Signals are weighted by attacker activity, exploit maturity, and whether credentials or supplier access are also in play.",
      },
      {
        heading: "Guided remediation",
        body:
          "Every CVE alert includes patching guidance, compensating controls, and workflow hooks your team can run without sifting through a complex UI.",
      },
    ],
  },
  {
    slug: "third-party-incidents-you-can-actually-act-on",
    title: "Third-party incidents you can actually act on",
    summary:
      "How supplier breach monitoring pairs with credential triage to stop downstream compromise.",
    date: "2024-10-28",
    readingTime: "4 min read",
    category: "Third-Party Risk",
    tags: ["Vendors", "Credentials", "Automation"],
    sections: [
      {
        heading: "Follow the blast radius",
        body:
          "When a supplier is breached, Hackstle traces credential reuse, shared access, and brand mentions to see if attackers are pivoting toward you.",
      },
      {
        heading: "Automate the response",
        body:
          "Integrations trigger resets, takedowns, or ticketing workflows so you can contain exposure before it reaches your environment.",
      },
      {
        heading: "Clear reporting for stakeholders",
        body:
          "Concise digests and evidence packets make it easy to brief leadership without exporting charts from multiple dashboards.",
      },
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
