import "./BlogItem.css";
import { Link } from "react-router-dom";

function BlogItem() {
  return (
    <>
      <Link to="/" >Back</Link>
      <h2>Add New Blog</h2>
      <textarea rows="20" cols="200"></textarea>
      <br />
      <button>Save</button>
    </>
  );
}

export default BlogItem;