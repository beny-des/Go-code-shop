import "./Header.css";

const Header = ({ filterCategories, newpProductList }) => (
  <nav className="product-filter">
    <h1>Jackets</h1>

    <div className="sort">
      <div className="collection-sort">
        <label>Filter by:</label>

        <select
          onChange={(e) => {
            let filteredList = e.target.value;
            newpProductList(filteredList);
          }}
        >
          <option value="All">All products</option>
          {filterCategories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
          ;
        </select>
      </div>

      <div className="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>
);

export default Header;
