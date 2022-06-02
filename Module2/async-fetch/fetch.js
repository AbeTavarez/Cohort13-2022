

fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
.then(response => response.json()) //parsing the res to json
.then(users => {
    // 
    console.log(users);
})
.catch(err => console.log(err)) // handle errors