import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import CVPreview from "./components/CVPreview.jsx";
import "./styles/App.css";

const initialGeneralInfo = {
  fullName: "",
  email: "",
  phoneNumber: "",
};

const initialEducation = {
  schoolName: "",
  degree: "",
  studyDate: "",
};

const initialExperience = {
  companyName: "",
  positionTitle: "",
  responsibilities: "",
  startDate: "",
  endDate: "",
};

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);

  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <h1>CV Application</h1>
      </header>

      <div className="app-shell__layout">
        <div className="app-shell__forms">
          <GeneralInfo data={generalInfo} onSave={setGeneralInfo} />
          <Education data={education} onSave={setEducation} />
          <Experience data={experience} onSave={setExperience} />
        </div>

        <aside className="app-shell__preview">
          <CVPreview
            generalInfo={generalInfo}
            education={education}
            experience={experience}
          />
        </aside>
      </div>
    </main>
  );
}

export default App;