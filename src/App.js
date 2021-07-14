import Header from "./components/Header";
import About from "./components/About";
import Experence from "./components/Experence";
import Couses from "./components/Courss";
import Education from "./components/Education";

import data from "./data";
import "./App.scss";

function App() {

  console.log(data)
  return (
    <div className="container">
      <Header data={data} />

      <div className="info-general">
        <About data={data} />
        <Experence experence={data.experence} />
      </div>
      <div className="other">
        <Couses />
        <Education />
      </div>
    </div>
  );
}

export default App;
