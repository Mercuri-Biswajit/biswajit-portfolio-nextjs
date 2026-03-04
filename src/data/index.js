export const skills = [
  {
    icon: "📐",
    name: "AutoCAD 2D Drafting",
    level: 95,
    category: "Software",
    items: [
      "Floor plans & elevations",
      "Section & detail drawings",
      "Site layout & plot plans",
      "Annotation & dimensioning",
      "Layer management & blocks",
    ],
  },
  {
    icon: "🏗️",
    name: "Structural Design",
    level: 92,
    category: "Engineering",
    items: [
      "RCC beam, column & slab design",
      "IS 456:2000 code compliance",
      "Footing & foundation design",
      "Staircase & retaining wall design",
      "Load calculation & analysis",
    ],
  },
  {
    icon: "🔬",
    name: "Materials & Site Work",
    level: 88,
    category: "Engineering",
    items: [
      "Concrete mix design (M20–M40)",
      "Steel reinforcement detailing",
      "Soil testing & bearing capacity",
      "Quality control & site inspection",
      "IS code material specifications",
    ],
  },
  {
    icon: "⚙️",
    name: "Cost Estimation & BOQ",
    level: 90,
    category: "Management",
    items: [
      "WB PWD schedule of rates",
      "Quantity surveying & take-off",
      "Abstract estimate preparation",
      "Material & labour rate analysis",
      "Detailed project cost reports",
    ],
  },
  {
    icon: "🌱",
    name: "Project Planning",
    level: 84,
    category: "Management",
    items: [
      "Bar chart & Gantt scheduling",
      "Construction sequence planning",
      "Resource & manpower planning",
      "Progress monitoring & reporting",
      "Contract & tender documentation",
    ],
  },
  {
    icon: "💻",
    name: "STAAD.Pro / ETABS",
    level: 82,
    category: "Software",
    items: [
      "3D structural modelling",
      "Static & dynamic analysis",
      "Seismic analysis IS 1893",
      "Beam & column design",
      "Report generation",
    ],
  },
];

export const services = [
  {
    icon: "📐",
    name: "Architectural Plan",
    price: "Custom Quote",
    description: "Complete architectural design and planning services from site analysis to CAD delivery.",
    features: [
      "Site analysis and planning",
      "Floor plans and elevations",
      "Interior space planning",
      "Up to 3 design revisions",
      "CAD drawings delivery",
    ],
    popular: false,
  },
  {
    icon: "🏗️",
    name: "Structural Plan",
    price: "Custom Quote",
    description: "Comprehensive structural engineering analysis, design, and reinforcement detailing per IS 456:2000.",
    features: [
      "Structural analysis & modelling",
      "Foundation design",
      "IS 456 load calculations",
      "Reinforcement detailing",
      "Up to 3 design revisions",
    ],
    popular: true,
  },
  {
    icon: "💰",
    name: "Cost Estimate & BOQ",
    price: "Custom Quote",
    description: "Detailed project cost estimation with Bill of Quantities based on WB PWD SOR 2023–24.",
    features: [
      "Material quantity takeoff",
      "Bill of Quantities (BOQ)",
      "Cost breakdown analysis",
      "WB PWD rate compliance",
      "Up to 3 revisions",
    ],
    popular: false,
  },
];

export const education = [
  {
    icon: "🎓",
    year: "2016 – 2020",
    degree: "B.Tech Civil Engineering",
    school: "Surendra Institute of Engineering & Management",
    details: [
      "Structural analysis & RCC design",
      "Soil mechanics & foundation engineering",
      "Surveying, hydraulics & fluid mechanics",
      "Construction management & estimation",
    ],
  },
  {
    icon: "📐",
    year: "2021",
    degree: "AutoCAD 2D Drafting",
    school: "Udemy",
    details: [
      "2D floor plans, sections & elevations",
      "Layers, blocks & annotation tools",
      "Site layout & working drawings",
    ],
  },
  {
    icon: "🏗️",
    year: "2022",
    degree: "Practical Building Construction",
    school: "Udemy",
    details: [
      "RCC column, beam & slab construction",
      "Brick masonry & plastering techniques",
      "Site supervision & quality control",
    ],
  },
  {
    icon: "🗣️",
    year: "2023",
    degree: "Communication Skills",
    school: "Udemy",
    details: [
      "Professional written communication",
      "Client presentation & negotiation",
      "Team coordination & reporting",
    ],
  },
  {
    icon: "📊",
    year: "2024",
    degree: "Digital Marketing",
    school: "Google Digital Garage",
    details: [
      "SEO & search engine fundamentals",
      "Social media & content strategy",
      "Analytics & campaign measurement",
    ],
  },
];

export const siteConfig = {
  name: "Er. Biswajit Deb Barman",
  title: "Civil Engineer & Structural Designer – Raiganj, West Bengal",
  tagline: "Serving Raiganj, Uttar Dinajpur & North Bengal",
  email: "biswajitdebbarman.civil@gmail.com",
  phone: "+91-7602120054",
  location: "Chanditala, Raiganj, Uttar Dinajpur, West Bengal – 733134",
  linkedin: "https://www.linkedin.com/in/biswajit-deb-barman/",
  instagram: "https://www.instagram.com/biswajit.deb.barman/",
  url: "https://engineer-biswajit.netlify.app/",
  serviceAreas: ["Raiganj", "Dalkhola", "Islampur", "Itahar", "Chopra", "Kaliaganj", "Hemtabad"],
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "8+", label: "Years Experience" },
    { value: "40+", label: "Satisfied Clients" },
    { value: "5", label: "Districts Served" },
  ],
};

export const MATERIAL_CONSTANTS = {
  cement: 0.4,
  steel: 4.0,
  sand: 0.044,
  aggregate: 0.088,
  bricks: 9,
  pcc: 0.0046,
  footing: 0.0074,
  foundationBricks: 13,
};

export const DEFAULT_MATERIAL_RATES = {
  cement: 420,
  steel: 65,
  sand: 1500,
  aggregate: 1400,
  brick: 9,
  pcc: 4500,
  footing: 5500,
  foundationBrick: 12,
};
