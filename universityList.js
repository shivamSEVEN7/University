let li = document.querySelector('ul');
let table = document.querySelector('table');
let btn = document.querySelector('button');

btn.addEventListener('click', async () => {

    let country = document.querySelector('input').value;
    let universityArray = await getuniversty(country);
    for (let i = 0; i < universityArray.length; i++) {
        let name = document.createElement('td');
        let coun = document.createElement('td');
        let row = document.createElement('tr');
        name.innerText = universityArray[i].name;
        console.log(universityArray[i].name);
        coun.innerText = universityArray[i]['state-province'];
        console.log(universityArray[i].country);
        row.appendChild(name);
        row.appendChild(coun);
        table.append(row);


    }


})
async function getuniversty(country) {
    let res = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
    return res.data;
    ;
}