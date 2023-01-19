import "./App.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
  
    var id =Math.round(Math.random() *1000);
  
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    //console.log("Need to add book with: ", title);
    const updatedBooks =[...books,
    {id:id,title:title}];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books}/>
      
      <BookCreate onCreate={createBook} />

      <div>{books.length}{" "}{'Random Rumber is: '}{" "}{id}</div>
      
    </div>
  );
}

export default App;
