// src/components/Page.jsx
import { useEffect } from "react";

const Page = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | MyWebsite`; // customize suffix
  }, [title]);

  return children;
};

export default Page;
