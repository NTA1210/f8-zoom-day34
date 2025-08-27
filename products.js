function ProductsList() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [modal, setModal] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-list">
      <h1 className="title">Products List</h1>

      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p className="loading-text">loading....</p>
        </div>
      ) : null}
      {products.length > 0 ? (
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="row">
                <div className="label">ID:</div>
                <div className="value">{product.id}</div>
              </div>
              <div className="row">
                <div className="label">Title:</div>
                <div className="value product-title">{product.title}</div>
              </div>
              <div className="row">
                <div className="label">Body:</div>
                <div className="value product-body">{product.body}</div>
              </div>
              <button className="btn view" onClick={() => setModal(product)}>
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>No products</p>
      )}

      <div className={`modal ${modal ? "show" : ""}`}>
        <div className="modal-header">
          <h2 className="modal-title">Chi tiết sản phẩm</h2>
          <button className="btn close" onClick={() => setModal(null)}>
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="row">
            <div className="label">ID:</div>
            <div className="value">{modal?.id}</div>
          </div>
          <div className="row">
            <div className="label">Title:</div>
            <div className="value">{modal?.title}</div>
          </div>
          <div className="row">
            <div className="label">Body:</div>
            <div className="value">{modal?.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("products"));
root.render(<ProductsList />);
