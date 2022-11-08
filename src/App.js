import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
    <TopBar />
    <Settings />

    
   </> 
  );
}

export default App;

//Header vai ser usado só na home, então vamos colocar o componente só dentro de Home.jsx
