import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
