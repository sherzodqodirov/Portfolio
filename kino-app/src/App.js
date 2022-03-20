import React, { useEffect, useReducer, useState } from "react";
import AllMovies from "./components/AllMovies/AllMovies";
import { RAPID_API_KEY } from "./components/constants/RapidKey";
import Search from "./components/search/Search";
import Main from "./layout/Main/Main";
import Container from "./UI/Container/Container";
import { ToastContainer, toast } from "react-toastify";

const initialData = {
  isLoading: false,
  movies: [],
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, movies: action.movies };
    case "LOADING_START":
      return { ...state, isLoading: true };
    case "LOADING_FINISH":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

function App() {
  const [resData, dispatch] = useReducer(reducer, initialData);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);
  async function fetchMovies(searchValue = search) {
    try {
      dispatch({ type: "LOADING_START" });
      let res;
      const header = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY,
        },
      };

      if (searchValue.trim().length !== 0) {
        res = await fetch(
          `https://data-imdb1.p.rapidapi.com/titles/search/title/${searchValue}?info=mini_info&limit=10&page=1&titleType=movie`,
          header
        );
      }

      if (searchValue.trim().length === 0) {
        res = await fetch(
          "https://data-imdb1.p.rapidapi.com/titles?info=mini_info&limit=12&page=1&titleType=movie&genre=Action&year=2022",
          header
        );
      }
      if (!res.ok) {
        throw new Error("Something went wrong" + res.status);
      }
      const data = await res.json();
      dispatch({ type: "FETCHING", movies: data.results });
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
    dispatch({ type: "LOADING_FINISH" });
  }

  const handleSearch = (value) => {
    setsearch(value);
    fetchMovies(value);
  };
  return (
    <>
      <Main>
        <div className="d-center">
          <Search handleSearch={handleSearch} />
        </div>
        <Container>
          <div className="row">
            {resData.isLoading ? "Loading.." : <AllMovies resData={resData} />}
          </div>
        </Container>
      </Main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
