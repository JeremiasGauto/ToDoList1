
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <div className=' bg-slate-500/20 '>
        <p>hola mundo</p>{toast.error("holaaaaaaaaaaaaaaaa")}

      </div>






      <ToastContainer />
    </>
  )
}

export default App
