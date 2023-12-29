import React, { useState } from "react";
import { ViewDetails } from "./ViewDetails";

interface FormValue {
  title: string;
  author: string;
  price: string;
}

export interface Books {
  id: number;
  title: string;
  author: string;
  price: string;
}
const Book = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [formValue, setFormValue] = useState<FormValue>({
    title: "",
    author: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { title, author, price } = formValue;
    setBooks([
      ...books,
      { id: Math.random(), title: title, author: author, price: price },
    ]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">title</label>
          <input
            type="text"
            name="title"
            value={formValue.title}
            onChange={handleChange}
          />
          <label htmlFor="">author</label>
          <input
            type="text"
            name="author"
            value={formValue.author}
            onChange={handleChange}
          />
          <label htmlFor="">price</label>
          <input
            type="text"
            name="price"
            value={formValue.price}
            onChange={handleChange}
          />

          <button type="submit">Add</button>
          {/* <button type="submit" >
                update
            </button> */}
        </form>
      </div>
      <ViewDetails books={books}/>
    </div>
  );
};

export default Book;
