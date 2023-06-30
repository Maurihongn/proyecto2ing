let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = '41b2e0826c84492ca7d44742b26663d4';
let apiKey2 = '8783359354dd3d1529834f81c75425ea';

let difKelvin = 273.15


  document.getElementById('botonBusqueda').addEventListener('click',() =>{
    const ciudad = document.getElementById('ciudadEntrada').value
     if(ciudad){
      fetchDatosClima(ciudad)
     };
  });

  function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey2}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data));
  };

  function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML='';

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const CiudadTitulo = document.createElement('h2');
    CiudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura - difKelvin)}°`
    
    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const infoIcono = document.createElement('img');
    infoIcono.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La temperatura es: ${descripcion}`;

    divDatosClima.appendChild(CiudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(infoIcono)
    divDatosClima.appendChild(descripcionInfo)

  };