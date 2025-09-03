import domToReact from "html-react-parser/lib/dom-to-react";
import { Clipboard, FileText, HelpCircle, Video } from "lucide-react";

// parse options
export const options = {
  replace: (domNode) => {
    if (domNode.name === "code") {
      return (
        <pre className="whitespace-pre-wrap">
          {domToReact(domNode.children)}
        </pre>
      );
    }
  },
};

export const contentTypes = [
  {
    value: "video",
    label: "Video",
    icon: Video,
    color: "bg-blue-100 text-blue-700",
  },
  {
    value: "article",
    label: "Article",
    icon: FileText,
    color: "bg-green-100 text-green-700",
  },
  {
    value: "quiz",
    label: "Quiz",
    icon: HelpCircle,
    color: "bg-purple-100 text-purple-700",
  },
  {
    value: "assignment",
    label: "Assignment",
    icon: Clipboard,
    color: "bg-orange-100 text-orange-700",
  },
];
