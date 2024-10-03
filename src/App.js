import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/header";

import useFetch from "./Components/useFetch";

function App() {
  const [products, loading, error] = useFetch();

  return (
    <div className="p-4">
      {loading && <p>Loading.....</p>}
      {error && <p>Error occurred while fetching</p>}
      <Header />
      <div className="flex flex-wrap justify-center">
        {products.map((product) => {
          return (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/2 p-2">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
