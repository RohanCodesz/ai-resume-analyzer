import { useEffect } from "react";
import { resumes } from "../../Constants";
import Navbar from "../Components/Navbar";
import ResumeCard from "../Components/ResumeCard";

export default function Home() {
  useEffect(() => {
    // Add any side effects or fetch logic here
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {/* Resumes Grid */}
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}