import { useEffect, useRef } from "react";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";

export default function EarlyAccess() {
  const typeformContainer = useRef();

  useEffect(() => {
    console.log("creating widget");
    createWidget("J9yCtDyT", { container: typeformContainer.current });
  }, []);

  return <div ref={typeformContainer} className="h-screen w-screen"></div>;
}
