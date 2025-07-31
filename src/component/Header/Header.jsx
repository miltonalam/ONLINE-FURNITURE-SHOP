const Header = ({ cart, searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="logo"><b>Urban Wood</b></div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/menu">Products</a>
        <a href="/about">Our Story</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/cart">
          Cart <span>{cart.length || 0}</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;