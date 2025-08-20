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

// Main Home page component
// This is the landing page of the application that users see first
export default function Home() {
  // Main container with a background image from the public folder
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      {/* Hero section containing the main headline and value proposition */}
      <section className="main-section">
        <div className="page-heading">
          <h1>Track you applications and resume scores</h1>
          <h2>Review your resume with AI-powered feedback</h2>
        </div>
      </section>

      {/* Conditional Rendering Block:
    - Only renders the resume section if there are resumes to display, checks if the resumes array has any items,
     The && operator is a common React pattern for conditional rendering
    - If the condition is false (no resumes), nothing will be rendered */}
      {resumes.length > 0 && (
        // Container div for all resume cards
        // Uses 'resumes-section' class for styling the grid/layout of cards
        <div className="resumes-section">
          {/* Array Mapping Operation:
            - .map() creates a new ResumeCard component for each resume in the array
            - Takes each resume object from the array and processes it one by one
            - The arrow function (resume) => ... runs for each item in resumes */}
          {resumes.map((resume) => (
            // ResumeCard Component Instance:
            // - key={resume.id}: React needs unique keys for list items for efficient updating
            // - resume={resume}: Passes the entire resume object as a prop to ResumeCard
            // - ResumeCard will receive this data and display it in a card format
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
