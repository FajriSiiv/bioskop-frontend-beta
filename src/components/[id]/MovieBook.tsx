import React from "react";
import { useParams } from "react-router-dom";
import { createMovieTicket } from "../../api";

const dummyData = [
  {
    _id: "65dc5b110f866e1624608361",
    title: "Bokuno Hero Academia",
    genre: "School",
    availableSeats: [1, 2, 5],
    bookedSeats: [3, 4],
    showtime: "2024-02-26T09:34:09.772Z",
    __v: 0,
  },
];

const MovieBook = () => {
  const { id } = useParams();
  const seatLength =
    dummyData[0].availableSeats.length + dummyData[0].bookedSeats.length;
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold mb-5">
        {dummyData[0].title}
      </h1>
      <div className="flex gap-2 mb-5 justify-center">
        <div className="flex gap-2 items-center">
          <div className="h-5 w-5 bg-black"></div>
          <span>Tempat duduk sudah di pesan</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-5 w-5 bg-emerald-500"></div>
          <span>Tempat duduk tersedia</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {[...Array(seatLength)].map((_, index) => {
          const seatNumber = index + 1;
          const isAvailable = dummyData[0].availableSeats.includes(seatNumber);
          const isBooked = dummyData[0].bookedSeats.includes(seatNumber);
          let seatColorClass = "";

          if (isAvailable) {
            seatColorClass = "bg-emerald-500";
          } else if (isBooked) {
            seatColorClass = "bg-black text-white";
          }

          return (
            <div
              className={`flex justify-center items-center h-40 relative ${seatColorClass}`}
              key={index + 1}
            >
              {index + 1}

              {isAvailable && (
                <button
                  className="absolute bottom-2 left-3 bg-white py-1 px-2 rounded-sm"
                  onClick={() => {
                    createMovieTicket(dummyData[0]._id, [index]);
                  }}
                >
                  Pesan Kursi
                </button>
              )}
            </div>
          );
        })}

        {/* <button
          className="absolute bottom-5 right-3 bg-emerald-500 py-3 px-10 rounded-sm text-white"
          onClick={() => {
            createMovieTicket(dummyData[0]._id, [index]);
          }}
        >
          Pesan Banyak Kursi
        </button> */}
      </div>
    </div>
  );
};

export default MovieBook;
