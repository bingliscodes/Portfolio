import type { Project } from "./types";

/**
 * Add a new project by appending an object to this array.
 * Only `name`, `description`, and `tags` are required — `repoUrl`, `demoUrl`,
 * and `featured` are optional.
 */
export const projects: Project[] = [
  {
    name: "GatoLingo",
    description: `Real-time conversation is a crucial aspect for improving and assessing language learning, but also time-intensive to administer, grade, and
give feedback on frequently. GatoLingo offers a solution as a voice-based AI language tutor used by teachers at Stanford. Built using
OpenAI's Realtime API and WebRTC for live spoken conversations, it features teacher dashboards for exam creation with custom
vocabulary and grammar targets, student dashboards for completing assignments, and AI-powered scoring with Anthropic's Claude API
that evaluates grammar, vocabulary usage, and fluency with detailed feedback.`,
    tags: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Docker",
      "Vite",
    ],
    repoUrl: "https://github.com/bingliscodes/Gato-Lingo",
    deployUrl: "https://gato-lingo.netlify.app/",
    note: "Backend is on Render's free tier — the first request may take ~30s to wake up.",
    featured: true,
  },
  {
    name: "ChattyCat",
    description: `A messaging web application with features similar to Slack. Uses REST API, secure authentication, web sockets, and an S3 bucket. Users
can create and manage an organization, send messages to channels or other users, reply in message threads, upload profile pictures, send
file attachments, and have role-based actions.`,
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "Socket.IO",
      "AWS",
      "Docker",
      "Vite",
    ],
    repoUrl: "https://github.com/bingliscodes/chattycat",
    deployUrl: "https://chattycat.netlify.app/",
    demoUrl: "https://www.youtube.com/watch?v=1RhYNEVxVxk",
    note: "Backend is on Render's free tier — the first request may take ~30s to wake up.",
    featured: true,
  },
  {
    name: "MediaCat",
    description: `A web application where users can browse movies and TV shows, add them to their wish list, and keep track of what they have watched.
Users can also get personalized movie recommendations based on their needs`,
    tags: ["Node.js", "Express", "JavaScript", "MongoDB", "React", "Vite"],
    repoUrl: "https://github.com/bingliscodes/movie_reviews_github",
    deployUrl: "https://mediacat.netlify.app/",
    note: "Backend is on Render's free tier — the first request may take ~30s to wake up.",
  },
];
