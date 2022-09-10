const countries = fetch(`https://restcountries.com/v3.1/all`)
countries.then(res => console.log(res))