import "./Team.css";

function Team({ name, primaryColor, secondaryColor, children }) {
  return (
    <section
      data-testid={`team-${name}`}
      className="team"
      style={{ backgroundColor: secondaryColor }}
    >
      <h3 className="team-title" style={{ borderBottomColor: primaryColor }}>
        {name}
      </h3>
      <div className="team-children">{children}</div>
    </section>
  );
}

export default Team;
