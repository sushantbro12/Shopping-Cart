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
      <div className="flex flex-wrap">
        {products.map((product) => {
          return (
            <div key={product.id} className="w-6/12">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
