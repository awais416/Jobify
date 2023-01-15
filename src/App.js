import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './Demo';
import { Dashboard, Register, Landing, Error } from './pages';
function App() {
  return (
    // <div id="MyApp">
    // <Demo/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
