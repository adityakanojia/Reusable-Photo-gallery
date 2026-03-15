import "./App.css";
import Gallery from "./components/Gallery/gallery-component";
const backGroundStyele = {
  backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
};

function App() {
  return (
    <div
      className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center pt-20"
      style={backGroundStyele}
    >
      <h1 className="text-5xl sm:text-6xl font-bold my-2 mx-2 font-grotesk bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Discover visual stories
      </h1>

      <h2 className="text-2xl sm:text-3xl font-semibold mx-2 my-4 font-poppins text-white">
        Search and explore breathtaking photography from around the world.
      </h2>

      <Gallery />
    </div>
  );
}

export default App;
