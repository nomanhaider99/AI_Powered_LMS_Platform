import { MessageCircleQuestionMark, NotebookPen, NotebookText, ScrollText, Wallpaper } from "lucide-react";

interface Agent {
  name: string;
  image: React.ReactElement;
  description: string;
}

export const agents: Agent[] = [
  {
    name: "Assignment Generator",
    image: <NotebookPen />,
    description: "Turn a simple prompt into a fully structured assignment with headings, subheadings, and clear content ready for submission."
  },
  {
    name: "Note Summarizer",
    image: <NotebookText />,
    description: "Paste long lectures, PDFs, or articles and instantly get concise, well-structured summaries for quicker revision."
  },
  {
    name: "Flashcard Creator",
    image: <NotebookPen />,
    description: "Convert your notes into interactive Q&A flashcards to test your knowledge and prepare for exams efficiently."
  },
  {
    name: "Essay Improver",
    image: <ScrollText />,
    description: "Improve grammar, style, and clarity of your essays. Get suggestions to make writing more professional and polished."
  },
  {
    name: "Question Solver",
    image: <MessageCircleQuestionMark />,
    description: "Get step-by-step solutions for math, physics, and science questions to understand concepts better."
  },
  {
    name: "Presentation Builder",
    image: <Wallpaper />,
    description: "Generate structured slide outlines and key points for class presentations from just a topic or prompt."
  }
];
