"use client";
import { useState, useEffect } from "react";
import { oswald, robotoCondensed } from "./css/fonts";
import Image from "next/image";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then(setCourses);
    fetch("/api/reviews")
      .then((res) => res.json())
      .then(setReviews);
  }, []);

  return (
    <main className="mx-auto  bg-[url('/bg.png')] bg-center bg-repeat bg-size-[23rem] bg-[.4]">
      {/* Hero Section */}
      <section className="w-full h-screen p-6">
        <header className="w-full flex justify-between items-center">
          <p className="text-3xl uppercase font-medium">
            <span>Astrology</span>
            <span className="font-light text-lg">.com</span>
          </p>
          {/* <button className={`text-lg uppercase font-medium  bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-xs`}>Explore Courses</button> */}
        </header>

        <div className="flex h-[calc(100%-1rem)]">
          <div className="w-[50%] flex flex-col justify-center gap-1 h-full">
            <p className="text-2xl font-medium text-amber-900">
              Explore the Horoscope
            </p>
            <div className="flex items-center gap-2">
              <span className="w-18 h-0.5 bg-amber-900"></span>
              <span className="w-1 h-1 rounded-full bg-amber-900"></span>
            </div>

            <h1
              className={`text-7xl font-extrabold uppercase ${oswald.className} mt-2 mb-5`}
            >
              Welcome to the
              <br /> world of{" "}
              <span className="text-amber-50 [-webkit-text-stroke:1.5px_#622] relative z-10">
                <Image
                  src={"/style1.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="absolute -top-8 -right-15 w-10 aspect-square -z-10"
                />
                Astrology
              </span>
            </h1>

            <p className="text-xl flex flex-col">
              <span>
                Learn about astrology, zodiac signs, retrogrades and more!
              </span>
              <span>
                Your world becomes clear, once you understand how the <br />{" "}
                universe influence it.
              </span>
            </p>

            <div
              className={`flex gap-4 *:px-6 *:py-2 *:rounded-sm *:border-indigo-700 *:border-2 *:hover:border-indigo-700 *:hover:bg-indigo-800 *:transition-all *:cursor-pointer text-2xl mt-6`}
            >
              <button className="bg-indigo-700 text-white">
                Explore Courses
              </button>
              <button className="hover:text-white">Write a Review</button>
            </div>
          </div>

          <img
            src={
              "https://cdn.pixabay.com/photo/2015/10/17/19/30/astrology-993127_1280.jpg"
            }
            alt="Horoscope chart"
            className="rounded-xs aspect-square w-[50%] absolute top-0 right-0 h-screen object-center object-cover rounded-l-sm"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="my-12">
        <h2
          className={`text-3xl font-bold mb-4 px-6 pt-6 pb-8 underline text-amber-950 ${oswald.className} text-center uppercase`}
        >
          Our Courses
        </h2>
        <div className="flex flex-col gap-6">
          {courses.map((c, i) => (
            <div key={c._id} className={`flex h-128 bg-slate-800/10`}>
              {typeof c.imageUrl === "string" && c.imageUrl.length > 0 && (
                <img
                  src={c.imageUrl ?? null}
                  alt={c.title}
                  className="object-center object-cover w-lg aspect-square rounded-r-sm"
                />
              )}

              <div className={`p-12 flex flex-col gap-2 w-6xl`}>
                <p
                  className={`font-bold px-5 py-1 ${
                    c.category === "Beginner"
                      ? "bg-amber-600"
                      : c.category === "Intermediate"
                      ? "bg-amber-700"
                      : c.category === "Advanced"
                      ? "bg-amber-800"
                      : "bg-amber-500"
                  } text-white text-sm rounded-full tracking-wider w-fit uppercase select-none`}
                >
                  {c.category ?? "Beginner"}
                </p>

                <h3
                  className={`text-4xl font-bold my-4 uppercase tracking-wide ${oswald.className}`}
                >
                  {c.title}
                </h3>
                <p className="text-gray-800 tracking-wide text-shadow-md text-xl mb-auto">
                  {c.description}
                </p>
                <div className="flex gap-5 items-center">
                  <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-sm text-xl cursor-pointer">
                    Download Curriculum
                  </button>
                  <p className="text-xl font-medium">
                    Taken this course?{" "}
                    <a className="underline text-indigo-800 cursor-pointer">
                      Review it
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-12 p-6 pt-0">
        <h2
          className={`text-3xl font-bold mb-4 px-6 pt-6 pb-8 underline text-amber-950 ${oswald.className} text-center uppercase`}
        >
          What People Say
        </h2>
        <div className="flex gap-5 items-center justify-center">
          {reviews.map((r) => (
            <div
              key={r._id}
              className="p-4 rounded-lg bg-amber-50/54 backdrop-blur-sm hover:bg-amber-50 w-96 h-96 shadow-sm flex flex-col gap-2 hover:shadow-2xl hover:scale-105 border-amber-50 transition-all"
            >
              <p className={`font-bold text-lg ${robotoCondensed.className}`}>
                {r.name}
              </p>
              <p
                className={`text-gray-600 -mt-3 text-sm ${robotoCondensed.className}`}
              >
                {r.courseTaken}
              </p>
              <p>{r.comment}</p>

              <div className="flex justify-between mt-auto items-end">
                <span className="text-yellow-500 text-2xl">
                  {"★".repeat(r.rating)}
                </span>
                <p className="text-xs">
                  {new Date(r.at ?? 0).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 ">
        <h2
          className={`text-3xl font-bold mb-4 px-6 pt-6 pb-8 underline text-amber-950 ${oswald.className} text-center uppercase`}
        >
          Leave a Review
        </h2>
        <form className="bg-slate-800/10 w-full p-6">
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto">
            <div className="flex gap-4 w-full max-w-2xl items-center justify-center">
              <input
                name="name"
                placeholder="Name"
                className="w-full max-w-lg bg-amber-50 px-6 py-2 rounded-sm outline-none"
              />
              <input
                name="courseTaken"
                placeholder="What course have you taken?"
                className="w-full max-w-lg bg-amber-50 px-6 py-2 rounded-sm outline-none"
              />
            </div>
            <textarea
              name="comment"
              placeholder="Your experience..."
              className="w-full max-w-2xl bg-amber-50 px-6 py-2 rounded-sm outline-none"
              rows={10}
            />
            <input
              name="rating"
              placeholder="Rating"
              className="w-full max-w-2xl bg-amber-50 px-6 py-2 rounded-sm outline-none"
            />
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-sm text-xl cursor-pointer ml-auto">
              Submit
            </button>
          </div>
        </form>
      </section>

      <footer className="p-6 pt-0">
        <p className="text-center text-shadow-md text-lg">
          All rights reserved. &copy; Astrology 2025
        </p>
      </footer>
    </main>
  );
}
