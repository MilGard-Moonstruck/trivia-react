export default ({ categories }) => {
  return (
    <div className="category-wrapper">
      { 
        categories.map((category) => (
          <button 
            className="category-button"
            key={category}
          >
            {category}
          </button>
        )) 
      }
    </div>
  );
}