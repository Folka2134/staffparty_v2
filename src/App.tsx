import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MusicPage from "./components/MusicPage";

function App() {
  return (
    <div className="min-w-[350px] bg-background">
      <Header />
      <Navbar />
      <MusicPage />
    </div>
  );
}

export default App;
