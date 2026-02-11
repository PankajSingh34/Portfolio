export const blogsData = [
  {
    id: 1,
    title: "Building a Real-time Chat App with Socket.io",
    excerpt:
      "The story of how a college group chat problem turned into Convo - my first real-time application using Socket.io.",
    content: `
      Remember those group chats where messages arrive 5 minutes late? Yeah, I got tired of that too.

      ## Why I Built This
      During my college project work, coordinating with teammates was a nightmare. WhatsApp was blocked on campus WiFi, and email was just... too formal. So I thought, "Why not build our own chat app?"

      Spoiler alert: It was harder than I thought.

      ## The Tech Stack (And Why I Chose Them)
      - **React**: Because I was already comfortable with it
      - **Node.js + Express**: Needed something fast for the backend
      - **Socket.io**: The magic ingredient for real-time communication
      - **MongoDB**: NoSQL felt right for storing chat messages
      - **JWT**: Had to learn authentication properly

      ## What Actually Worked
      Socket.io is surprisingly beginner-friendly. Within the first day, I had basic message sending working. The dopamine hit was real when I saw messages appearing instantly on another device!

      The hardest part? Managing socket connections properly. I spent an entire weekend debugging why users kept seeing "User is typing..." even after they stopped.

      ## Lessons From 3 AM Debugging Sessions
      1. Socket connections need proper cleanup (I learned this the hard way)
      2. Always emit acknowledgments for critical messages
      3. MongoDB queries can be slow - index your fields!
      4. JWT tokens expire - handle it gracefully

      Would I build it differently now? Absolutely. But that first "It works!" moment made all the late-night debugging worth it.
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
      "When your semester notes hit 200 pages, you either summarize them manually or teach an AI to do it. I chose the latter.",
    content: `
      Mid-semester exams were approaching. I had 200+ pages of notes. And exactly one week to study.

      ## The "Oh No" Moment
      Staring at my laptop at 2 AM, I realized there was no way I could read and remember everything. That's when I remembered OpenAI's API existed.

      ## Building NoteSummarizer AI
      The idea was simple: paste your notes, get a summary. But implementation? Not so simple.

      **First Challenge**: OpenAI's token limits meant I couldn't just dump 50 pages at once. Had to chunk the text intelligently.

      **Second Challenge**: Voice input seemed cool until I tested it in a noisy hostel room. Added noise filtering.

      **Third Challenge**: Making it actually useful. Early versions gave summaries that were too vague. Had to tweak the prompts extensively.

      ## What I Learned (The Hard Way)
      - **API costs add up FAST**: Burned through ₹500 in testing alone
      - **Rate limiting is real**: OpenAI doesn't like 50 requests per second
      - **Users want control**: Added summary length options after friend's feedback

      ## The Best Part?
      My roommates actually used it during exams. Seeing real people benefit from something you built hits different.

      Current status: Still improving it. Next feature? PDF support for lazy people like me who don't want to copy-paste.
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
    title: "JWT Authentication: Finally Makes Sense",
    excerpt:
      "After breaking authentication in three different projects, I sat down and actually learned how JWT works. Here's what clicked.",
    content: `
      I'll be honest: I copy-pasted JWT code for my first two projects without understanding it.

      Then my third project's authentication broke in production. Users couldn't log in. Panic mode activated.

      ## What Even Is JWT?
      After hours of documentation reading (and some YouTube tutorials), it finally clicked: JWT is basically a secure ID card that proves "yes, this user is who they claim to be."

      ## The Structure (Explained Like You're 5)
      Think of JWT as three parts glued together:
      1. **Header**: Says "Hey, I'm a JWT, trust me"
      2. **Payload**: Your actual data (user ID, role, etc.)
      3. **Signature**: The secret sauce that proves nobody tampered with it

      ## What I Wish Someone Told Me Earlier
      - **Don't store sensitive data in JWT**: Anyone can decode it (they just can't modify it)
      - **Set expiration times**: 7 days is reasonable, 1 year is asking for trouble
      - **Use HTTPS**: Seriously, just do it
      - **Refresh tokens exist for a reason**: Don't make users log in every hour

      ## The Production Bug (And The Fix)
      Turns out, I forgot to set CORS headers properly. JWT was working fine, but the browser was blocking the response. Two hours of debugging for a 3-line fix.

      Developer life, am I right?
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
    title: "Framer Motion: From 'Meh' to 'Whoa' Animations",
    excerpt:
      "My portfolio looked boring. Then I discovered Framer Motion. Now everything moves (maybe a bit too much).",
    content: `
      Let's be real: my first portfolio looked like a Word document from 2005.

      Black text. White background. Zero personality. My friends said it was "clean and minimal." I knew they meant "boring."

      ## Enter Framer Motion
      I wanted smooth animations without writing 100 lines of CSS. Found Framer Motion. Game changer.

      ## The Learning Curve
      First attempt: Everything moved. Like, EVERYTHING. Cards sliding, buttons bouncing, text fading. Looked like a kindergarten art project.

      Second attempt: Subtle animations. Much better. Learned that less is more.

      ## Cool Tricks I Actually Use
      1. **Scroll animations**: Elements fade in as you scroll (not all at once like my first try)
      2. **Hover effects**: Buttons grow slightly on hover (satisfying AF)
      3. **Stagger animations**: Cards appear one by one, not all together
      4. **Page transitions**: Smooth entry/exit animations

      ## The 'Wow' Moment
      When a senior saw my updated portfolio and asked, "Did you hire a designer?" Nope, just learned Framer Motion properly.

      ## Pro Tip
      If your animation takes longer than 0.3 seconds, it's probably too slow. Users are impatient (including me).

      P.S. Yes, I still sometimes add too many animations. Old habits die hard.
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
    title: "Building This Portfolio: A Chaotic Journey",
    excerpt:
      "Three rebuilds, two frameworks, and one existential crisis later - here's how I finally built a portfolio I'm proud of.",
    content: `
      Every developer knows the struggle: your portfolio is never "finished."

      ## Version 1: The Disaster
      Used vanilla HTML/CSS. Looked like it was built in 2010. Deleted it after showing to one friend. Their face said everything.

      ## Version 2: The Over-Engineer
      "Let me learn Next.js by building my portfolio!" - worst decision ever. Spent more time reading docs than actually building.

      ## Version 3: The One That Stuck
      Finally used what I actually knew: React with Vite. Added Tailwind CSS because I was tired of writing custom CSS.

      ## Design Decisions (After Many Mistakes)
      - **Dark theme**: Looks professional (and hides design flaws)
      - **Simple layout**: Learned from my over-complicated Version 2
      - **Mobile-first**: Because I test on my phone constantly
      - **Framer Motion**: Learned it specifically for this

      ## The Reality Check
      Took 3 weeks. Could've done it in 1 if I didn't keep tweaking animations. But hey, at least now I have something to show recruiters.

      ## Biggest Lesson
      Perfect is the enemy of done. Ship it, get feedback, iterate. My portfolio still isn't "perfect," but it's out there, and that's what matters.

      Now excuse me while I go "improve" that hero section animation for the 47th time.
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
