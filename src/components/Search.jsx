const Search = ({ search, setInput, input, variant }) => {
  const Handleinput = (e) => {
    setInput(e.target.value);
  };

  const startSearch = () => {
    if (!input) return;
    const url = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=1`;
    search(url);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      startSearch();
    }
  };

  const categories = ["山脈", "城市", "海洋", "花卉", "動物"];
  const isHeader = variant === "header";

  return (
    <div className={`search ${isHeader ? "headerSearchComponent" : ""}`}>
      {!isHeader && <h1 className="searchTitle">探索精彩瞬間</h1>}
      <div className="searchContainer">
        <input
          className="input"
          type="text"
          value={input}
          onChange={Handleinput}
          onKeyDown={handleKeyPress}
          placeholder={isHeader ? "搜尋圖片..." : "搜尋你感興趣的照片..."}
        />
        <button onClick={startSearch}>
          <span className="material-symbols-rounded" style={{ fontSize: isHeader ? '20px' : '28px', fontWeight: '700' }}>search</span>
        </button>
      </div>
      {!isHeader && (
        <div className="categories">
          <span>熱門分類：</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setInput(cat);
                const url = `https://api.pexels.com/v1/search?query=${cat}&per_page=16&page=1`;
                search(url);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
