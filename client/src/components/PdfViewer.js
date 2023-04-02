import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import demoFile from "./sample.pdf";

const PdfViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div style={{ height: "720px" }}>
        <Viewer fileUrl={demoFile} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
};
export default PdfViewer;
