import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CompletePage } from './pages/CompletePage';
import { ConfirmPage } from './pages/ConfirmPage';
import { MainPage } from './pages/MainPage';

export function Router() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/confirm" element={<ConfirmPage/>}/>
        <Route path="/complete" element={<CompletePage/>}/>
      </Routes>
    </RecoilRoot>
  );
}
