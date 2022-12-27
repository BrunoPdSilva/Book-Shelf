import { AddBook } from './addBook/AddBook';
import { DeleteBook } from './deleteBook/DeleteBook';

import './Dashboard.css';

export function Dashboard() {
  return (
    <div className="dashboard">
      <DeleteBook />
    </div>
  )
}
