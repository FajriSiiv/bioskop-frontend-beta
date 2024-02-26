let urlAPI = "https://server-bioskop.vercel.app/";

export const getAPIMovie = async () => {
  try {
    const res = await fetch(urlAPI + "movie");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMovieTicket = async (id, seatNumber) => {
  try {
    console.log(id, seatNumber);
    // const response = await fetch(urlAPI + `tickets`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     seatNumber: seatNumber,
    //     movieId: id,
    //   }),
    // });

    // if (!response.ok) {
    //   throw new Error("Gagal membuat tiket film");
    // }

    // return await response.json();
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    throw new Error("Gagal membuat tiket film");
  }
};
