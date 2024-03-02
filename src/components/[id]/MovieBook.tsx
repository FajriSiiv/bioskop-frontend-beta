import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createMovieTicket, getAPIMovie } from "../../api";

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
  const [movie, setMovie] = useState<any>(null);
  const [seatLength, setSeatLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const DetailNull = () => {
    return <h1 className="text-4xl font-bold">ERROR PAGE!</h1>;
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await getAPIMovie();
      setMovie(data);
      setSeatLength(
        data[0]?.availableSeats.length + data[0]?.bookedSeats.length
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  console.log(movie);

  return (
    <div className="p-10 ">
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
        <div className="">
          <Link
            to={"/"}
            className="absolute top-5 left-3 bg-rose-500 text-white  py-1 px-2 rounded-md"
          >
            Kembali
          </Link>
        </div>
      </div>

      {!movie && <DetailNull />}
      <div className="grid grid-cols-5 gap-2">
        {[...Array(seatLength)].map((_, index) => {
          const seatNumber = index + 1;
          const isAvailable = movie[0].availableSeats.includes(seatNumber);
          const isBooked = movie[0].bookedSeats.includes(seatNumber);
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
                  onClick={async () => {
                    try {
                      setLoading(true);
                      await createMovieTicket(movie[0]._id, [index + 1]);
                      setLoading(false);

                      fetchData();
                    } catch (error) {
                      console.error(
                        "Terjadi kesalahan saat membuat tiket:",
                        error
                      );
                    }
                  }}
                >
                  Pesan Kursi
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieBook;
