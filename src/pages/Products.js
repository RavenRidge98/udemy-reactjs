import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to='/products/1'>1</Link>
        </li>
        <li>
          <Link to='/products/2'>2</Link>
        </li>
        <li>
          <Link to='/products/3'>3</Link>
        </li>
        <li>
          <Link to='/products/4'>4</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
