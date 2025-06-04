function About() {
  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "30px", color: "#333" }}>About Me</h2>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          textAlign: "justify",
          color: "#444",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        Hi! I’m <strong style={{ color: "#0073ff" }}>Peter Jaya Negara Simanjuntak</strong> — a <strong>lecturer, researcher, and entrepreneur</strong> based in <strong>Medan, North Sumatra, Indonesia</strong>. I hold a Master’s degree in Informatics Engineering and a Bachelor’s degree in Instrumentation from Universitas Sumatera Utara.
        <br /><br />
        Currently, I work as a lecturer and researcher at <strong>Universitas Satya Terra Bhinneka</strong>, where I focus on <strong>Information Systems, E-Business, Mathematics, Computer Networking, and Robotics</strong>.
        <br /><br />
        I’m also the co-owner of <strong>JAYA.NET Printing</strong>, a business I’ve managed since 2011 that provides printing services, office supplies, computer rentals, and internet access.
        <br /><br />
        I’m passionate about <strong>technology, education, and continuous learning</strong>. Let’s connect and collaborate to create something meaningful!
      </p>
    </section>
  );
}

export default About;
