import Skill from "./Skills";

const About = ({ data }) => {
  const { aboutMe } = data;

  return (
    <div className="col about-me">
      <div className="heading">
        <h2>About me</h2>
      </div>
      {aboutMe.map((text) => (
        <p>{text}</p>
      ))}
      <Skill data={data.skills}/>
    </div>
  );
};

export default About;
