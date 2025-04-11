import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Editor from "./pages/Editor";
import Login from "./components/Login";
import Signup from "./components/Signup";
import html2pdf from "html2pdf.js";

// Optional: Create and import these if you want custom styling
// import Certifications from "./components/Certifications";
// import Achievements from "./components/Achievements";
// import Hobbies from "./components/Hobbies";
// import Languages from "./components/Languages";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showLogin, setShowLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [isPDFExporting, setIsPDFExporting] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const previewRef = useRef();

  const [data, setData] = useState({
    name: "",
    tagline: "",
    about: "",
    skills: [],
    projects: [],
    certifications: [],
    achievements: [],
    hobbies: [],
    languages: [],
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    location: "",
    website: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const preview = queryParams.get("preview");
    if (preview === "true") {
      setPreviewMode(true);
      const stored = localStorage.getItem("sharedPortfolio");
      if (stored) {
        try {
          setData(JSON.parse(stored));
        } catch (err) {
          console.error("❌ Error parsing shared portfolio data:", err);
        }
      }
    }
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(data));
  }, [data]);

  const handleDownloadPDF = () => {
    if (!data.name) {
      alert("Please enter your name and other details before exporting.");
      return;
    }

    setIsPDFExporting(true);
    document.body.classList.add("pdf-mode");

    setTimeout(() => {
      const element = previewRef.current;

      const opt = {
        margin: 0.5,
        filename: `${data.name.replace(/\s+/g, "_")}_portfolio.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          setIsPDFExporting(false);
          document.body.classList.remove("pdf-mode");
        })
        .catch((err) => {
          console.error("PDF export error:", err);
          setIsPDFExporting(false);
          document.body.classList.remove("pdf-mode");
        });
    }, 600);
  };

  const handleCopyLink = () => {
    try {
      localStorage.setItem("sharedPortfolio", JSON.stringify(data));
      const link = `${window.location.origin}/?preview=true`;
      navigator.clipboard.writeText(link);
      alert("✅ Shareable link copied to clipboard!");
    } catch (err) {
      console.error("❌ Copy failed:", err);
      alert("❌ Failed to copy link.");
    }
  };

  if (!user && !previewMode) {
    return showLogin ? (
      <Login setUser={setUser} setShowLogin={setShowLogin} />
    ) : (
      <Signup setUser={setUser} setShowLogin={setShowLogin} />
    );
  }

  return (
    <div
      className={`min-h-screen ${
        isPDFExporting
          ? "bg-white text-black"
          : "bg-gradient-to-br from-pink-100 via-blue-100 to-sky-200 text-black dark:bg-gray-900 dark:text-white"
      } transition-all font-body`}
    >
      {!previewMode && <Navbar user={user} setUser={setUser} />}

      <div className="flex flex-wrap justify-end items-center gap-4 px-4 pt-20">
        {!previewMode && (
          <>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="px-5 py-2 bg-gradient-to-r from-pink-400 to-sky-400 text-white font-semibold rounded-lg shadow-md transition"
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
            >
              Export to PDF
            </button>

            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
            >
              Copy Shareable Link
            </button>
          </>
        )}
      </div>

      <div className={`grid gap-6 p-4 ${previewMode ? "" : "md:grid-cols-2"}`}>
        {/* 🎨 Portfolio Preview */}
        <div
          className={`p-6 rounded-3xl shadow-2xl border ${
            isPDFExporting
              ? "bg-white text-black border-gray-300"
              : "backdrop-blur-xl bg-white/30 dark:bg-white/10 text-black dark:text-dark border-white/30"
          }`}
          ref={previewRef}
        >
          <Hero name={data.name} tagline={data.tagline} />
          <About about={data.about} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />

          {/* New Sections: Render only if content exists */}
          {data.certifications?.length > 0 && (
            <section className="mt-4">
              <h3 className="text-xl font-bold mb-2">🎓 Certifications</h3>
              <ul className="list-disc list-inside space-y-1">
                {data.certifications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.achievements?.length > 0 && (
            <section className="mt-4">
              <h3 className="text-xl font-bold mb-2">🏆 Achievements</h3>
              <ul className="list-disc list-inside space-y-1">
                {data.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.hobbies?.length > 0 && (
            <section className="mt-4">
              <h3 className="text-xl font-bold mb-2">🎨 Hobbies</h3>
              <ul className="list-disc list-inside space-y-1">
                {data.hobbies.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.languages?.length > 0 && (
            <section className="mt-4">
              <h3 className="text-xl font-bold mb-2">🌍 Languages</h3>
              <ul className="list-disc list-inside space-y-1">
                {data.languages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <Contact
            email={data.email}
            phone={data.phone}
            linkedin={data.linkedin}
            github={data.github}
            location={data.location}
            website={data.website}
          />
        </div>

        {/* 📝 Editor */}
        {!previewMode && <Editor onChange={setData} />}
      </div>
    </div>
  );
}

export default App;
