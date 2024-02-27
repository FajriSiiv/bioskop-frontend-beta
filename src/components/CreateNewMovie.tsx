import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../api";

const CreateNewMovie = () => {
  const [title, setTitle] = useState<String>("");
  const [genre, setGenre] = useState<String>("");
  const [seats, setSeats] = useState<any>();

  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-5">Membuat Film</h1>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-2 w-2/6">
          <span className="font-semibold">Judul Film</span>
          <input
            type="text"
            placeholder="Judul Film ex: Bokuno Hero"
            className="p-2 border-2 rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-2/6">
          <span className="font-semibold">Genre</span>
          <input
            type="text"
            placeholder="Genre ex: Aksi"
            className="p-2 border-2 rounded-sm"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-2/6">
          <span className="font-semibold">Kursi</span>
          <input
            type="number"
            placeholder="5 (maks:5)"
            className="p-2 border-2 rounded-sm"
            onChange={(e) => setSeats(e.target.value)}
            max={5}
            min={1}
          />
        </div>
        <div className="flex flex-col gap-2 w-2/6">
          <button
            onClick={() => {
              createMovie({ title, genre, seats });
            }}
            className="py-2 w-full bg-emerald-500 text-white font-semibold rounded-sm"
          >
            Buat Film
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewMovie;
