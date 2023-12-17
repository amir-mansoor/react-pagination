import { useEffect, useState } from "react";
import Data from "./Data";

function App() {
  const itemsPerPage = 5;
  const data = Data()
  // const [data, setData] = useState(Data());
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [cards,setCards] = useState()
  const total = Math.ceil(data?.length / itemsPerPage);

  useEffect(() => {
    setCards(data?.slice(indexOfFirstItem,indexOfLastItem))
  }, [currentPage]);


  return (
    <>
      <h1>Pagination With React</h1>

      <div className="container">
        {cards?.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <small>{item.id}</small>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage == 1}
      >
        {" "}
        &larr;{" "}
      </button>
      {[...Array(total).keys()].map((item) => (
        <button
          className={item + 1 == currentPage ? "active" : ""}
          key={item + 1}
          onClick={() => setCurrentPage(item + 1)}
        >
          {item + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage == total}
      >
        {" "}
        &rarr;
      </button>
    </>
  );
}

export default App;
