import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BoardPage from './components/BoardPage';
import EventsPage from './components/EventsPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'board':
        return <BoardPage />;
      case 'events':
        return <EventsPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        {renderPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;