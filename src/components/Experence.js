import Job from "./Job";

const Experence = ({ experence }) => {
  return (
    <div className="col experence">
      <div className="heading">
        <h2>Work experiences</h2>
      </div>

      {experence.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  );
};

export default Experence;
