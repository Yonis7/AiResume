// Import necessary types and components
// Route type defines the expected props and metadata for this route
import type { Route } from "./+types/home";
// Import the navigation component to be used at the top of the page
import Navbar from "../components/Navbar";
// Import sample resume data from constants
import { resumes } from "../../constants/index";

// Import the ResumeCard component to display individual resumes
import ResumeCard from "../components/resumeCard";

// Meta function: Defines metadata for the page (used by React Router)
// This information helps with SEO and browser tab display
export function meta({}: Route.MetaArgs) {
  return [
    // Sets the browser tab title
    { title: "Resume Scan" },
    // Provides a description for search engines and social media sharing
    {
      name: "description",
      content: "Enhanced feedback to land your dream job!",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track you applications and resume scores</h1>
          <h2>Review your resume with AI-powered feedback</h2>
        </div>
        </section>

      {resumes.length > 0 && (
        <div className="resumes-section">

          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
