import { useState } from "react";
import "../styles/Experience.css";

function Experience({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    companyName: data.companyName,
    positionTitle: data.positionTitle,
    responsibilities: data.responsibilities,
    startDate: data.startDate,
    endDate: data.endDate,
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
        <h2>Practical Experience</h2>
        {!isEditing && (
          <button className="button button--secondary" type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="cv-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="companyName">Company Name</label>

            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="positionTitle">Position Title</label>

            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
              placeholder="Enter your position title"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="responsibilities">Main Responsibilities</label>

            <textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              placeholder="Describe your main responsibilities"
              rows="5"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="startDate">Start Date</label>

              <input
                type="text"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="Start date"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="endDate">End Date</label>

              <input
                type="text"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                placeholder="End date"
                required
              />
            </div>
          </div>

          <button className="button button--primary" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <dl className="section-card__summary">
          <div>
            <dt>Company Name</dt>
            <dd>{data.companyName}</dd>
          </div>
          <div>
            <dt>Position Title</dt>
            <dd>{data.positionTitle}</dd>
          </div>
          <div>
            <dt>Main Responsibilities</dt>
            <dd className="section-card__description">{data.responsibilities}</dd>
          </div>
          <div>
            <dt>Start Date</dt>
            <dd>{data.startDate}</dd>
          </div>
          <div>
            <dt>End Date</dt>
            <dd>{data.endDate}</dd>
          </div>
        </dl>
      )}
    </section>
  );
}

export default Experience;