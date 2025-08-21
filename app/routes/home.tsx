import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router"
import { useEffect } from "react";

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

  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    // If authenticated redirect to home page
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated, navigate]);


	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover">
			<Navbar />

			<section className="main-section">
				<div className="page-heading py-16 ">
					<h1>Track you applications and resume scores</h1>
					<h2>Review your resume with AI-powered feedback</h2>
				</div>
			</section>

			{resumes.length > 0 && (
				<div className="resumes-section ml-2 mr-2"> {/* or use individual margins */}
					{resumes.map((resume) => (
						<ResumeCard key={resume.id} resume={resume} />
					))}
				</div>
			)}
		</main>
	);
}
