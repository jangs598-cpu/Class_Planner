
import { useState } from "react";
import "./App.css";

const sampleCourses = [
  {
    code: "CSCI 125",
    name: "Introduction to Programming",
    credits: 3,
    type: "Major Requirement",
  },
  {
    code: "MATH 170",
    name: "Calculus I",
    credits: 4,
    type: "Major Requirement",
  },
  {
    code: "PHYS 135",
    name: "General Physics I",
    credits: 4,
    type: "Major Requirement",
  },
  {
    code: "ENG 110",
    name: "College Writing",
    credits: 3,
    type: "General Education",
  },
  {
    code: "CSCI 260",
    name: "Data Structures",
    credits: 3,
    type: "Major Requirement",
  },
  {
    code: "BUSI 101",
    name: "Introduction to Business",
    credits: 3,
    type: "Elective",
  },
];

function App() {
  const [page, setPage] = useState("home");

  const [student, setStudent] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
    interests: "",
    career: "",
    completed: "",
  });

  const updateStudent = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const submitProfile = (e) => {
    e.preventDefault();
    setPage("dashboard");
  };

  const getRecommendations = () => {
    const major = student.major.toLowerCase();

    if (
      major.includes("computer") ||
      major.includes("engineering")
    ) {
      return sampleCourses.filter(
        (course) =>
          course.code.startsWith("CSCI") ||
          course.code.startsWith("MATH") ||
          course.code.startsWith("PHYS") ||
          course.code.startsWith("ENG")
      );
    }

    if (major.includes("business")) {
      return sampleCourses.filter(
        (course) =>
          course.code.startsWith("BUSI") ||
          course.code.startsWith("ENG")
      );
    }

    return sampleCourses;
  };

  const recommendations = getRecommendations();

  return (
    <div className="app">

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">C</span>
          <span>
            Class<span className="brand-light">Match</span>
          </span>
        </div>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("profile")}>
            My Profile
          </button>

          <button onClick={() => setPage("dashboard")}>
            Course Planner
          </button>
        </div>

        <button
          className="nav-cta"
          onClick={() => setPage("profile")}
        >
          Get Started
        </button>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <main>
          <section className="hero">

            <div className="hero-content">
              <span className="eyebrow">
                YOUR ACADEMIC JOURNEY STARTS HERE
              </span>

              <h1>
                Plan smarter.
                <br />
                <span>Graduate stronger.</span>
              </h1>

              <p>
                A personalized course matching experience designed
                to help New York Tech students organize their
                academic journey and find courses that match
                their academic goals.
              </p>

              <button
                className="primary-btn"
                onClick={() => setPage("profile")}
              >
                Create My Academic Plan →
              </button>

              <div className="hero-note">
                Designed for New York Tech students
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">

                <div className="visual-top">
                  <span>MY ACADEMIC PLAN</span>
                  <span className="status">● PLANNING</span>
                </div>

                <h3>Your next semester</h3>

                <div className="visual-stat">
                  <div>
                    <strong>4</strong>
                    <span>Suggested courses</span>
                  </div>

                  <div>
                    <strong>14</strong>
                    <span>Credit hours</span>
                  </div>
                </div>

                {sampleCourses.slice(0, 3).map((course) => (
                  <div
                    className="visual-course"
                    key={course.code}
                  >
                    <span className="course-dot"></span>

                    <div>
                      <strong>{course.name}</strong>
                      <small>{course.code}</small>
                    </div>

                    <span>{course.credits} credits</span>
                  </div>
                ))}

                <div className="visual-footer">
                  A clearer path to your goals.
                </div>
              </div>

              <div className="floating-label">
                ✦ Your future, organized
              </div>
            </div>

          </section>

          {/* FEATURES */}
          <section className="features">
            <div className="section-heading">
              <span className="eyebrow">HOW IT WORKS</span>
              <h2>Your academic journey, simplified.</h2>
            </div>

            <div className="feature-grid">

              <div className="feature-card">
                <h3>01. Build Your Profile</h3>
                <p>
                  Enter your major, academic year, interests,
                  and future career goals.
                </p>
              </div>

              <div className="feature-card">
                <h3>02. Discover Courses</h3>
                <p>
                  Explore course suggestions based on your
                  academic interests.
                </p>
              </div>

              <div className="feature-card">
                <h3>03. Plan Your Future</h3>
                <p>
                  Organize your academic journey and
                  explore your next semester.
                </p>
              </div>

            </div>
          </section>
        </main>
      )}

      {/* STUDENT PROFILE PAGE */}
      {page === "profile" && (
        <main className="page-container">

          <div className="page-heading">
            <span className="eyebrow">GET STARTED</span>

            <h1>Build your student profile.</h1>

            <p>
              Tell us about yourself so we can help organize
              your academic journey.
            </p>
          </div>

          <form
            className="profile-form"
            onSubmit={submitProfile}
          >

            <label>
              Full Name

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={student.name}
                onChange={updateStudent}
                required
              />
            </label>

            <label>
              Student Email

              <input
                type="email"
                name="email"
                placeholder="Enter your student email"
                value={student.email}
                onChange={updateStudent}
                required
              />
            </label>

            <label>
              Major

              <select
                name="major"
                value={student.major}
                onChange={updateStudent}
                required
              >
                <option value="">Select your major</option>
                <option value="Computer Science">
                  Computer Science
                </option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Architecture">
                  Architecture
                </option>
                <option value="Business Administration">
                  Business Administration
                </option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              Academic Year

              <select
                name="year"
                value={student.year}
                onChange={updateStudent}
                required
              >
                <option value="">Select your year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </label>

            <label>
              Academic Interests

              <textarea
                name="interests"
                placeholder="What subjects are you interested in?"
                value={student.interests}
                onChange={updateStudent}
              />
            </label>

            <label>
              Future Career Goals

              <input
                type="text"
                name="career"
                placeholder="Example: Software Engineer"
                value={student.career}
                onChange={updateStudent}
              />
            </label>

            <label>
              Previously Completed Courses

              <textarea
                name="completed"
                placeholder="List courses you have already completed"
                value={student.completed}
                onChange={updateStudent}
              />
            </label>

            <button
              className="primary-btn"
              type="submit"
            >
              Find My Courses →
            </button>

          </form>
        </main>
      )}

      {/* COURSE PLANNER DASHBOARD */}
      {page === "dashboard" && (
        <main className="page-container">

          <div className="page-heading">
            <span className="eyebrow">
              YOUR COURSE PLANNER
            </span>

            <h1>
              Welcome{student.name ? `, ${student.name}` : ""}!
            </h1>

            <p>
              Explore your course recommendations
              and plan your next semester.
            </p>
          </div>

          {/* STUDENT INFORMATION */}
          <div className="student-summary">

            <div>
              <span>YOUR MAJOR</span>
              <strong>
                {student.major || "Not selected"}
              </strong>
            </div>

            <div>
              <span>ACADEMIC YEAR</span>
              <strong>
                {student.year || "Not selected"}
              </strong>
            </div>

            <div>
              <span>CAREER GOAL</span>
              <strong>
                {student.career || "Not specified"}
              </strong>
            </div>

          </div>

          {/* RECOMMENDED COURSES */}
          <div className="section-heading">
            <h2>Recommended Courses</h2>

            <p>
              These sample recommendations are based on
              your selected major.
            </p>
          </div>

          <div className="course-grid">

            {recommendations.map((course) => (
              <div
                className="course-card"
                key={course.code}
              >

                <span className="course-type">
                  {course.type}
                </span>

                <h3>{course.name}</h3>

                <strong className="course-code">
                  {course.code}
                </strong>

                <div className="course-bottom">
                  <span>{course.credits} Credit Hours</span>
                </div>

              </div>
            ))}

          </div>

          <button
            className="primary-btn"
            onClick={() => setPage("profile")}
          >
            Edit My Profile
          </button>

          <p className="disclaimer">
            These are demonstration course recommendations.
            They are not verified New York Tech course offerings
            or degree requirements. Confirm course selections
            with an academic advisor.
          </p>

        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">

        <div className="brand">
          <span className="brand-icon">C</span>
          <span>
            Class<span className="brand-light">Match</span>
          </span>
        </div>

        <p>
          Helping students plan their academic journey.
        </p>

        <span>© 2026 ClassMatch</span>

      </footer>

    </div>
  );
}

export default App;