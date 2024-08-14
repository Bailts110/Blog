import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdatePage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
        setTags(data.tags.join(', ')); 
      })
      .catch(error => console.error('Error:', error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        body,
        tags: tags.split(',').map(tag => tag.trim()), 
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Post updated:', data);
        
        navigate('/');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Update Post</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-md"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
