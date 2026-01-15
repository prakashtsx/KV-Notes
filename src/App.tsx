import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  CloudComputing,
  CIS,
  ComputerGraphics,
  DataScience,
  DeepLearning,
  DistributedAlgorithms,
} from "./components/subjects";
import { DataScienceDetails } from "./pages/DataScienceDetails";
import { DeepLearningDetails } from "./pages/DeepLearningDetails";
import { CISDetails } from "./pages/CISDetails";
import { ComputerGraphicsDetails } from "./pages/ComputerGraphicsDetails";
import { DistributedAlgorithmsDetails } from "./pages/DistributedAlgorithmsDetails";
import { CloudComputingDetails } from "./pages/CloudComputingDetails";

function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <main className="flex">
        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% md:block hidden mask-radial-at-center h-screen"
          opacity={0.8}
          gap={12}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
        <article className="flex md:p-10 p-7 flex-wrap md:gap-15 gap-3 min-h-screen">
          <DataScience />
          <DeepLearning />
          <CIS />
          <ComputerGraphics />
          <DistributedAlgorithms />
          <CloudComputing />
        </article>
        <aside className="retro">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </aside>
      </main>

      <div className="w-full md:block hidden">
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-science" element={<DataScienceDetails />} />
        <Route path="/deep-learning" element={<DeepLearningDetails />} />
        <Route path="/cis" element={<CISDetails />} />
        <Route
          path="/computer-graphics"
          element={<ComputerGraphicsDetails />}
        />
        <Route
          path="/distributed-algorithms"
          element={<DistributedAlgorithmsDetails />}
        />
        <Route path="/cloud-computing" element={<CloudComputingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
