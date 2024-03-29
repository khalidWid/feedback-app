import React from "react";
import Header from "../components/Header";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
//import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "../context/FeedbackContext";

function Home() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}
export default Home;
