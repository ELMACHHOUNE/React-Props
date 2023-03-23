import './App.css';
import Profile from "./profile/profile";

function App() {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="MOHAMED EL MACHHOUNE"
        bio="I am a software engineer."
        profession="React Developer"
        handleName={handleName}
      >
        <img
          src='pic.png'
          alt="Profile avatar"
          style={{ borderRadius: "50%" }}
        />
      </Profile>
    </div>
  );
}

export default App;
