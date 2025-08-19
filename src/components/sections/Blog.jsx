// src/components/sections/Blog.jsx
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import BlogCard from '../ui/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "React Best Practices 2024",
      excerpt: "Essential patterns and practices for building scalable React applications with modern hooks and state management.",
      date: "Dec 15, 2024",
      category: "Development",
      image: "/images/blog-1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Modern CSS Techniques",
      excerpt: "Exploring the latest CSS features including Grid, Flexbox, and custom properties for responsive design.",
      date: "Dec 10, 2024",
      category: "Design",
      image: "/images/blog-2.jpg",
      readTime: "7 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Recent Insights"
          description="Sharing knowledge and experiences from my journey in frontend development."
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;