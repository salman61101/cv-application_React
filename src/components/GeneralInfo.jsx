import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    fullName: data.fullName,
    email: data.email,
    phoneNumber: data.phoneNumber,
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
        <h2>General Information</h2>
        {!isEditing && (
          <button className="button button--secondary" type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="cv-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>

            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
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
            <dt>Full Name</dt>
            <dd>{data.fullName}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{data.email}</dd>
          </div>
          <div>
            <dt>Phone Number</dt>
            <dd>{data.phoneNumber}</dd>
          </div>
        </dl>
      )}
    </section>
  );
}

export default GeneralInfo;