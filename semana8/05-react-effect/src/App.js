import { useEffect } from "react";
import { products } from "./data/products";

const App = () => {
  const [canasta, setCanasta] = useState(canastals || []);
  useEffect(() => {
    let canastals = localStorage.getItem("canastals");
    if (canastals) {
      canastals = JSON.parse(canastals);
      setCanasta(canastals);
    }
    console.log(canastals);
  }, []);

  return <div></div>;
};

export default App;
