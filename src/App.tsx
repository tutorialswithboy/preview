import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function App() {
  const docs = [
    {
      uri: "https://d1.awsstatic.com/training-and-certification/docs/AWS_certification_paths.pdf",
    },
    {
      uri: "/sample.pdf",
    },
    {
      uri: "https://github.com/cyntler/react-doc-viewer/blob/main/src/exampleFiles/csv-file.csv",
    },
  ];
  return (
    <div className="App">
      <h1>Doc Viewer</h1>
      <DocViewer
        initialActiveDocument={docs[1]}
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: "88vh" }}
      />
    </div>
  );
}

export default App;
