import {
  Home,
  User,
  Settings,
  FileText,
  Folder,
  Cloud,
  Users,
  Zap,
  Shield,
  BarChart2,
  Hammer,
} from "lucide-react";

export const menuData = [
  {
    id: 1,
    label: "Software Solutions",
    description: "Custom software development and deployment",
    icon: FileText,
    children: [
      {
        id: 2,
        label: "Web Development",
        description: "Build modern web apps",
        icon: FileText,
        children: [
          { id: 27, label: "React", description: "React.js projects", icon: FileText },
          { id: 28, label: "Vue", description: "Vue.js projects", icon: FileText },
          { id: 29, label: "Angular", description: "Angular projects", icon: FileText },
        ],
      },
      {
        id: 3,
        label: "Mobile Apps",
        description: "iOS and Android apps",
        icon: FileText,
        children: [
          { id: 33, label: "iOS", description: "iPhone & iPad apps", icon: FileText },
          { id: 34, label: "Android", description: "Android apps", icon: FileText },
        ],
      },
      {
        id: 4,
        label: "Enterprise Software",
        description: "Custom business solutions",
        icon: FileText,
        children: [
          { id: 35, label: "ERP", description: "Enterprise resource planning", icon: FileText },
          { id: 36, label: "CRM", description: "Customer relationship management", icon: FileText },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure",
    icon: Cloud,
    children: [
      {
        id: 6,
        label: "AWS Services",
        description: "Amazon cloud services",
        icon: Cloud,
        children: [
          { id: 37, label: "EC2", description: "Virtual servers", icon: Cloud },
          { id: 38, label: "S3", description: "Storage services", icon: Cloud },
          { id: 39, label: "Lambda", description: "Serverless computing", icon: Cloud },
        ],
      },
      {
        id: 7,
        label: "Azure Solutions",
        description: "Microsoft cloud services",
        icon: Cloud,
        children: [
          { id: 40, label: "Virtual Machines", description: "Azure VMs", icon: Cloud },
          { id: 41, label: "Blob Storage", description: "Azure storage services", icon: Cloud },
        ],
      },
      {
        id: 8,
        label: "Infrastructure Management",
        description: "Maintain IT infrastructure",
        icon: Cloud,
        children: [
          { id: 42, label: "Network Monitoring", description: "Track network health", icon: Cloud },
          { id: 43, label: "Server Maintenance", description: "Manage servers", icon: Cloud },
        ],
      },
    ],
  },
  {
    id: 9,
    label: "Consulting Services",
    description: "Expert guidance and strategic support",
    icon: Users,
    children: [
      {
        id: 10,
        label: "Business Consulting",
        description: "Optimize business processes",
        icon: Users,
        children: [
          { id: 44, label: "Process Optimization", description: "Improve workflows", icon: Users },
          { id: 45, label: "Cost Reduction", description: "Reduce expenses", icon: Users },
        ],
      },
      {
        id: 11,
        label: "Strategy & Planning",
        description: "Long-term growth plans",
        icon: Users,
        children: [
          { id: 46, label: "Market Analysis", description: "Analyze market trends", icon: Users },
          { id: 47, label: "Roadmap Planning", description: "Plan strategic initiatives", icon: Users },
        ],
      },
    ],
  },
  {
    id: 12,
    label: "Digital Transformation",
    description: "Comprehensive digital transformation strategies",
    icon: Zap,
    children: [
      {
        id: 13,
        label: "Automation",
        description: "Automate workflows",
        icon: Zap,
        children: [
          { id: 48, label: "RPA", description: "Robotic Process Automation", icon: Zap },
          { id: 49, label: "AI Bots", description: "AI-powered bots", icon: Zap },
        ],
      },
      {
        id: 14,
        label: "Cloud Migration",
        description: "Move to cloud efficiently",
        icon: Zap,
        children: [
          { id: 50, label: "Lift & Shift", description: "Move as-is", icon: Zap },
          { id: 51, label: "Re-architect", description: "Optimize for cloud", icon: Zap },
        ],
      },
    ],
  },
  {
    id: 15,
    label: "Cybersecurity Consulting",
    description: "Comprehensive cybersecurity services and solutions",
    icon: Shield,
    children: [
      {
        id: 16,
        label: "Security Audits",
        description: "Assess your system security",
        icon: Shield,
        children: [
          { id: 52, label: "Vulnerability Scan", description: "Find vulnerabilities", icon: Shield },
          { id: 53, label: "Penetration Testing", description: "Simulate attacks", icon: Shield },
        ],
      },
      {
        id: 17,
        label: "Threat Management",
        description: "Protect against attacks",
        icon: Shield,
        children: [
          { id: 54, label: "Intrusion Detection", description: "Detect attacks", icon: Shield },
          { id: 55, label: "Incident Response", description: "Handle security incidents", icon: Shield },
        ],
      },
    ],
  },
  {
    id: 18,
    label: "Data & Analytics Consulting",
    description: "Data strategy, analytics, and business intelligence",
    icon: BarChart2,
    children: [
      {
        id: 19,
        label: "Data Analysis",
        description: "Extract insights from data",
        icon: BarChart2,
        children: [
          { id: 56, label: "Descriptive Analytics", description: "Summarize data", icon: BarChart2 },
          { id: 57, label: "Predictive Analytics", description: "Forecast trends", icon: BarChart2 },
        ],
      },
      {
        id: 20,
        label: "Business Intelligence",
        description: "Data-driven decision making",
        icon: BarChart2,
        children: [
          { id: 58, label: "Dashboarding", description: "Visualize KPIs", icon: BarChart2 },
          { id: 59, label: "Reporting", description: "Generate reports", icon: BarChart2 },
        ],
      },
    ],
  },
  {
    id: 21,
    label: "DevOps & Platform Engineering",
    description: "DevOps transformation and platform engineering",
    icon: Hammer,
    children: [
      {
        id: 22,
        label: "CI/CD Pipelines",
        description: "Automate deployment",
        icon: Hammer,
        children: [
          { id: 60, label: "Jenkins", description: "Pipeline automation", icon: Hammer },
          { id: 61, label: "GitHub Actions", description: "CI/CD workflows", icon: Hammer },
        ],
      },
      {
        id: 23,
        label: "Platform Setup",
        description: "Build scalable platforms",
        icon: Hammer,
        children: [
          { id: 62, label: "Kubernetes", description: "Container orchestration", icon: Hammer },
          { id: 63, label: "Docker", description: "Containerization", icon: Hammer },
        ],
      },
    ],
  },
  {
    id: 24,
    label: "Support & Maintenance",
    description: "Ongoing maintenance and support services",
    icon: Hammer,
    children: [
      {
        id: 25,
        label: "Helpdesk Support",
        description: "User assistance",
        icon: Hammer,
        children: [
          { id: 64, label: "Ticketing", description: "Manage tickets", icon: Hammer },
          { id: 65, label: "Live Chat", description: "Instant support", icon: Hammer },
        ],
      },
      {
        id: 26,
        label: "System Maintenance",
        description: "Update & monitor systems",
        icon: Hammer,
        children: [
          { id: 66, label: "Patch Management", description: "Update systems", icon: Hammer },
          { id: 67, label: "Monitoring", description: "Track system health", icon: Hammer },
        ],
      },
    ],
  },
];
