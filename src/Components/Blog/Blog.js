import "./Blog.css";
import { Link } from "react-router-dom";

let items = [
  "Nullam eget scelerisque lorem. Duis et enim malesuada, facilisis ipsum non, laoreet massa. Pellentesque nec congue nulla, at venenatis lorem. Sed at ultricies turpis. Phasellus a metus efficitur, vehicula risus eget, pretium risus.",
  "Donec luctus massa a facilisis tristique. Duis metus turpis, ornare in urna at, consectetur egestas velit. Curabitur laoreet lacus sit amet nibh venenatis hendrerit. Curabitur tempor metus eget eros facilisis, ac vulputate lectus pharetra.",
  "Duis condimentum efficitur mi eget auctor. Etiam vehicula luctus libero vitae ultrices. Nunc aliquet maximus libero, sed interdum velit rhoncus porttitor.",
  "Nulla facilisi. Sed diam risus, rhoncus a congue sollicitudin, convallis non nulla.",
  "Sed vitae justo consectetur, accumsan metus nec, lacinia sapien. Pellentesque vitae vulputate risus, vitae pharetra purus. Vivamus sit amet consectetur lectus. Phasellus tincidunt pretium augue eget aliquam. In in pulvinar felis, quis ullamcorper leo. In mollis massa nisi. Nunc malesuada faucibus risus, a porta erat convallis sit amet.",
];

let itemList = items.map((item, index) => {
  return (
    <li key={index}>
      <div className="box blogPost">{item}</div>
    </li>
  );
});

function Blog() {
  return (
    <>
      <h2 className="clear">Blog Posts 
        <Link to="/AddBlog" className="addblog-link">Add New Blog</Link>
        </h2>
      <ul>{itemList}</ul>
    </>
  );
}

export default Blog;