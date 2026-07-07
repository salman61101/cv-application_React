import { useState } from "react";
import "../styles/Education.css";

function Education({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    schoolName: data.schoolName,
    degree: data.degree,
    studyDate: data.studyDate,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave(formData);
    setIsEditing(false);
  }

  function handleEdit() {
    setFormData(data);
    setIsEditing(true);
  }

  return (
    <section className="section-card">
      <div className="section-card__header">
        <h2>Education</h2>
        {!isEditing && (
          <button className="button button--secondary" type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="cv-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="schoolName">School Name</label>

            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="Enter your school name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="degree">Degree / Title of Study</label>

            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="Enter your degree or title of study"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="studyDate">Study Date</label>

            <input
              type="text"
              id="studyDate"
              name="studyDate"
              value={formData.studyDate}
              onChange={handleChange}
              placeholder="Enter your study date"
              required
            />
          </div>

          <button className="button button--primary" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <dl className="section-card__summary">
          <div>
            <dt>School Name</dt>
            <dd>{data.schoolName}</dd>
          </div>
          <div>
            <dt>Degree / Title of Study</dt>
            <dd>{data.degree}</dd>
          </div>
          <div>
            <dt>Study Date</dt>
            <dd>{data.studyDate}</dd>
          </div>
        </dl>
      )}
    </section>
  );
}

export default Education;