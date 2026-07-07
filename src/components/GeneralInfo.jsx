function GeneralInfo() {
  return (
    <section>
      <h2>General Information</h2>

      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default GeneralInfo;