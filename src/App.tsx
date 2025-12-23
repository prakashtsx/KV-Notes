import { Button } from "@/components/ui/8bit/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction
} from "@/components/ui/8bit/card"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const pdfList = [
  {
    id: 1,
    name: "Data Science",
    pages: "[6CS4-01]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 2,
    name: "Deep Learning",
    pages: "[6CS4-02]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 3,
    name: "CIA",
    pages: "[6CS4-03]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 4,
    name: "Computer Graphics",
    pages: "[6CS4-04]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 5,
    name: "Distributed Algo",
    pages: "[6CS4-05]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 6,
    name: "Cloud Computing",
    pages: "[6CS4-11]",
    url: "/pdfs/document1.docx"
  },
]
function App() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <main className="flex"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.3) 0.5px, transparent 0px)`,
          backgroundSize: "8px 8px"
        }}
      >
        <article className="flex md:p-10 p-7 flex-wrap gap-15 min-h-screen"
        >
          {pdfList.map((pdf) => (
            <Card className="w-full max-w-sm h-fit">
              <CardHeader>
                <CardTitle>{pdf.name}</CardTitle>
                <CardDescription>
                  {pdf.pages}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex-col">
                <Button variant="outline" className="w-full cursor-pointer">
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
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

  )
}

export default App