import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="px-2">
      <h1 className="text-3xl font-bold text-secondary text-center mb-6">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="card bg-accent/25 shadow-xl hover:scale-105 transition-transform duration-300 h-full cursor-pointer">
              <div className="card-body p-4">
                <h2 className="card-title text-secondary text-lg font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-700">
                  Click to read more about this post.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
