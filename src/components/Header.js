import linkedinIcon from "../images/linkedin-icon.png";

const Header = ({ data }) => {
  const { fullName, email, avatar, linkedinProfile, profession, phone } = data;
  return (
    <header className="App-header">
      <div className="row">
        <div className="col">
          <img src={avatar} alt="avatar-cv" className="avatar" />
          <div className="name">
            <h2>{fullName}</h2>
            <p>{email}</p>
          </div>
        </div>

        <div className="col justify-center linkedin-col">
          <div className="linkedinProfile">
            <div className="linkedinUrl">
              <img src={linkedinIcon} alt="avatar-cv" className="icon" />
              <strong>Linkedin</strong>
            </div>
            <span>{linkedinProfile}</span>
          </div>
        </div>

        <div className="col column profession-col">
          <div className="label-container">
            {profession.map((label) => (
              <div>
                <span className="label">{label}</span>
              </div>
            ))}
            <span className="phone">{phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
