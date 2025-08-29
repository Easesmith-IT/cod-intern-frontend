import domToReact from "html-react-parser/lib/dom-to-react";

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
