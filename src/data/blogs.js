export const blogsData = [
  {
    id: 1,
    title: "Building a Real-time Chat App with Socket.io",
    excerpt:
      "The story of how a college group chat problem turned into Convo - my first real-time application using Socket.io.",
    content: `Hey, I'm Pankaj. And I got tired of waiting 5 minutes for a "got it 👍" reply in our college group chat.

## Why I Even Started This

WhatsApp was blocked on campus WiFi. Email felt like sending a letter in 1995. My teammates and I were constantly missing updates. So one evening I just thought — why not build something ourselves?

Spoiler: it was way harder than I thought. But also way more fun.

## The Stack I Chose (and Why)

- **React** — I was already comfortable with it, no point learning something new mid-project
- **Node.js + Express** — fast to set up, and I'd used it before
- **Socket.io** — the real star. Real-time magic in a few lines
- **MongoDB** — NoSQL just felt natural for storing chat messages
- **JWT** — because someone had to actually log in

## The Moment It Clicked

First day with Socket.io, I had basic message sending working. I opened the app on my phone and laptop at the same time, typed something — and it appeared on both screens instantly.

I literally stood up from my chair. That dopamine hit? Unreal.

## The Part Nobody Talks About

The "User is typing..." bug haunted me for an entire weekend. Users were seeing typing indicators even after someone had stopped. Turns out socket cleanup is not optional — it's everything.

## What I'd Tell Myself Before Starting

1. Always clean up your socket connections on disconnect
2. Emit acknowledgments for important messages — don't assume delivery
3. Index your MongoDB fields early, not after it's already slow
4. JWT tokens expire. Handle it gracefully, or your users will hate you

Would I build it differently today? Absolutely. But that first "It works!" moment at 2 AM made every frustrating hour worth it.`,
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
    content: `Mid-semester exams. 200+ pages of notes. One week left. I was cooked.

## The Moment of Panic That Started Everything

It was 2 AM. I stared at my laptop like it had personally wronged me. There was no way I was reading all of that. Then I remembered — OpenAI's API exists. And I thought, wait. What if I just... didn't have to?

That's how NoteSummarizer AI was born. Out of pure desperation.

## Building It Was Not As Easy As "Just Call the API"

**Challenge 1 — Token limits are real.**
You can't dump 50 pages into GPT and hope for the best. I had to chunk the text intelligently, summarize in pieces, then stitch it back together.

**Challenge 2 — Voice input in a noisy hostel room.**
I thought it'd be cool to add voice support. Tested it. My roommate was playing music in the background. The AI thought I was dictating a Bollywood playlist. Added noise filtering.

**Challenge 3 — The summaries were too vague.**
Early versions gave me three bullet points for 30 pages. Useless. I spent hours tweaking prompts until the output actually made sense.

## What I Learned the Hard Way

- **API costs sneak up on you.** I burned through ₹500 testing before the app was even finished
- **Rate limits are not suggestions.** OpenAI does not appreciate 50 requests per second from one college kid
- **Users want control.** My friend's first feedback: "Can I choose how long the summary is?" Added it the next day

## The Part That Made It Worth It

My roommates used it during exams. Real people, not just me stress-testing it at midnight. Seeing someone actually benefit from something you built — that feeling doesn't get old.

Next up: PDF support. Because copy-pasting is for people with free time, and I am not that person.`,
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
    content: `I'll be honest — I copy-pasted JWT code for my first two projects. No idea how it worked. Just vibes and Stack Overflow.

Then my third project broke in production. Users couldn't log in. I was sweating.

## What JWT Actually Is (Finally)

After hours of docs and YouTube rabbit holes, it clicked. JWT is basically a tamper-proof ID card. It says "this person is who they claim to be" — and anyone who tries to fake it will fail because of the signature.

## The Three Parts, Explained Like I'm Talking to Myself in 2nd Year

Think of JWT as three pieces glued together with dots:

1. **Header** — "Hey, I'm a JWT. Here's the algorithm I use."
2. **Payload** — The actual data. User ID, role, expiry — whatever you need.
3. **Signature** — The secret sauce. Proves nobody tampered with parts 1 and 2.

Anyone can read the header and payload (it's just base64). But they can't forge the signature without your secret key.

## What I Wish Someone Had Just Told Me

- **Don't store sensitive stuff in the payload.** Everyone can decode it.
- **Set expiry times.** 7 days is fine. "Never expires" is a security disaster waiting to happen.
- **Always use HTTPS.** No exceptions. Just do it.
- **Refresh tokens exist.** Use them. Don't make users log in every hour.

## The Bug That Cost Me Two Hours

The CORS headers. JWT was working perfectly. The browser was blocking the response because I forgot three lines of CORS config.

Two hours of panic. Three lines of code.

Developer life, am I right?`,
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
    content: `Let's be real — my first portfolio looked like a Word document from 2005.

Black text. White background. Zero personality. My friends called it "clean." I knew they meant "boring."

## The Turning Point

I came across a portfolio that made me feel something. Cards that slid in smoothly, buttons that felt satisfying to hover over. I needed to know how. The answer was Framer Motion.

## First Attempt: A Disaster

EVERYTHING moved. Cards sliding in, buttons bouncing, headings spinning. I was proud of it for about 10 minutes, until I watched someone use it and they looked mildly nauseous.

Lesson 1: More animation is not more impressive. It's just more annoying.

## Second Attempt: Actually Good

Subtle. Intentional. Only animate things that need to be animated.

## The Tricks I Actually Use Now

1. **Scroll-triggered fade-ins** — elements appear as you scroll, not all at once like a jumpscare
2. **Hover micro-interactions** — buttons grow slightly, cards lift a little. Feels premium, looks effortless
3. **Stagger animations** — cards appear one by one, not in a single overwhelming flash
4. **Smooth page entry** — the whole page doesn't just appear, it slides in

## The Moment I Knew It Worked

A senior developer saw my updated portfolio and asked, "Did you hire a designer?"

Nope. Just learned Framer Motion properly. That was enough.

## One Rule I Swear By

If your animation takes longer than 0.3 seconds, it's probably too slow. People are impatient — myself included.

P.S. I still add too many animations sometimes. But at least now I know I'm doing it.`,
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
    content: `Every developer's portfolio is never "finished." Mine has been rebuilt three times. Here's the honest story.

## Version 1: The Disaster

Vanilla HTML and CSS. Looked like it was made in a school computer lab circa 2010. I showed it to one friend. Their expression told me everything. Deleted it the next day.

## Version 2: The Overengineer

"I'll learn Next.js by building my portfolio!" — worst idea I've had. I spent more time reading documentation than actually making anything. After two weeks, I had a half-working nav bar and an existential crisis.

## Version 3: The One That Stuck

I went back to what I actually knew. React with Vite. Tailwind CSS so I'd stop writing the same flexbox code for the 50th time. And Framer Motion, which I learned specifically because Version 1 was embarrassing.

## Design Decisions I Actually Stand Behind

- **Dark theme only** — looks sharp and hides a lot of design imperfections
- **Simple layout** — Version 2 taught me that complexity isn't the same as quality
- **Mobile-first** — I test everything on my phone before I'm happy with it
- **Subtle animations** — enough to feel alive, not enough to feel like a circus

## The Honest Timeline

Three weeks total. Could've been one week if I hadn't spent six days tweaking the hero section animation.

## The Biggest Thing I Learned

Perfect is the enemy of done. I shipped an imperfect portfolio. Got feedback. Iterated. That's how it's supposed to work.

It's still not "perfect." But it's out there. And that's the only version that actually counts.

Now if you'll excuse me, I'm going to go tweak that hero animation one more time.`,
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
