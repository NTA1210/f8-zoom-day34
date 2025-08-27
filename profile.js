function ProfileCard() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="profile">
      {user !== null ? (
        <div className="card">
          <img
            className="avatar"
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt={user.name}
          />

          <div className="info">
            <div className="row">
              <div className="label">Name:</div>
              <div className="value">{user.name}</div>
            </div>
            <div className="row">
              <div className="label">Username:</div>
              <div className="value">{user.username}</div>
            </div>
            <div className="row">
              <div className="label">Email:</div>
              <div className="value">{user.email}</div>
            </div>
            <div className="row">
              <div className="label">Phone:</div>
              <div className="value">{user.phone}</div>
            </div>
            <div className="row">
              <div className="label">Website:</div>
              <div className="value">{user.website}</div>
            </div>
            <div className="row">
              <div className="label">Address:</div>
              <div className="value">
                {user.address.street}, {user.address.city}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <div className="loader"></div>
          <p className="loading-text">loading....</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("profile"));
root.render(<ProfileCard />);
