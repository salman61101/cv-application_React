import { useState } from "react";

function GeneralInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    console.log(formData);
  }

  return (
    <section>
      <h2>General Information</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default GeneralInfo;