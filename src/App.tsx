import { Button } from "@/components/ui/8bit/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card"
import { Download } from "lucide-react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const pdfList = [
  {
    id: 1,
    name: "Assigment_1",
    pages: 56,
    url: "/pdfs/document1.docx"
  },
  {
    id: 2,
    name: "Assigment_2",
    pages: 32,
    url: "/pdfs/document1.docx"
  },
  {
    id: 3,
    name: "Assigment_3",
    pages: 10,
    url: "/pdfs/document1.docx"
  },
  {
    id: 4,
    name: "Assigment_4",
    pages: 34,
    url: "/pdfs/document1.docx"
  }]
const handleView = (url: string): void => {
  window.open(url, '_blank');
};
function DownloadIcon() {
  return (
    <svg width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" className="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M15 7H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 3H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 11H7.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 15H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 19H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 15H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 11H23.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 11H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 15H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 27H7.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 27H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 27H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 27H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 27H23.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 23H27.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 23H3.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 19H27.01" stroke="rgba(255, 255, 255, 0.23137254901960785)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M15 15H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 11H19.01" stroke="rgba(255, 255, 255, 0.23137254901960785)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 11H11.01" stroke="rgba(255, 255, 255, 0.23137254901960785)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M3 19H3.01" stroke="rgba(255, 255, 255, 0.23137254901960785)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 23H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 23H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 23H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 23H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 19H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 15H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 19H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 19H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 19H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 7H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 7H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>
  )
}
function App() {
  return (
    <>
      <NavBar />
      <div className="flex p-10 flex-col gap-5 min-h-screen bg-gray-100"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.2) 0.5px, transparent 0px)`,
          backgroundSize: "8px 8px"
        }}
      >
        {pdfList.map((pdf) => (
          <Card key={pdf.id} className="flex flex-row justify-between md:p-5 p-1 items-center md:w-2xl bg-gray-100">
            <CardHeader>
              <CardTitle className="">{pdf.name}</CardTitle>
              <CardDescription className="text-xs">{pdf.pages} pages</CardDescription>
            </CardHeader>
            <Button className="cursor-pointer" onClick={() => handleView(pdf.url)}>
              <DownloadIcon />
              <p className="hidden md:block">Download</p>
            </Button>
          </Card>
        ))}
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  )
}

export default App