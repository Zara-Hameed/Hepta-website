// src/components/BlogLayout.jsx
import '../Bloglayout/Bloglayout.css'

import img1 from '../../assets/img_1.jpg.webp';
import img2 from '../../assets/img_2.jpg.webp';
import img3 from '../../assets/img_3.jpg.webp';

const blogPosts = [
  { img: img1, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
  { img: img2, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
  { img: img1, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
  { img: img2, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
  { img: img1, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
  { img: img2, date: 'February 26, 2018', title: 'Free Template by Colorlib' }
];

const popularPosts = [img1, img2, img1, img2, img3];

const BlogLayout = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          {/* Left Content Area */}
          <div className="left-content">
            <div className="posts-grid">
              {blogPosts.map((post, index) => (
                <div className="post-card" key={index}>
                  <a href="#">
                    <img src={post.img} alt="Post" className="post-img" />
                  </a>
                  <div className="post-info">
                    <span className="post-date">{post.date}</span>
                    <h3 className="post-title">
                      <a href="#">{post.title}</a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="sidebar">
            <div className="search-box">
              <input type="text" placeholder="Search..." />
            </div>

            <div className="side-widget">
              <h4>Popular Post</h4>
              <ul className="popular-list">
                {popularPosts.map((img, index) => (
                  <li key={index}>
                    <a href="#" className="popular-post">
                      <img src={img} alt="Popular" />
                      <div>
                        <span className="meta">February 27, 2018</span>
                        <h5>Free Template by Colorlib</h5>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side-widget">
              <h4>Categories</h4>
              <ul className="category-list">
                <li><a href="#">Events <span>(12)</span></a></li>
                <li><a href="#">Resto bar <span>(4)</span></a></li>
                <li><a href="#">Celebration <span>(23)</span></a></li>
                <li><a href="#">Promos <span>(8)</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
