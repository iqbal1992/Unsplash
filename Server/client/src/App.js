import './App.css';
import React from "react";
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const App = () => {

const [img, setImg] = React.useState("");
const [result, setResult] = React.useState([]);

const fetchRequest = async () => {
  const data = await fetch(
    `/searchimage?val=${img}`
  );
  const result = await data.json();
  setResult(result);
};

const Submit = () => {
  fetchRequest();
  setImg("");
};
React.useEffect(() => {
  fetchRequest();
}, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center input">
            <Input size='lg'
              className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
              type="text"
              placeholder="Search Anything..."
              value={ img }
              onChange={(e) => setImg(e.target.value)}
            />
            <Button
              type="submit"
              onClick={Submit}
              className="btn bg-dark text-white fs-3 mx-3"
            >
              Search
            </Button>
          </div>
          <div className="col-12 d-flex justify-content-evenly flex-wrap">
  {result.map((val) => {
    return (
      <>
        <img
          className="col-3 img-fluid img-thumbnail"
          src={val.urls.small}
          alt="val.alt_description"
        />
      </>
    );
  })}
</div>
        </div>
      </div>
    </>
  );
};

export default App;
