import { useEffect, useState } from "react";
import axios from "axios";
import useGetApi from "./context/useGetApi";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lasttName, setLastName] = useState('');
    const [salary, setSalary] = useState(0);
    const [country, setCountry] = useState("");
    const [age, setAge] = useState(0);
    const countryList = useGetApi("https://restcountries.com/v3.1/all");

    // useEffect(() => {
    //     axios.get("https://restcountries.com/v3.1/all").then(res => {
    //         console.log(res);
    //         setCountryList(res.data);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }, []);

    return (
        <select className="form-control">
            <option value="">select country</option>
            {
                countryList.map((x, i) => {
                    return <option key={i} value={x.alpha2Code}>{x.name.official}</option>
                })
            }
        </select>
        // <form className="container">
        //     <input 
        //         type="text"
        //         value={firstName}
        //         onChange={e => setFirstName(e.target.value)}
        //     />
        //     <input 
        //         type="text"
        //         value={lasttName}
        //         onChange={e => setLastName(e.target.value)}
        //     />
        //     <input 
        //         type="text"
        //         value={age}
        //         onChange={e => setAge(e.target.value)}
        //     />
        //     <input 
        //         type="text"
        //         value={lasttName}
        //         onChange={e => setLastName(e.target.value)}
        //     />
        // </form>
    )
}

export default Form;