import { WelcomeSection } from "./sections/WelcomeSection";
import { ProjectSection } from "./sections/ProjectSection";
import { Navicircle } from "./mobil-navigation/Navcircle";


function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <ProjectSection/>
      <Navicircle />
    </div>
  );
}

export default App;
