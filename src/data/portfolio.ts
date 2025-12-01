import { 
  Experience, 
  Skill, 
  Project, 
  Education, 
  SocialLinks,
  Recommendation 
} from '@/types';

import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export const personalInfo = {
  name: 'Jahnavi Reddy Bheemavarapu',
  roles: ['Software Engineer', 'Backend Developer', 'Full-Stack Developer'],
  email: 'jahnavireddy.bh@gmail.com',
  location: 'Fort Wayne, IN, USA (Open to relocation)',
  greeting: "Hi, I'm Jahnavi!",
  description:
    "I’m a software engineer who enjoys turning messy, real-world problems into reliable backend services and simple, intuitive experiences. I like working end-to-end—designing APIs, wiring data pipelines, and shipping features that actually make someone’s day easier.",
  aboutText: [
    "Hello, I’m Jahnavi, a developer based in the United States. I love building tools that are simple, intuitive, and genuinely useful. I completed my Master’s in Computer Science at the University of Florida, where I focused on full-stack development and backend engineering.",
    "I’ve worked across automation, microservices, and data-driven systems — most recently as a Software Engineer at UnitedHealth Group, improving claim workflows and simplifying processes through backend logic and clean, reliable code. I’m currently looking for a developer role where I can continue creating thoughtful, user-centered systems. Hire me!",
  ],
  resumeUrl: '/resume.pdf',
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'UnitedHealth Group',
    duration: 'Dec 2024 – Present',
    description:
      'Automate healthcare claim validation using Python, REST APIs, and SQL-backed pipelines. Parse scanned provider/member documents and Excel/CSV feeds into internal databases, add fallbacks for API failures, and ship production updates through Azure Pipelines and Bitbucket.',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'University of Florida',
    duration: 'Jul 2023 – May 2024',
    description:
      'Built and deployed a high-availability admin dashboard with Java, Spring Boot, Hibernate, and React. Added D3.js visualizations for shark attack geodata, wired CI/CD with Jenkins and Docker, and collaborated in an Agile team to support operational reporting for campus stakeholders.',
  },
  {
    id: '3',
    title: 'Full Stack Developer (Unpaid)',
    company: 'University of Florida',
    duration: 'Jan 2023 – May 2023',
    description:
      'Engineered a Spring MVC backend that streamed real-time data via Kafka and stored assets in AWS S3. Developed a responsive admin UI with React, HTML5, CSS3, and Material-UI and implemented a Java-based traffic monitoring module for distributed data collection.',
  },
  {
    id: '4',
    title: 'Guidewire Software Developer',
    company: 'Fusion Software Solutions',
    duration: 'Dec 2020 – Nov 2022',
    description:
      'Configured ClaimCenter PCFs, plug-ins, batch jobs, and business rules to support insurance claims workflows. Built custom screens for exposure and incident creation, updated financials, and worked extensively with Oracle DB and SQL Server for policy and claims data.',
  },
  {
    id: '5',
    title: 'Software Developer Intern',
    company: 'Fusion Software Solutions',
    duration: 'Apr 2020 – Aug 2020',
    description:
      'Developed an online insurance management web application using Java, Spring, HTML, CSS, and MySQL. Designed database schemas, implemented CRUD operations, and collaborated with the team on debugging, testing, and meeting release timelines.',
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React.js', icon: '⚛️', category: 'frontend' },
  { id: '2', name: 'Angular', icon: '🅰️', category: 'frontend' },
  { id: '3', name: 'JavaScript', icon: '📜', category: 'frontend' },
  { id: '4', name: 'TypeScript', icon: '🔷', category: 'frontend' },
  { id: '5', name: 'HTML5', icon: '🧱', category: 'frontend' },
  { id: '6', name: 'CSS3', icon: '🎨', category: 'frontend' },
  { id: '7', name: 'React Native', icon: '📱', category: 'frontend' },
  { id: '8', name: 'D3.js', icon: '📊', category: 'frontend' },

  // Backend
  { id: '10', name: 'Java', icon: '☕', category: 'backend' },
  { id: '11', name: 'Spring Boot', icon: '🍃', category: 'backend' },
  { id: '12', name: 'Python', icon: '🐍', category: 'backend' },
  { id: '13', name: 'Node.js', icon: '🟢', category: 'backend' },
  { id: '14', name: 'Express', icon: '⚡', category: 'backend' },
  { id: '15', name: 'C# / .NET', icon: '#', category: 'backend' },
  { id: '16', name: 'REST APIs', icon: '🔗', category: 'backend' },
  { id: '17', name: 'Microservices', icon: '📦', category: 'backend' },

  // DevOps
  { id: '20', name: 'Docker', icon: '🐳', category: 'devops' },
  { id: '21', name: 'Kubernetes', icon: '☸️', category: 'devops' },
  { id: '22', name: 'AWS', icon: '☁️', category: 'devops' },
  { id: '23', name: 'Azure', icon: '🔷', category: 'devops' },
  { id: '24', name: 'CI/CD (Jenkins, Azure Pipelines)', icon: '🚀', category: 'devops' },
  { id: '25', name: 'Git & Bitbucket', icon: '🔧', category: 'devops' },

  // Database
  { id: '30', name: 'MySQL', icon: '🐬', category: 'database' },
  { id: '31', name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { id: '32', name: 'Oracle DB', icon: '📀', category: 'database' },
  { id: '33', name: 'SQL Server', icon: '🗄️', category: 'database' },
  { id: '34', name: 'NoSQL / MongoDB', icon: '🍃', category: 'database' },

  // Messaging / Data
  { id: '40', name: 'Kafka', icon: '📡', category: 'messaging' },
  { id: '41', name: 'Data Pipelines & ETL', icon: '🛠️', category: 'messaging' },

  // Testing
  { id: '50', name: 'JUnit', icon: '✅', category: 'testing' },
  { id: '51', name: 'Selenium', icon: '🧪', category: 'testing' },
  { id: '52', name: 'Postman', icon: '📮', category: 'testing' },

  // Other
  { id: '60', name: 'Agile / Scrum', icon: '🏃', category: 'other-skills' },
  { id: '61', name: 'Jira', icon: '🧩', category: 'other-skills' },
  { id: '62', name: 'Confluence', icon: '📘', category: 'other-skills' },
  { id: '63', name: 'Figma', icon: '🎯', category: 'other-skills' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'EShop',
    description:
      'Designed and implemented an e-commerce application where admins can manage products and customers can browse and place orders. Added secure authentication with .NET and JWT-based access levels and tuned APIs to keep server response times under 3 seconds.',
    technologies: ['.NET', 'C#', 'JWT', 'SQL', 'REST APIs'],
    links: { github: '', screenshots: '', publication: '' },
    image: '/Project1.png',
  },
  {
    id: '2',
    title: 'UPSC Pre',
    description:
      'Built an Android learning platform using Python, Flask, and Elasticsearch to help students prepare for UPSC exams. Collaborated with a small team to deliver search and content features and helped the app reach a top ten ranking among UPSC-related apps on the Play Store.',
    technologies: ['Python', 'Flask', 'Elasticsearch', 'Android'],
    links: { github: '', screenshots: '', publication: '' },
    image: '/Project2.png',
  },
  {
    id: '3',
    title: 'GatorShop',
    description:
      'Developed a web app for University of Florida students to discover affordable, local shopping deals near campus. Implemented authentication with JWT and Passport, and connected the app to an SQL database via APIs written in Go.',
    technologies: ['Go', 'JWT', 'Passport', 'SQL', 'REST APIs'],
    links: { github: '', screenshots: '', publication: '' },
    image: '/Project3.jpg',
  },
  {
    id: '4',
    title: 'Action Identification in 2D Images',
    description:
      'Implemented deep learning models to classify human actions from 2D images using the Stanford-40 dataset. Compared ResNet-50, VGG16/19, EfficientNet-B7, and Inception V3—Inception V3 performed best.',
    technologies: ['Python', 'TensorFlow', 'CNNs', 'Computer Vision'],
    links: { github: '', screenshots: '', publication: '' },
    image: '/Project3.jpg',
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'MS in Computer Science Engineering',
    institution: 'University of Florida, Gainesville, FL',
    duration: 'Aug 2023 – Dec 2024',
    description:
      'Coursework included Distributed Systems, Advanced Data Structures, Machine Learning, Computer Vision, Big Data Technologies, and Enterprise Web Applications.',
    type: 'education',
  },
  {
    id: '2',
    degree: 'Microsoft Certified: Azure Fundamentals',
    institution: 'Microsoft',
    duration: 'Certification',
    description:
      'Fundamentals of cloud concepts, Azure services, security, and cost management.',
    type: 'certification',
  },
  {
    id: '3',
    degree: 'AWS Academy Cloud Foundations',
    institution: 'AWS Academy',
    duration: 'Certification',
    description:
      'Core AWS services, cloud concepts, security, architecture, and pricing models.',
    type: 'certification',
  },
  {
    id: '4',
    degree: 'Oracle Certified Multicloud Architect',
    institution: 'Oracle',
    duration: 'Certification',
    description:
      'DevOps & multicloud design patterns across deployment automation and resilient infrastructure.',
    type: 'certification',
  },
  {
    id: '5',
    degree: 'Oracle Certified DevOps Professional',
    institution: 'Oracle',
    duration: 'Certification',
    description:
      'Automation, monitoring, CI/CD, and large-scale system infrastructure.',
    type: 'certification',
  },
];

export const socialLinks: SocialLinks[] = [
  {
    name: 'GitHub',
    icon: React.createElement(Github, { size: 18 }),
    url: 'https://github.com/Jahnavireddyb',
  },
  {
    name: 'LinkedIn',
    icon: React.createElement(Linkedin, { size: 18 }),
    url: 'https://www.linkedin.com/in/your-linkedin',
  },
  {
    name: 'Email',
    icon: React.createElement(Mail, { size: 18 }),
    url: 'mailto:jahnavireddy.bh@gmail.com',
  },
];

// Empty so the Recommendations section disappears safely
export const recommendations: Recommendation[] = [];