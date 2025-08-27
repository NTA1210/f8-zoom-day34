function CommentSystem() {
  const [comments, setComments] = React.useState([]);
  const [modal, setModal] = React.useState({
    name: "",
    email: "",
    body: "",
  });
  const [popup, setPopup] = React.useState(false);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleModalChange = (field, value) => {
    setModal({
      ...modal,
      [field]: value,
    });
  };

  const handleCloseModal = () => {
    setModal({
      name: "",
      email: "",
      body: "",
    });
    setPopup(false);
  };

  return (
    <div className="comments-system">
      <h1 className="title">Các bình luận về bài viết này</h1>
      <button
        className="btn add-comment increment"
        onClick={() => setPopup(true)}
      >
        Thêm mới bình luận
      </button>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment-content">
              <img
                src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                alt={comment.name}
              />
              <div className="comment-info">
                <div className="name">{comment.name}</div>
                <div className="email">{comment.email}</div>
                <div className="body">{comment.body}</div>
              </div>
            </div>
            <div className="comment-actions">
              <span>1 giờ trước</span>
              <span className="like">Thích</span>
              <span className="reply">Chia sẻ</span>
            </div>
          </div>
        ))}
      </div>

      {popup && (
        <div className="overlay">
          <div className={`modal show`}>
            <div className="modal-header">
              <h2 className="modal-title">Thêm bình luận của bạn</h2>
              <button className="btn close" onClick={handleCloseModal}>
                X
              </button>
            </div>

            {/* Modal */}
            <div className="modal-content">
              <div className="row">
                <label form="name" className="label">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  onInput={(e) => handleModalChange("name", e.target.value)}
                />
              </div>
              <div className="row">
                <div className="label">Email:</div>
                <input
                  type="text"
                  onInput={(e) => handleModalChange("email", e.target.value)}
                />
              </div>
              <div className="row">
                <div className="label">Body:</div>
                <textarea
                  type="text"
                  onInput={(e) => handleModalChange("body", e.target.value)}
                />
              </div>

              <button
                className="btn submit increment"
                onClick={() => {
                  setComments([modal, ...comments]);
                  setPopup(false);
                }}
              >
                Thêm bình luận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("comments"));
root.render(<CommentSystem />);
