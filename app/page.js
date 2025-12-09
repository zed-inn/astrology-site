"use client";
import { useState, useEffect } from "react";

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
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
        Mystic Astrology
      </h1>

      {/* Courses Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((c) => (
            <div
              key={c._id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="text-gray-600">{c.description}</p>
              <p className="text-green-600 font-bold mt-2">${c.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">What People Say</h2>
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r._id} className="bg-gray-50 p-4 rounded">
              <div className="flex items-center gap-2">
                <span className="font-bold">{r.name}</span>
                <span className="text-yellow-500">{"★".repeat(r.rating)}</span>
              </div>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add a "Leave a Review" form here connecting to POST /api/reviews */}
    </main>
  );
}
