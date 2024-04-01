import About from "./components/About";
import Navbar from "./components/Navbar";
import StageContainer from "./components/StageContainer";

function App(): React.JSX.Element {
  return (
    <main className="max-w-2xl mx-auto">
      <Navbar />
      <StageContainer />
      <About />
    </main>
  );
}

export default App;
