export default ({ categories, handlePickCategory }) => {
  return (
    <div className="category-wrapper">
      { 
        categories.map((category) => (
          <button 
            className="category-button"
            key={category}
            onClick={() => handlePickCategory(category)}
          >
            {category}
          </button>
        )) 
      }
    </div>
  );
}