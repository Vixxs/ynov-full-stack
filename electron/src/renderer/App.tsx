import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'my-lib-ui/dist/index.css';
import List from "./pages/list";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}
