import React from "react";

export default async function BlogDetails({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-accent/20 overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-primary mb-4">{data.title}</h1>
          <p className="text-secondary text-lg leading-relaxed">{data.body}</p>
        </div>
        <div className="p-4 border-t-2 border-accent">
          <p className="text-sm text-gray-500">Post ID: {id}</p>
        </div>
      </div>
    </div>
  );
}
