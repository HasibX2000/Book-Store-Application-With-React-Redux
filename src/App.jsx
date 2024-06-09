import React from "react";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-5">
        <BookList />
        <AddBook />
      </main>
    </div>
  );
};

export default App;
