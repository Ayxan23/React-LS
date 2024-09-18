//import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const user = {
    name: "Ayxan",
    surname: "Mustafayev",
    age: 21,
    hobbies: ["kitab oxumaq", "idman etmek"],
  };

  const callback = (name) => {
    console.log(name);
  };

  return (
    <div className="App">
      <Header
        name={user.name}
        surname={user.surname}
        age={user.age}
        hobbies={user.hobbies}
      />

      {
        // using Ternary Operators
        user.age > 18 ? (
          <div>
            {" "}
            Hello {5 + 5} {user.name} {user.surname}
          </div>
        ) : (
          <div>Yasiniz 18den boyuk olmalidir</div>
        )
      }

      <Footer callback={callback} />
    </div>
  );
}

export default App;
