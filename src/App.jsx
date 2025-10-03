import { lazy, Suspense } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import Testing from './component/Testing';

const Header = lazy(() => import('./component/Header'));
const Banner = lazy(() => import('./pages/Banner'));
const WeBegan = lazy(() => import('./component/WeBegan'));
const Form = lazy(() => import('./component/Form'));
const Footer = lazy(() => import('./component/Footer'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#480C2C]">
    <div className="text-center">
      <img 
        src={Logo} 
        alt="Loading Logo" 
        className="w-32 h-32 md:w-48 md:h-48 animate-spin-slow mx-auto mb-4" 
      />
      <p className="text-[#C3AF69] font-playfair text-xl">Welcome</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Header />
      <Banner />
      <WeBegan />
      <Testing />
      <Form />
      <Footer />
    </Suspense>
  );
}

export default App;