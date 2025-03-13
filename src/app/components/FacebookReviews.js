"use client";
import { useEffect, useState } from "react";

export default function FacebookReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/facebookReviews");
        const data = await response.json();
        setReviews(data || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Opiniones de Clientes</h2>
      <div className="mt-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border p-4 mb-4 rounded shadow">
              <p className="font-semibold">{review.reviewer.name}</p>
              <p>{review.review_text}</p>
            </div>
          ))
        ) : (
          <p>No hay opiniones disponibles.</p>
        )}
      </div>
    </div>
  );
}
