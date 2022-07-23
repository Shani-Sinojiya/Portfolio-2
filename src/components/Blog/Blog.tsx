import "./Blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  const BlogData = [
    {
      category: "Reviews",
      image: Image1,
      title: "5 Best App Development Tool for Your Projects",
      meta: {
        Date: "09 February, 2022",
        author: "Shani Sinojiya",
      },
    },
    {
      category: "Tutorial",
      image: Image2,
      title: "Common Misconceptions About Payment",
      meta: {
        Date: "07 February, 2022",
        author: "Shani Sinojiya",
      },
    },
    {
      category: "Business",
      image: Image3,
      title: "3 Things to know about startup business",
      meta: {
        Date: "05 February, 2022",
        author: "Shani Sinojiya",
      },
    },
  ];

  return (
    <section className="blog section container" id="blog">
      <h2 className="section_title">Latest Posts</h2>

      <div className="blog_container grid">
        {BlogData.map((blog) => (
          <div className="blog_card">
            <div className="blog_thumb">
              <a href="/">
                <span className="blog_category">{blog.category}</span>
              </a>
              <a href="/">
                <img
                  src={blog.image}
                  alt={blog.category + "-" + blog.title}
                  className="blog_img"
                />
              </a>
            </div>
            <div className="blog_details">
              <h3 className="blog_title">{blog.title}</h3>
              <div className="blog_meta">
                <span>{blog.meta.Date}</span>
                <span className="blog_dot">.</span>
                <span>{blog.meta.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
