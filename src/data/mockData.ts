export interface JobOffer {
  id: string;
  title: string;
  company: string;
  technology: {
    name: string;
  };
  seniority: number;
  remote: number;
  ua_supported: boolean;
  created_at: string;
  contracts: Contract[];
  category: string;
  city: string;
}

export interface Contract {
  id: string;
  employment: string;
  from: number | string;
  to: number | string;
  currency: string;
}

export interface Technology {
  id: string;
  name: string;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  label: string;
}

const techNames = [
  "js",
  "ts",
  "python",
  "java",
  "react",
  ".net",
  "angular",
  "vuejs",
  "golang",
  "kotlin",
  "php",
  "ruby",
  "aws",
  "azure",
  "c++",
  "scala",
  "flutter",
  "c#",
  "react native",
  "sql",
];

const categoryNames = [
  "frontend",
  "backend",
  "fullstack",
  "devops",
  "mobile",
  "data-science",
  "qa",
  "security",
  "ux-ui",
  "pm",
  "cloud",
  "blockchain",
  "gamedev",
  "embedded",
  "ai-ml",
];

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
  devops: "DevOps",
  mobile: "Mobile",
  "data-science": "Data Science",
  qa: "QA / Testing",
  security: "Security",
  "ux-ui": "UX / UI Design",
  pm: "Project Management",
  cloud: "Cloud Engineering",
  blockchain: "Blockchain",
  gamedev: "Game Development",
  embedded: "Embedded Systems",
  "ai-ml": "AI / Machine Learning",
};

const techLabels: Record<string, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  python: "Python",
  java: "Java",
  react: "React",
  ".net": ".NET",
  angular: "Angular",
  vuejs: "Vue.js",
  golang: "Go",
  kotlin: "Kotlin",
  php: "PHP",
  ruby: "Ruby",
  aws: "AWS",
  azure: "Azure",
  "c++": "C++",
  scala: "Scala",
  flutter: "Flutter",
  "c#": "C#",
  "react native": "React Native",
  sql: "SQL",
};

// All offers are fully hardcoded — no Math.random(), no uuid(), no Date()
const allOffers: JobOffer[] = [
  {
    id: "offer-001",
    title: "Senior Frontend Developer",
    company: "NovaTech Solutions",
    technology: { name: "react" },
    seniority: 3,
    remote: 5,
    ua_supported: false,
    created_at: "2025-06-10T09:00:00.000Z",
    contracts: [
      {
        id: "c-001a",
        employment: "b2b",
        from: 18000,
        to: 26000,
        currency: "PLN",
      },
      {
        id: "c-001b",
        employment: "uop",
        from: 12600,
        to: 18200,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Warsaw",
  },
  {
    id: "offer-002",
    title: "Backend Engineer",
    company: "CloudPeak Systems",
    technology: { name: "python" },
    seniority: 2,
    remote: 3,
    ua_supported: true,
    created_at: "2025-06-08T14:30:00.000Z",
    contracts: [
      {
        id: "c-002a",
        employment: "b2b",
        from: 15000,
        to: 22000,
        currency: "PLN",
      },
      {
        id: "c-002b",
        employment: "uop",
        from: 10500,
        to: 15400,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Krakow",
  },
  {
    id: "offer-003",
    title: "Full Stack Developer",
    company: "DataForge Inc.",
    technology: { name: "ts" },
    seniority: 2,
    remote: 4,
    ua_supported: false,
    created_at: "2025-06-12T07:45:00.000Z",
    contracts: [
      {
        id: "c-003a",
        employment: "b2b",
        from: 16000,
        to: 24000,
        currency: "PLN",
      },
    ],
    category: "fullstack",
    city: "Remote",
  },
  {
    id: "offer-004",
    title: "DevOps Engineer",
    company: "ByteShift Labs",
    technology: { name: "aws" },
    seniority: 3,
    remote: 5,
    ua_supported: false,
    created_at: "2025-06-05T11:00:00.000Z",
    contracts: [
      {
        id: "c-004a",
        employment: "b2b",
        from: 20000,
        to: 30000,
        currency: "PLN",
      },
      {
        id: "c-004b",
        employment: "uop",
        from: 14000,
        to: 21000,
        currency: "PLN",
      },
    ],
    category: "devops",
    city: "Berlin",
  },
  {
    id: "offer-005",
    title: "Mobile App Developer",
    company: "CyberNest Digital",
    technology: { name: "flutter" },
    seniority: 2,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-14T16:20:00.000Z",
    contracts: [
      {
        id: "c-005a",
        employment: "b2b",
        from: 14000,
        to: 20000,
        currency: "PLN",
      },
    ],
    category: "mobile",
    city: "Warsaw",
  },
  {
    id: "offer-006",
    title: "Data Scientist",
    company: "QuantumGrid",
    technology: { name: "python" },
    seniority: 3,
    remote: 4,
    ua_supported: true,
    created_at: "2025-06-03T08:15:00.000Z",
    contracts: [
      {
        id: "c-006a",
        employment: "b2b",
        from: 22000,
        to: 32000,
        currency: "PLN",
      },
      {
        id: "c-006b",
        employment: "uop",
        from: 15400,
        to: 22400,
        currency: "PLN",
      },
    ],
    category: "data-science",
    city: "London",
  },
  {
    id: "offer-007",
    title: "Cloud Architect",
    company: "StackVenture",
    technology: { name: "azure" },
    seniority: 4,
    remote: 5,
    ua_supported: false,
    created_at: "2025-06-01T10:30:00.000Z",
    contracts: [
      {
        id: "c-007a",
        employment: "b2b",
        from: 25000,
        to: 38000,
        currency: "PLN",
      },
    ],
    category: "cloud",
    city: "Remote",
  },
  {
    id: "offer-008",
    title: "QA Automation Engineer",
    company: "NetPulse Corp.",
    technology: { name: "java" },
    seniority: 2,
    remote: 1,
    ua_supported: false,
    created_at: "2025-06-09T13:00:00.000Z",
    contracts: [
      {
        id: "c-008a",
        employment: "b2b",
        from: 12000,
        to: 18000,
        currency: "PLN",
      },
      {
        id: "c-008b",
        employment: "uop",
        from: 8400,
        to: 12600,
        currency: "PLN",
      },
    ],
    category: "qa",
    city: "Prague",
  },
  {
    id: "offer-009",
    title: "Machine Learning Engineer",
    company: "CodeArc Studio",
    technology: { name: "python" },
    seniority: 3,
    remote: 4,
    ua_supported: true,
    created_at: "2025-06-07T15:45:00.000Z",
    contracts: [
      {
        id: "c-009a",
        employment: "b2b",
        from: 24000,
        to: 35000,
        currency: "PLN",
      },
    ],
    category: "ai-ml",
    city: "Amsterdam",
  },
  {
    id: "offer-010",
    title: "Security Analyst",
    company: "Elevate Software",
    technology: { name: ".net" },
    seniority: 2,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-11T09:30:00.000Z",
    contracts: [
      {
        id: "c-010a",
        employment: "b2b",
        from: 16000,
        to: 23000,
        currency: "PLN",
      },
      {
        id: "c-010b",
        employment: "uop",
        from: 11200,
        to: 16100,
        currency: "PLN",
      },
    ],
    category: "security",
    city: "Warsaw",
  },
  {
    id: "offer-011",
    title: "React Native Developer",
    company: "Pixelwave Agency",
    technology: { name: "react native" },
    seniority: 2,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-04T14:10:00.000Z",
    contracts: [
      {
        id: "c-011a",
        employment: "b2b",
        from: 14000,
        to: 21000,
        currency: "PLN",
      },
    ],
    category: "mobile",
    city: "Krakow",
  },
  {
    id: "offer-012",
    title: "Java Spring Developer",
    company: "TerraCode",
    technology: { name: "java" },
    seniority: 3,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-06T12:00:00.000Z",
    contracts: [
      {
        id: "c-012a",
        employment: "b2b",
        from: 19000,
        to: 28000,
        currency: "PLN",
      },
      {
        id: "c-012b",
        employment: "uop",
        from: 13300,
        to: 19600,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Barcelona",
  },
  {
    id: "offer-013",
    title: "Python Django Developer",
    company: "ArcFlow Technologies",
    technology: { name: "python" },
    seniority: 1,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-13T10:15:00.000Z",
    contracts: [
      {
        id: "c-013a",
        employment: "b2b",
        from: 9000,
        to: 14000,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Dublin",
  },
  {
    id: "offer-014",
    title: "Node.js Backend Developer",
    company: "BrightNode",
    technology: { name: "js" },
    seniority: 2,
    remote: 4,
    ua_supported: true,
    created_at: "2025-06-02T16:00:00.000Z",
    contracts: [
      {
        id: "c-014a",
        employment: "b2b",
        from: 15000,
        to: 23000,
        currency: "PLN",
      },
      {
        id: "c-014b",
        employment: "uop",
        from: 10500,
        to: 16100,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Remote",
  },
  {
    id: "offer-015",
    title: "Angular Frontend Developer",
    company: "SkyLedger Group",
    technology: { name: "angular" },
    seniority: 2,
    remote: 1,
    ua_supported: false,
    created_at: "2025-06-10T08:30:00.000Z",
    contracts: [
      {
        id: "c-015a",
        employment: "b2b",
        from: 13000,
        to: 19000,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Stockholm",
  },
  {
    id: "offer-016",
    title: "iOS Developer",
    company: "NovaTech Solutions",
    technology: { name: "kotlin" },
    seniority: 3,
    remote: 3,
    ua_supported: false,
    created_at: "2025-05-28T11:00:00.000Z",
    contracts: [
      {
        id: "c-016a",
        employment: "b2b",
        from: 18000,
        to: 27000,
        currency: "PLN",
      },
      {
        id: "c-016b",
        employment: "uop",
        from: 12600,
        to: 18900,
        currency: "PLN",
      },
    ],
    category: "mobile",
    city: "Warsaw",
  },
  {
    id: "offer-017",
    title: "Android Developer",
    company: "CloudPeak Systems",
    technology: { name: "kotlin" },
    seniority: 2,
    remote: 2,
    ua_supported: false,
    created_at: "2025-05-30T13:45:00.000Z",
    contracts: [
      {
        id: "c-017a",
        employment: "b2b",
        from: 14000,
        to: 21000,
        currency: "PLN",
      },
    ],
    category: "mobile",
    city: "Berlin",
  },
  {
    id: "offer-018",
    title: "Blockchain Developer",
    company: "DataForge Inc.",
    technology: { name: "ts" },
    seniority: 3,
    remote: 5,
    ua_supported: false,
    created_at: "2025-06-15T07:00:00.000Z",
    contracts: [
      {
        id: "c-018a",
        employment: "b2b",
        from: 22000,
        to: 34000,
        currency: "USD",
      },
    ],
    category: "blockchain",
    city: "Remote",
  },
  {
    id: "offer-019",
    title: "WordPress Developer",
    company: "Pixelwave Agency",
    technology: { name: "php" },
    seniority: 1,
    remote: 1,
    ua_supported: false,
    created_at: "2025-06-11T15:30:00.000Z",
    contracts: [
      {
        id: "c-019a",
        employment: "b2b",
        from: 8000,
        to: 12000,
        currency: "PLN",
      },
      {
        id: "c-019b",
        employment: "uop",
        from: 5600,
        to: 8400,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Krakow",
  },
  {
    id: "offer-020",
    title: "Technical Lead",
    company: "QuantumGrid",
    technology: { name: "ts" },
    seniority: 4,
    remote: 4,
    ua_supported: false,
    created_at: "2025-05-25T09:00:00.000Z",
    contracts: [
      {
        id: "c-020a",
        employment: "b2b",
        from: 28000,
        to: 40000,
        currency: "PLN",
      },
    ],
    category: "fullstack",
    city: "Warsaw",
  },
  {
    id: "offer-021",
    title: "Software Architect",
    company: "StackVenture",
    technology: { name: "java" },
    seniority: 4,
    remote: 5,
    ua_supported: true,
    created_at: "2025-05-20T10:00:00.000Z",
    contracts: [
      {
        id: "c-021a",
        employment: "b2b",
        from: 30000,
        to: 45000,
        currency: "PLN",
      },
      {
        id: "c-021b",
        employment: "uop",
        from: 21000,
        to: 31500,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Remote",
  },
  {
    id: "offer-022",
    title: "Platform Engineer",
    company: "NetPulse Corp.",
    technology: { name: "golang" },
    seniority: 3,
    remote: 4,
    ua_supported: false,
    created_at: "2025-06-09T07:30:00.000Z",
    contracts: [
      {
        id: "c-022a",
        employment: "b2b",
        from: 20000,
        to: 29000,
        currency: "PLN",
      },
    ],
    category: "devops",
    city: "Amsterdam",
  },
  {
    id: "offer-023",
    title: "Site Reliability Engineer",
    company: "CodeArc Studio",
    technology: { name: "aws" },
    seniority: 3,
    remote: 5,
    ua_supported: false,
    created_at: "2025-06-01T14:00:00.000Z",
    contracts: [
      {
        id: "c-023a",
        employment: "b2b",
        from: 21000,
        to: 31000,
        currency: "PLN",
      },
      {
        id: "c-023b",
        employment: "uop",
        from: 14700,
        to: 21700,
        currency: "PLN",
      },
    ],
    category: "devops",
    city: "London",
  },
  {
    id: "offer-024",
    title: "Product Engineer",
    company: "Elevate Software",
    technology: { name: "react" },
    seniority: 2,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-13T11:30:00.000Z",
    contracts: [
      {
        id: "c-024a",
        employment: "b2b",
        from: 16000,
        to: 24000,
        currency: "PLN",
      },
    ],
    category: "fullstack",
    city: "Prague",
  },
  {
    id: "offer-025",
    title: "Go Microservices Developer",
    company: "TerraCode",
    technology: { name: "golang" },
    seniority: 3,
    remote: 4,
    ua_supported: false,
    created_at: "2025-06-07T08:45:00.000Z",
    contracts: [
      {
        id: "c-025a",
        employment: "b2b",
        from: 19000,
        to: 28000,
        currency: "PLN",
      },
      {
        id: "c-025b",
        employment: "uop",
        from: 13300,
        to: 19600,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Warsaw",
  },
  {
    id: "offer-026",
    title: "Vue.js Frontend Engineer",
    company: "ArcFlow Technologies",
    technology: { name: "vuejs" },
    seniority: 2,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-08T16:15:00.000Z",
    contracts: [
      {
        id: "c-026a",
        employment: "b2b",
        from: 13000,
        to: 19000,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Barcelona",
  },
  {
    id: "offer-027",
    title: "TypeScript Fullstack Dev",
    company: "BrightNode",
    technology: { name: "ts" },
    seniority: 2,
    remote: 3,
    ua_supported: true,
    created_at: "2025-06-12T13:00:00.000Z",
    contracts: [
      {
        id: "c-027a",
        employment: "b2b",
        from: 15000,
        to: 22000,
        currency: "PLN",
      },
      {
        id: "c-027b",
        employment: "uop",
        from: 10500,
        to: 15400,
        currency: "PLN",
      },
    ],
    category: "fullstack",
    city: "Dublin",
  },
  {
    id: "offer-028",
    title: "Scala Backend Developer",
    company: "SkyLedger Group",
    technology: { name: "scala" },
    seniority: 3,
    remote: 4,
    ua_supported: false,
    created_at: "2025-06-04T10:30:00.000Z",
    contracts: [
      {
        id: "c-028a",
        employment: "b2b",
        from: 22000,
        to: 33000,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Remote",
  },
  {
    id: "offer-029",
    title: "Flutter Mobile Developer",
    company: "CyberNest Digital",
    technology: { name: "flutter" },
    seniority: 1,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-14T09:00:00.000Z",
    contracts: [
      {
        id: "c-029a",
        employment: "b2b",
        from: 9000,
        to: 14000,
        currency: "PLN",
      },
      {
        id: "c-029b",
        employment: "uop",
        from: 6300,
        to: 9800,
        currency: "PLN",
      },
    ],
    category: "mobile",
    city: "Krakow",
  },
  {
    id: "offer-030",
    title: "AWS Solutions Architect",
    company: "ByteShift Labs",
    technology: { name: "aws" },
    seniority: 4,
    remote: 5,
    ua_supported: false,
    created_at: "2025-05-26T12:00:00.000Z",
    contracts: [
      {
        id: "c-030a",
        employment: "b2b",
        from: 28000,
        to: 42000,
        currency: "PLN",
      },
    ],
    category: "cloud",
    city: "Remote",
  },
  {
    id: "offer-031",
    title: "Azure DevOps Specialist",
    company: "NovaTech Solutions",
    technology: { name: "azure" },
    seniority: 3,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-06T14:30:00.000Z",
    contracts: [
      {
        id: "c-031a",
        employment: "b2b",
        from: 19000,
        to: 28000,
        currency: "PLN",
      },
      {
        id: "c-031b",
        employment: "uop",
        from: 13300,
        to: 19600,
        currency: "PLN",
      },
    ],
    category: "devops",
    city: "Berlin",
  },
  {
    id: "offer-032",
    title: "Embedded Systems Engineer",
    company: "QuantumGrid",
    technology: { name: "c++" },
    seniority: 3,
    remote: 1,
    ua_supported: false,
    created_at: "2025-06-03T10:00:00.000Z",
    contracts: [
      {
        id: "c-032a",
        employment: "b2b",
        from: 17000,
        to: 25000,
        currency: "PLN",
      },
    ],
    category: "embedded",
    city: "Warsaw",
  },
  {
    id: "offer-033",
    title: "Rust Systems Developer",
    company: "StackVenture",
    technology: { name: "c++" },
    seniority: 3,
    remote: 4,
    ua_supported: true,
    created_at: "2025-06-02T09:15:00.000Z",
    contracts: [
      {
        id: "c-033a",
        employment: "b2b",
        from: 20000,
        to: 30000,
        currency: "EUR",
      },
    ],
    category: "backend",
    city: "Amsterdam",
  },
  {
    id: "offer-034",
    title: "GraphQL API Developer",
    company: "NetPulse Corp.",
    technology: { name: "ts" },
    seniority: 2,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-10T11:45:00.000Z",
    contracts: [
      {
        id: "c-034a",
        employment: "b2b",
        from: 15000,
        to: 22000,
        currency: "PLN",
      },
      {
        id: "c-034b",
        employment: "uop",
        from: 10500,
        to: 15400,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Stockholm",
  },
  {
    id: "offer-035",
    title: "Kubernetes Engineer",
    company: "CodeArc Studio",
    technology: { name: "aws" },
    seniority: 3,
    remote: 5,
    ua_supported: false,
    created_at: "2025-06-05T08:00:00.000Z",
    contracts: [
      {
        id: "c-035a",
        employment: "b2b",
        from: 22000,
        to: 32000,
        currency: "PLN",
      },
    ],
    category: "devops",
    city: "Remote",
  },
  {
    id: "offer-036",
    title: "PHP Laravel Developer",
    company: "Pixelwave Agency",
    technology: { name: "php" },
    seniority: 2,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-11T13:30:00.000Z",
    contracts: [
      {
        id: "c-036a",
        employment: "b2b",
        from: 12000,
        to: 18000,
        currency: "PLN",
      },
      {
        id: "c-036b",
        employment: "uop",
        from: 8400,
        to: 12600,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Krakow",
  },
  {
    id: "offer-037",
    title: "Ruby on Rails Developer",
    company: "TerraCode",
    technology: { name: "ruby" },
    seniority: 2,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-08T10:00:00.000Z",
    contracts: [
      {
        id: "c-037a",
        employment: "b2b",
        from: 14000,
        to: 21000,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "London",
  },
  {
    id: "offer-038",
    title: "C# .NET Developer",
    company: "SkyLedger Group",
    technology: { name: "c#" },
    seniority: 2,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-09T15:00:00.000Z",
    contracts: [
      {
        id: "c-038a",
        employment: "b2b",
        from: 15000,
        to: 23000,
        currency: "PLN",
      },
      {
        id: "c-038b",
        employment: "uop",
        from: 10500,
        to: 16100,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Prague",
  },
  {
    id: "offer-039",
    title: "UX/UI Designer",
    company: "Elevate Software",
    technology: { name: "js" },
    seniority: 2,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-13T08:30:00.000Z",
    contracts: [
      {
        id: "c-039a",
        employment: "b2b",
        from: 12000,
        to: 19000,
        currency: "PLN",
      },
    ],
    category: "ux-ui",
    city: "Warsaw",
  },
  {
    id: "offer-040",
    title: "Project Manager",
    company: "ArcFlow Technologies",
    technology: { name: "js" },
    seniority: 3,
    remote: 4,
    ua_supported: false,
    created_at: "2025-06-07T12:15:00.000Z",
    contracts: [
      {
        id: "c-040a",
        employment: "b2b",
        from: 16000,
        to: 24000,
        currency: "PLN",
      },
      {
        id: "c-040b",
        employment: "uop",
        from: 11200,
        to: 16800,
        currency: "PLN",
      },
    ],
    category: "pm",
    city: "Berlin",
  },
  {
    id: "offer-041",
    title: "Game Developer",
    company: "ByteShift Labs",
    technology: { name: "c++" },
    seniority: 2,
    remote: 1,
    ua_supported: false,
    created_at: "2025-06-04T11:00:00.000Z",
    contracts: [
      {
        id: "c-041a",
        employment: "b2b",
        from: 14000,
        to: 22000,
        currency: "PLN",
      },
    ],
    category: "gamedev",
    city: "Warsaw",
  },
  {
    id: "offer-042",
    title: "SQL Database Engineer",
    company: "BrightNode",
    technology: { name: "sql" },
    seniority: 3,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-06T09:45:00.000Z",
    contracts: [
      {
        id: "c-042a",
        employment: "b2b",
        from: 17000,
        to: 25000,
        currency: "PLN",
      },
      {
        id: "c-042b",
        employment: "uop",
        from: 11900,
        to: 17500,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Remote",
  },
  {
    id: "offer-043",
    title: "Senior React Developer",
    company: "CyberNest Digital",
    technology: { name: "react" },
    seniority: 3,
    remote: 4,
    ua_supported: true,
    created_at: "2025-06-12T14:30:00.000Z",
    contracts: [
      {
        id: "c-043a",
        employment: "b2b",
        from: 20000,
        to: 29000,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Amsterdam",
  },
  {
    id: "offer-044",
    title: "Angular Enterprise Developer",
    company: "DataForge Inc.",
    technology: { name: "angular" },
    seniority: 3,
    remote: 2,
    ua_supported: false,
    created_at: "2025-05-29T10:00:00.000Z",
    contracts: [
      {
        id: "c-044a",
        employment: "b2b",
        from: 18000,
        to: 26000,
        currency: "PLN",
      },
      {
        id: "c-044b",
        employment: "uop",
        from: 12600,
        to: 18200,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Dublin",
  },
  {
    id: "offer-045",
    title: "Junior Python Developer",
    company: "CloudPeak Systems",
    technology: { name: "python" },
    seniority: 1,
    remote: 2,
    ua_supported: false,
    created_at: "2025-06-15T08:00:00.000Z",
    contracts: [
      {
        id: "c-045a",
        employment: "b2b",
        from: 8000,
        to: 13000,
        currency: "PLN",
      },
    ],
    category: "backend",
    city: "Krakow",
  },
  {
    id: "offer-046",
    title: "Scrum Master",
    company: "NovaTech Solutions",
    technology: { name: "js" },
    seniority: 3,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-10T16:00:00.000Z",
    contracts: [
      {
        id: "c-046a",
        employment: "b2b",
        from: 16000,
        to: 24000,
        currency: "PLN",
      },
      {
        id: "c-046b",
        employment: "uop",
        from: 11200,
        to: 16800,
        currency: "PLN",
      },
    ],
    category: "pm",
    city: "Warsaw",
  },
  {
    id: "offer-047",
    title: "AI Research Engineer",
    company: "QuantumGrid",
    technology: { name: "python" },
    seniority: 4,
    remote: 5,
    ua_supported: false,
    created_at: "2025-05-22T11:30:00.000Z",
    contracts: [
      {
        id: "c-047a",
        employment: "b2b",
        from: 30000,
        to: 45000,
        currency: "EUR",
      },
    ],
    category: "ai-ml",
    city: "Remote",
  },
  {
    id: "offer-048",
    title: "Frontend Performance Engineer",
    company: "Elevate Software",
    technology: { name: "react" },
    seniority: 3,
    remote: 3,
    ua_supported: false,
    created_at: "2025-06-14T12:00:00.000Z",
    contracts: [
      {
        id: "c-048a",
        employment: "b2b",
        from: 19000,
        to: 27000,
        currency: "PLN",
      },
      {
        id: "c-048b",
        employment: "uop",
        from: 13300,
        to: 18900,
        currency: "PLN",
      },
    ],
    category: "frontend",
    city: "Barcelona",
  },
];

const ITEMS_PER_PAGE = 12;

export interface MockQueryResult {
  data: JobOffer[];
  pages: number;
  count: number;
  currentPage: number;
}

export function getStaticJobOffers(
  searchParams: URLSearchParams,
): MockQueryResult {
  let filtered = [...allOffers];

  const techFilters = searchParams.getAll("by_technology[]");
  if (techFilters.length > 0) {
    filtered = filtered.filter((o) => techFilters.includes(o.technology.name));
  }

  const catFilters = searchParams.getAll("by_category[]");
  if (catFilters.length > 0) {
    filtered = filtered.filter((o) => catFilters.includes(o.category));
  }

  const seniorityFilters = searchParams.getAll("by_seniority[]").map(Number);
  if (seniorityFilters.length > 0) {
    filtered = filtered.filter((o) => seniorityFilters.includes(o.seniority));
  }

  const salaryFrom = Number(searchParams.get("by_salary[from]")) || null;
  const salaryTo = Number(searchParams.get("by_salary[to]")) || null;
  if (salaryFrom || salaryTo) {
    filtered = filtered.filter((o) => {
      const maxSalary = o.contracts.reduce((max, c) => {
        const to = typeof c.to === "number" ? c.to : 0;
        return to > max ? to : max;
      }, 0);
      if (salaryFrom && maxSalary < salaryFrom) return false;
      if (salaryTo && maxSalary > salaryTo) return false;
      return true;
    });
  }

  const sort = searchParams.get("sort");
  if (sort === "created_at") {
    filtered.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  } else if (sort === "-created_at") {
    filtered.sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    );
  }

  const page = Number(searchParams.get("page")) || 1;
  const count = filtered.length;
  const pages = Math.ceil(count / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const data = filtered.slice(start, start + ITEMS_PER_PAGE);

  return { data, pages, count, currentPage: page };
}

export function getStaticTechnologies(): Technology[] {
  return techNames.map((name, i) => ({
    id: `tech-${String(i + 1).padStart(3, "0")}`,
    name,
    label: techLabels[name] || name,
  }));
}

export function getStaticCategories(): Category[] {
  return categoryNames.map((name, i) => ({
    id: `cat-${String(i + 1).padStart(3, "0")}`,
    name,
    label: categoryLabels[name] || name,
  }));
}
