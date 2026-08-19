import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  gcp: brand("Google Cloud", "googlecloud-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PyTorch</span>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">FastAPI</span>,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">K8s</span>,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MySQL</span>,
  },
  oracle: {
    title: "Oracle DB",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Oracle</span>,
  },
  jwt: {
    title: "JWT Auth",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JWT</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "crude-oil-leakage-detection-system",
    category: "Research",
    title: "Crude Oil Leakage Detection System",
    src: "/assets/projects-screenshots/crude-oil/dashboard.png",
    screenshots: ["/assets/projects-screenshots/crude-oil/dashboard.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Arduino-based IoT system for real-time pipeline monitoring and industrial safety.
          </TypographyP>
          <TypographyP className="font-mono">
            This project combines turbidity and flow sensing to monitor pipeline integrity, detect crude oil leakage, and prevent industrial hazards while improving environmental safety.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Purpose</TypographyH3>
          <p className="font-mono mb-2">
            • Monitor pipeline integrity<br />
            • Detect and monitor crude oil leakage<br />
            • Use turbidity sensing and flow sensing<br />
            • Enable real-time monitoring<br />
            • Prevent industrial hazards and improve environmental safety
          </p>

          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">
            Arduino, IoT, Environmental Technology, Embedded Systems, Sensor-based systems.
          </p>
        </div>
      );
    },
  },
  {
    id: "eco-tracker-application",
    category: "Development",
    title: "Eco Tracker Application",
    src: "/assets/projects-screenshots/ecotracker/dashboard.png",
    screenshots: ["/assets/projects-screenshots/ecotracker/dashboard.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.gcp, PROJECT_SKILLS.node],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A sustainability-focused application designed to monitor environmental metrics with scalable cloud application principles.
          </TypographyP>
          <TypographyP className="font-mono">
            Built during the Google Cloud HackSprint, Eco Tracker explores sustainability monitoring and the potential of cloud-powered solutions for environmental technology and data-informed decision-making.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Focus Areas</TypographyH3>
          <p className="font-mono mb-2">
            Google Cloud, SaaS, Sustainability, Sustainable technological solutions, Environmental technology.
          </p>
        </div>
      );
    },
  },
  {
    id: "ongc-vannaquery-platform",
    category: "AI / Full-Stack",
    title: "ONGC VannaQuery Platform",
    src: "/assets/projects-screenshots/vannaquery/ongc-vanna-dashboard.jpg",
    screenshots: [
      "/assets/projects-screenshots/vannaquery/ongc-vanna-dashboard.jpg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.oracle,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <div className="my-6 overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <img
              src="/assets/projects-screenshots/vannaquery/ongc-vanna-dashboard.jpg"
              alt="ONGC Vanna Command Center Dashboard"
              className="w-full object-cover"
            />
          </div>
          <TypographyP className="font-mono text-2xl text-center">
            🚀 Excited to share a project that has been an incredible learning experience during my internship at ONGC.
          </TypographyP>
          <TypographyP className="font-mono">
            Over the past few weeks, I had the opportunity to work on an AI-powered platform that makes interacting with databases much easier. Instead of writing complex SQL queries, users can simply ask questions in plain English and instantly get the information they need.
          </TypographyP>
          <TypographyP className="font-mono">
            After thorough testing and validation, the platform was successfully deployed on ONGC's server and is now being used internally, making database access more intuitive and efficient.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            🤖 AI-powered Natural Language-to-SQL Generation<br />
            🗄️ Multi-Database Support (PostgreSQL, MySQL, Oracle &amp; MongoDB)<br />
            🔐 JWT Authentication &amp; Role-Based Access Control<br />
            🔑 API Token Management<br />
            📊 Interactive Dashboard &amp; Analytics<br />
            📑 Database Schema Explorer<br />
            📝 Audit Logging &amp; Query Tracking<br />
            ⚡ Redis Integration<br />
            🐳 Dockerized Microservices Architecture<br />
            ☸️ Kubernetes-Ready Deployment<br />
            🌐 React Frontend with FastAPI Backend
          </p>
        </div>
      );
    },
  },
  {
    id: "generative-ai-house-layout",
    category: "AI / Research",
    title: "Generative AI House Layout Designer",
    src: "/assets/projects-screenshots/housegan/epoch10.jpg",
    screenshots: [
      "/assets/projects-screenshots/housegan/epoch10.jpg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.pytorch],
    },
    live: "#",
    get content() {
      return (
        <div>
          <div className="my-6 overflow-hidden rounded-xl border border-white/10 shadow-2xl flex justify-center bg-black/40 p-4">
            <img
              src="/assets/projects-screenshots/housegan/epoch10.jpg"
              alt="Generated Layout (1600 sqft, 4 rooms)"
              className="max-h-[400px] object-contain rounded-lg"
            />
          </div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated house layout design using a Conditional GAN model.
          </TypographyP>
          <TypographyP className="font-mono">
            Built a Generative AI model for automated house layout design using a Conditional GAN. The model takes inputs such as area and number of rooms and generates corresponding layout structures.
          </TypographyP>
          <TypographyP className="font-mono">
            This result is from an early training stage (Image 1 generated after 10 epochs), where initial spatial patterns are beginning to emerge.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Status &amp; Next Steps</TypographyH3>
          <p className="font-mono mb-2">
            Currently working on improving output clarity and making the model more aligned with real-world architectural constraints.
          </p>
        </div>
      );
    },
  },
];

export default projects;
