import React from "react";
import Link from "next/link";
import { client } from "../lib/sanity";
import Slider from "../components/Project/Slider";
import Image from "next/image";
import { urlFor } from "../lib/sanityImageUrl";

async function getData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Project() {
  const data = await getData();

  return (
    <>
      <Slider />
      <main className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              All Project
            </h1>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((post) => (
              <li key={post._id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 ">
                 
                  <Link
                    href={`/project/post/${post.slug.current}`}
                    prefetch
                    className="space-y-3 xl:col-span-3  min-h-[320px]"
                  >
                    <div className="">
                    {post.images && (
                      <div className="w-[300px] h-[150px] overflow-hidden">
                        <Image
                          src={urlFor(post.images.asset).url()}
                          alt={post.images.alt}
                          width={300}
                          height={300}
                          objectFit="cover"
                          className="object-cover  max-h-full max-w-full m-0   "
                        />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                        {post.title}
                      </h3>
                     
                    </div>

                    <p className="prose text-gray-500 max-w-none dark:text-gray-400 line-clamp-2">
                      {post.overview}
                    </p>
                    <div>
                    <p className=" leading-6 float-right text-teal-500">
                      {new Date(post._createdAt).toISOString().split("T")[0]}
                    </p>
                  </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
