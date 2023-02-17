import "./App.css";
import Profile from "./Components/Profile/Profile";

function App() {
  const handleEvent = (itemName) => {
    alert(itemName);
  };
  return (
    <>
      <Profile
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digitalspy.com%2Fmovies%2Fa28866233%2Fit-chapter-2-director-potential-pennywise-movie%2F&psig=AOvVaw0Rb29YmTmGSgQ60hdQSoDL&ust=1676744805040000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKigg6eXnf0CFQAAAAAdAAAAABAD"

          fullName={"Mahdi Mzoughi"}
        bio={
          "Ingénieur informatique fraîchement diplômé d’ESPRIT. Je suis actuellement à la recherche d'une opportunité pour fonder ma carrière. J'ai suivi divers stages et formations durant mon cursus universitaire. Je suis une personne responsable, polyvalente et motivée."
        }
        profession={"mahdi Mobile "}
        HandleName={handleEvent}
        
      />
    </>
  );
}

export default App;
