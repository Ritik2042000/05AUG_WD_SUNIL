
import './App.css';
import Invoice from './Components/Invoice';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <>
     <PDFDownloadLink document={<Invoice/>} fileName="PDF">
        <button>Download</button>
      </PDFDownloadLink>
      
      <div className='col-12 text-center'>
      <PDFViewer>
      <Invoice/>
      </PDFViewer>

      </div>

      
    </>
  );
}

export default App;
