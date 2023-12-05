const allSuraNames = document.querySelector(".sura-lists");
//get all sura from the api

let getSuraNames = () => {
    let url = "https://api.alquran.cloud/v1/surah"
    //sending request using axios
    axios.get(url)
    .then((response) => {
        const data = response.data.data;
        console.log(data);
        data.map((eachSura =>{
            console.log("eachSura",eachSura);

            let suraNumber = eachSura.number;
            let suraName = eachSura.name;
            allSuraNames.innerHTML += `
            <li onclick=handleClick(this.value) class="sura" value="${suraNumber}">${suraName}</li>
            `

        }))

    })
    .catch((error) => {
        alert(error)
    });
};
window.addEventListener("load", getSuraNames);
let handleClick = (value) =>{
    window.location.href = "showsurah.html";
    let surahNumber = value;
    localStorage.setItem("apiResponse",JSON.stringify (surahNumber));
}
