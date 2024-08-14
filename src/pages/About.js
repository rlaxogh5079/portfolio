import "../styles/About.css";

const About = () => {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(2002, 11, 23);

    var age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <div className="about-container">
      <div className="about-title">About me</div>
      <div className="about-profile">
        <img src="assets/profile.jpg" alt="profile" />
        <div className="about-info">
          <div className="about-field">
            <span>Name</span>
            <span>Kim Tae Ho</span>
          </div>
          <div className="about-field">
            <span>BirthDate</span>
            <span>2002.11.23</span>
          </div>
          <div className="about-field">
            <span>Age</span>
            <span>{calculateAge()}</span>
          </div>
          <div className="about-field">
            <span>Position</span>
            <span>Full-Stack</span>
          </div>
          <div className="about-field">
            <span>University</span>
            <span>Pai Chai, Daejeon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
