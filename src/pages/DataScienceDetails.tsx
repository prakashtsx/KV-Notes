import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardContent } from "@/components/ui/8bit/card";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface Note {
  id: string;
  title: string;
  unit: string;
  uploadedDate: string;
  downloadUrl: string;
}

interface PreviousYearPaper {
  id: string;
  year: number;
  link: string;
}

const NOTES: Note[] = [
  {
    id: "1",
    title: "Introduction to Data Science",
    unit: "Unit 1",
    uploadedDate: "2024-01-15",
    downloadUrl:
      "https://drive.google.com/file/d/1rYgwocYsA2fYZgU2vGriu-5rvb6McT9U/view?usp=drive_link",
  },
  {
    id: "2",
    title: "Data Collection and Preprocessing",
    unit: "Unit 2",
    uploadedDate: "2024-01-20",
    downloadUrl:
      "https://drive.google.com/file/d/1HZZzXnIUGRpKIlUMcl_VlvvQOddRLGny/view?usp=drive_link",
  },
];

const PREVIOUS_PAPERS: PreviousYearPaper[] = [
  {
    id: "1",
    year: 2023,
    link: "https://drive.google.com/file/d/1K2nwv7i67axL2UIqgiH7ObNFQ8stolk2/view?usp=drive_link",
  },
  {
    id: "2",
    year: 2024,
    link: "https://drive.google.com/file/d/1guN1SkXzTJzb5INCHiS26X35KaIJa7A9/view?usp=drive_link",
  },
  {
    id: "3",
    year: 2025,
    link: "https://drive.google.com/file/d/120SSrb4CQ_VrcKv4eNtTl4goQIEg06jX/view?usp=drive_link",
  },
];

export function DataScienceDetails() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <main className="min-h-screen bg-gradient-to-b from-transparent to-transparent">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Data Science
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  [6CS4-01]
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="cursor-pointer w-full md:w-auto"
              >
                Back
              </Button>
            </div>
          </div>

          {/* Previous Year Papers Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Previous Year Papers
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-4 md:px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-300 text-sm md:text-base">
                      Year
                    </th>
                    <th className="px-4 md:px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-300 text-sm md:text-base">
                      Document
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {PREVIOUS_PAPERS.map((paper) => (
                    <tr
                      key={paper.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                    >
                      <td className="px-4 md:px-6 py-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-default"
                          disabled
                        >
                          {paper.year}
                        </Button>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                          asChild
                        >
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Notes</h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {NOTES.map((note) => (
                <Card
                  key={note.id}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                          {note.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-xs md:text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                              {note.unit}
                            </span>
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {note.uploadedDate}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="cursor-pointer w-full md:w-auto"
                        asChild
                      >
                        <a
                          href={note.downloadUrl}
                          download
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
