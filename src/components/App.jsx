import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const SearchMovies = lazy(() => import("../pages/SearchMovies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<SearchMovies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

//<div
//   style={{
//     height: "10vh",
//     paddingTop: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     fontSize: 40,
//     color: "#010101",
//   }}>
//   React homework-05 movies
// </div>
// <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//   }}></div>
