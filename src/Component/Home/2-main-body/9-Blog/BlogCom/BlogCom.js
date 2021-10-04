import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BlogCom = ({ blog }) => {
  return (
    <div className="single_blog_box">
      <div className="single_box_img">
        <img src={blog.url} alt="blog-img" />
      </div>
      <div className="blog_box_info">
        <div className="admin_date">
          <div className="admin">
            <PersonOutlineIcon />
            <span>Admin</span>
          </div>
          <div className="date">
            <ArticleIcon />
            <span>{blog.date}</span>
          </div>
        </div>

        <h1>{blog.title}</h1>
        <p>{blog.desc}</p>
        <div className="comment_read">
          <span>{blog.comment}</span>
          <div className="read">
            <span>READ MORE</span>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCom;
