import '../../styles/pages/book/BookInfo.scss';

export function BookInfo({ title, children, data }) {
  return (
    <div className="info-container">
      <h3 className="title">{title}</h3>
      {children}
      <h4 className="data">{data}</h4>
    </div>
  );
}
