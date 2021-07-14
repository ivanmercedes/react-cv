import companyLogo from "../images/facebook.png";
const Job = ({ job }) => {
  return (
    <div className="job">
      <div className="col company-info">
        <img src={companyLogo} alt="" className="company-img" />
        <div className="company-name">
          <h3>{job.company}</h3>
          <p>{job.date}</p>
        </div>
      </div>

      <div className="col text-right">
        {job.work.map((type) => (
          <div>
            <span className="label">{type}</span>
          </div>
        ))}
      </div>

      <div className="col type-job">
        <div>
          <p>{job.type}</p>
        </div>
      </div>

      <div className="col company-description">
        <div>
          <p>{job.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
