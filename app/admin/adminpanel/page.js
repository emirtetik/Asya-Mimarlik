'use client'
import React, { useState } from 'react';
import { client } from '../../lib/sanity';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting blog:", { title, overview, content });
    // Yeni blog belgesi oluştur
    const newBlog = {
      _type: 'post',
      title,
      overview,
      content,
    };

    try {
      // Sanity API'ye yeni blogu kaydet
      await client.create(newBlog);
      alert('Yeni blog başarıyla eklendi!');
      setTitle('');
      setOverview('');
      setContent('');
      router.push('/project'); 
    } catch (error) {
      alert('Blog eklenirken bir hata oluştu.');
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Yeni Blog Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-lg font-semibold">Başlık:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-lg font-semibold">Özet:</label>
          <input
            type="text"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-lg font-semibold">İçerik:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Blog Ekle
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
