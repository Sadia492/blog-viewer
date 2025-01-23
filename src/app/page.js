import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
