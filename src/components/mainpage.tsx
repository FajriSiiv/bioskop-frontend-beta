import React, { useEffect, useState } from "react";
import { getAPIMovie } from "../api";
import { Link } from "react-router-dom";

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

const Mainpage = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPIMovie();

      setMovie(data);
      console.log(movie);
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-3 flex-start">
      {dummyData?.map((movieSet: any) => {
        let timeNow = new Date("2024-02-26T10:34:09.772Z");
        let date = new Date();
        let milisecond = date.getTime() - timeNow.getTime();
        let minutes = Math.abs(Math.floor(milisecond / (1000 * 60)));

        return (
          <div
            className="rounded-md px-3 py-2 flex flex-col gap-y-1 border-2"
            key={movieSet._id}
          >
            <h2 className="text-xl font-semibold">Name : {movieSet.title}</h2>
            <div className="flex gap-2 items-center">
              <span>Genre : </span>
              <span className="px-2 py-1 bg-slate-800 text-stone-100 rounded-md text-sm">
                {movieSet.genre}
              </span>
            </div>

            <span className="">
              Available Seats : {movieSet.availableSeats.length}
            </span>
            <span className="">
              Booked Seats : {movieSet.bookedSeats.length}
            </span>
            <span>Show Movie : {minutes} Menit</span>

            <Link
              to={`/${movieSet._id}`}
              // disabled={movieSet.availableSeats.length === 0}
              className={`py-1 px-3 rounded-md  text-white font-semibold mt-4 text-center  
                ${
                  movieSet.availableSeats.length === 0
                    ? "bg-slate-600"
                    : "bg-emerald-500"
                }
              `}
            >
              {movieSet.availableSeats.length === 0 ? "Full" : "Book Seat"}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Mainpage;
