import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(0);
  const [loginStatus, setLoginStatus] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    setLoginStatus("Logging in, Please wait!");

    const loginPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
        console.log(shouldSucceed);
        if (shouldSucceed) {
          resolve();
        } else {
          reject();
        }
      }, 1500);
    });

    loginPromise
      .then(
        () => {
          setLoginStatus("Logged in successfully!");
        },
        () => {
          setLoginStatus("Unable to log in!");
        }
      )
      .catch((error) => {
        console.log("here:", error);
        setLoginStatus(error.message);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={loginHandler} className="form">
          <div className="inputs">
            <div>
              <label>Username</label>
              <input type="text" onChange={usernameChangeHandler} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" onChange={passwordChangeHandler} />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div>{loginStatus}</div>
    </div>
  );
}

export default App;
