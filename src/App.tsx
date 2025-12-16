import React from "react";
import "./styles/landing.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { ProcessSection } from "./components/sections/Process";
import { Cases } from "./components/sections/Cases";
import { Contacts } from "./components/sections/Contacts";
import { ChatWidget } from "./components/chat/ChatWidget";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Services />
        <ProcessSection />
        <Cases />
        <Contacts />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
