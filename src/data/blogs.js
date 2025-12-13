export const blogsData = [
  {
    id: 1,
    title: "Building a Real-time Chat App with Socket.io",
    excerpt:
      "Learn how I built Convo - a full-stack real-time chat application using React, Node.js, and Socket.io with JWT authentication.",
    content: `
      In this article, I'll walk you through the process of building a real-time chat application from scratch.
      
      ## Tech Stack
      - React for the frontend
      - Node.js + Express for the backend
      - Socket.io for real-time communication
      - MongoDB for data storage
      - JWT for authentication
      
      ## Key Features
      1. Real-time messaging
      2. User authentication
      3. Online status indicators
      4. Message history
      
      Stay tuned for the full tutorial!
    `,
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Tutorial",
    date: "2025-12-10",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How I Built an AI-Powered Note Summarizer",
    excerpt:
      "Discover the process behind NoteSummarizer AI - an intelligent app that uses OpenAI to transform your notes with smart summarization.",
    content: `
      NoteSummarizer AI was born from my need to quickly digest large amounts of notes and documents.
      
      ## The Problem
      Reading through pages of notes is time-consuming. I wanted an AI assistant to extract key points.
      
      ## The Solution
      Using OpenAI's GPT API, I built an app that:
      - Accepts text, file uploads (.txt, .md)
      - Supports voice input
      - Generates concise summaries
      
      ## Lessons Learned
      - API rate limiting strategies
      - Handling large text inputs
      - Building intuitive UI for AI features
    `,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI/ML", "OpenAI", "React", "NLP"],
    category: "Project Breakdown",
    date: "2025-12-05",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 3,
    title: "JWT Authentication: A Complete Guide",
    excerpt:
      "Understanding JSON Web Tokens and implementing secure authentication in your Node.js applications.",
    content: `
      JSON Web Tokens (JWT) are a secure way to handle authentication in modern web applications.
      
      ## What is JWT?
      JWT is a compact, URL-safe token format that contains claims about the user.
      
      ## Structure
      A JWT consists of three parts:
      1. Header - Algorithm and token type
      2. Payload - User data and claims
      3. Signature - Verification hash
      
      ## Implementation
      I'll show you how to implement JWT in a Node.js + Express application with best practices.
    `,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["Node.js", "Security", "JWT", "Authentication"],
    category: "Tutorial",
    date: "2025-11-28",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Creating Stunning Animations with Framer Motion",
    excerpt:
      "A deep dive into Framer Motion - the animation library that powers smooth, professional animations in React.",
    content: `
      Framer Motion makes creating animations in React incredibly intuitive and powerful.
      
      ## Why Framer Motion?
      - Declarative syntax
      - Gesture support
      - Layout animations
      - Exit animations
      
      ## Basic Example
      The motion component is the foundation of all animations in Framer Motion.
      
      ## Advanced Techniques
      - Stagger children
      - Scroll-triggered animations
      - SVG path animations
    `,
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80",
    tags: ["React", "Animation", "Framer Motion", "UI/UX"],
    category: "Tutorial",
    date: "2025-11-20",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "My Developer Portfolio Journey",
    excerpt:
      "How I built my portfolio website using React, Vite, and Tailwind CSS v4 with modern design principles.",
    content: `
      Every developer needs a portfolio. Here's how I built mine.
      
      ## Design Decisions
      - Dark theme for modern look
      - Smooth animations for engagement
      - Mobile-first approach
      
      ## Tech Choices
      - React 19 for the latest features
      - Vite for fast development
      - Tailwind CSS v4 for styling
      - Framer Motion for animations
      
      ## SEO Optimization
      Don't forget meta tags, sitemap, and Google Search Console!
    `,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Portfolio", "Tailwind CSS", "Vite"],
    category: "Personal",
    date: "2025-11-15",
    readTime: "5 min read",
    featured: false,
  },
];

export const blogCategories = [
  "All",
  "Tutorial",
  "Project Breakdown",
  "Personal",
];
