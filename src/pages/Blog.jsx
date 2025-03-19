import { useState } from 'react';
import { FaCalendar, FaClock, FaTags } from 'react-icons/fa';

function BlogCard({ title, date, readTime, excerpt, tags, image }) {
  return (
    <div className="bg-dark rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 cursor-pointer">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-xs" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-xs" />
            <span>{readTime} min read</span>
          </div>
        </div>
        
        <p className="text-gray-400 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-2">
          <FaTags className="text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const blogPosts = [
    {
      title: "Getting Started with React and TypeScript",
      date: "June 15, 2023",
      readTime: 5,
      excerpt: "Learn how to set up a new React project with TypeScript and understand the basic concepts of using them together.",
      tags: ["React", "TypeScript", "Web Development"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Advanced CSS Grid Techniques",
      date: "June 10, 2023",
      readTime: 7,
      excerpt: "Explore advanced CSS Grid techniques and learn how to create complex layouts with ease.",
      tags: ["CSS", "Web Design", "Frontend"],
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Building RESTful APIs with Node.js",
      date: "June 5, 2023",
      readTime: 10,
      excerpt: "A comprehensive guide to building scalable RESTful APIs using Node.js and Express.",
      tags: ["Node.js", "API", "Backend"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 rounded-lg bg-dark border border-gray-800 focus:border-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-lg bg-dark border border-gray-800 focus:border-blue-500 focus:outline-none"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No blog posts found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Blog;