import React from "react";

const List = ({ country }) => {
    return (
        <div>
            {country}
			{/* <button onClick={handleDetails} type="submit">Show Details</button> */}
        </div>
    );
};

export default function ListCountries({ countriesToShow }) {
    return (
		<div>
			{countriesToShow.map((country) => {
				let key=country.numericCode;
				if(isNaN(key)) key=Math.random() * 1;
				return <List 
					key={key} 
					country={country.name}
				/>
			})}
		</div>
	);
}
