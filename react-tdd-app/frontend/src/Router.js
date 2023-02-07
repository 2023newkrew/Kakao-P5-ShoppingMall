import { Routes, Route } from 'react-router-dom';
import { CompletePage } from './pages/CompletePage';
import { ConfirmPage } from './pages/ConfirmPage';
import { MainPage } from './pages/MainPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/confirm" element={<ConfirmPage/>}/>
      <Route path="/complete" element={<CompletePage/>}/>
    </Routes>
  );
}
