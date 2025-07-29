import React from "react";
import "./Blogpost.css";
import img1 from "../../assets/img_1.jpg.webp";
import img2 from "../../assets/img_2.jpg.webp";
import img3 from "../../assets/img_3.jpg.webp";

const blogPosts = [
  {
    date: "February 26, 2018",
    title: "45 Best Places To Unwind",
    image: img1,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    date: "February 26, 2018",
    title: "45 Best Places To Unwind",
    image: img2,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    date: "February 26, 2018",
    title: "45 Best Places To Unwind",
    image: img3,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const BlogPosts = () => {
  return (
    <section className="blog-section blog-post-entry bg-light">
      <div className="container">
        <div className="header">
          <h2 className="heading" data-aos="fade-up">
            Recent Blog Post
          </h2>
          <p className="lead" data-aos="fade-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="posts">
          {blogPosts.map((post, index) => (
            <div
              className="post"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="media">
                <a href="#" className="image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image"
                  />
                </a>
                <div className="media-body">
                  <span className="meta-post">{post.date}</span>
                  <h2 className="post-title">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
