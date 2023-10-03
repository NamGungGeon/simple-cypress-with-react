import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //dummy api test
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);

  return (
    <div>
      Home page
      <div>
        {data?.map((d) => {
          return <div key={d.id}>{d.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
