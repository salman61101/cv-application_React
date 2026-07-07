import "../styles/CVPreview.css";

function CVPreview({ generalInfo, education, experience }) {
  function renderValue(value) {
    return value.trim() ? value : "Not provided";
  }

  return (
    <section className="preview-card">
      <div className="preview-card__header">
        <p className="preview-card__eyebrow">Live Preview</p>
        <h2>CV Preview</h2>
      </div>

      <article className="preview-card__hero">
        <h3>{renderValue(generalInfo.fullName)}</h3>
        <ul>
          <li>{renderValue(generalInfo.email)}</li>
          <li>{renderValue(generalInfo.phoneNumber)}</li>
        </ul>
      </article>

      <section className="preview-card__section">
        <h3>General Information</h3>
        <dl>
          <div>
            <dt>Full Name</dt>
            <dd>{renderValue(generalInfo.fullName)}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{renderValue(generalInfo.email)}</dd>
          </div>
          <div>
            <dt>Phone Number</dt>
            <dd>{renderValue(generalInfo.phoneNumber)}</dd>
          </div>
        </dl>
      </section>

      <section className="preview-card__section">
        <h3>Education</h3>
        <dl>
          <div>
            <dt>School Name</dt>
            <dd>{renderValue(education.schoolName)}</dd>
          </div>
          <div>
            <dt>Degree / Title of Study</dt>
            <dd>{renderValue(education.degree)}</dd>
          </div>
          <div>
            <dt>Study Date</dt>
            <dd>{renderValue(education.studyDate)}</dd>
          </div>
        </dl>
      </section>

      <section className="preview-card__section">
        <h3>Practical Experience</h3>
        <dl>
          <div>
            <dt>Company Name</dt>
            <dd>{renderValue(experience.companyName)}</dd>
          </div>
          <div>
            <dt>Position Title</dt>
            <dd>{renderValue(experience.positionTitle)}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>
              {renderValue(experience.startDate)} - {renderValue(experience.endDate)}
            </dd>
          </div>
          <div>
            <dt>Main Responsibilities</dt>
            <dd className="preview-card__description">
              {renderValue(experience.responsibilities)}
            </dd>
          </div>
        </dl>
      </section>
    </section>
  );
}

export default CVPreview;