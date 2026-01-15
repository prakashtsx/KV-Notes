import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/8bit/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface ComingSoonDetailsProps {
  title: string;
  code: string;
}

export function ComingSoonDetails({ title, code }: ComingSoonDetailsProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <main className="min-h-screen bg-gradient-to-b from-transparent to-transparent flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-6 md:py-10 text-center">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="cursor-pointer w-full md:w-auto mb-8"
            >
              Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{code}</p>
          </div>

          {/* Coming Soon Card */}
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Large Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"></div>
              <svg
                className="w-24 h-24 md:w-32 md:h-32 text-blue-600 dark:text-blue-400 relative"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Coming Soon!</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
                Notes and resources for {title} are currently being prepared.
                Check back soon for comprehensive study materials!
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-950 rounded-full">
              <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-700 dark:text-blue-400 font-medium">
                Under Preparation
              </span>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <p className="text-muted-foreground mb-4">
                Meanwhile, you can explore other courses or check back later!
              </p>
              <Button onClick={() => navigate("/")} className="cursor-pointer">
                Explore Other Courses
              </Button>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full md:block hidden">
        <Footer />
      </div>
    </>
  );
}
