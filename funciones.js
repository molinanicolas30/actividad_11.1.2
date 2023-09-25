const boton = document.getElementById("boton");
const capital = document.getElementById("capital");

boton.addEventListener("click", async () => {
    const pais = document.getElementById("input").value;
    const URL = `https://restcountries.com/v3.1/translation/${pais}`;
    const devuelve = await fetchData(URL);
    console.log(devuelve);
    const cap = devuelve[0].capital;
    capital.innerHTML = ` 
    <p> la capital de ${pais} es: ${cap}
    `;

});
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error al obtener los datos");
      }
    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }
  }
