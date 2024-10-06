import "./App.css";

const App = () => {
  let data1 = ["amin", "arabzadeh", 20, "amin@gmail.com"];
  let data2 = ["amir", "darya", 25, "amir@gmail.com"];
  let data3 = ["hamid", "arabzadeh", 40, "hamid@gmail.com"];
  let data4 = ["omid", "nori", 24, "omid@gmail.com"];
  let data5 = ["ali", "arabzadeh", 45, "ali@gmail.com"];
  let data6 = ["bardia", "nori", 23, "bardia@gmail.com"];
  let data7 = ["reza", "arabzadeh", 50, "reza@gmail.com"];
  let data8 = ["mohammad", "nori", 24, "mohammad@gmail.com"];

  return (
    <>
      <h1>ALL DATA:</h1>
      <div className="box">
        {data1.map((item, index) => {
          return <h2 key={index}>{item}</h2>
        })}
      </div>
      <hr />
      <div className="box">
        {data2.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
      <div className="box">
        {data3.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
      <div className="box">
        {data4.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
      <div className="box">
        {data5.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
      <div className="box">
        {data6.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
      <div className="box">
        {data7.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
      <div className="box">
        {data8.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
      <hr />
    </>
  );
};

export default App;
