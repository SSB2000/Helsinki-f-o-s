import Search from "./Components/Search";
import ListCountries from "./Components/ListCountries";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
    const [countries, setCountries] = useState([]);
    const [countriesToShow, setCountriesToShow] = useState([]);
    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((response) => setCountries(response.data))
            .then(setCountriesToShow(countries));
    }, []);
    return (
        <div>
            <Search
                countries={countries}
                setCountriesToShow={setCountriesToShow}
            />
            <ListCountries countriesToShow={countriesToShow} />
        </div>
    );
}

export default App;
