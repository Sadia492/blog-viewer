import React from "react";

export default async function BlogDetails({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <p>{data.body}</p>
    </div>
  );
}
