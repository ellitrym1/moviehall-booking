import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./components/Movies";
import { Snacks } from "./components/Snacks";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="snacks" element={<Snacks />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
