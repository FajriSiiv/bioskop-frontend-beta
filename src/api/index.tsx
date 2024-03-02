let urlAPI = "https://server-bioskop.vercel.app/";

// MOVIE
export const getAPIMovie = async () => {
  try {
    const res = await fetch(urlAPI + "movie");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async ({ seats, title, genre }: any) => {
  console.log(seats, title, genre);

  try {
    const response = await fetch(urlAPI + `movie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seat: seats,
        title: title,
        genre: genre,
      }),
    });
    if (!response.ok) {
      throw new Error("Gagal membuat tiket film");
    }

    return await response.json();
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    throw new Error("Gagal membuat tiket film");
  }
};

// TICKET
export const createMovieTicket = async (id, seatNumber) => {
  try {
    const response = await fetch(urlAPI + `ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seatNumber: seatNumber,
        movieId: id,
      }),
    });

    if (!response.ok) {
      throw new Error("Gagal membuat tiket film");
    }

    return await response.json();
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    throw new Error("Gagal membuat tiket film");
  }
};
