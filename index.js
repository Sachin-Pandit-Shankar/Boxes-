const Box = (props) => {
  //  Write your code here.
  const { className, Text } = props;
  return <div className={`${className}`}>{Text}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box className="box1" Text="Small" />
      <Box className="box2" Text="Medium" />
      <Box className="box3" Text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
