export default async function fetchDataFromGoogleSheets() {
  // URL de la API de Google Sheets
  const apiUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vR093qg5ig1839CMqGHzmrtJ6xaex4v1w25P2fAE819OnEzWLDXdFQ-3IqvKe31qLp04Uhc_6MxzChS/pub?gid=0&single=true&output=csv'

  try {
    // Realizar la solicitud Fetch
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Error en la solicitud Fetch: ' + response.statusText)
    }

    // Obtener el contenido como texto
    const csvText = await response.text()
    console.log(csvText)
    // Procesar el texto CSV
    const rows = csvText.includes('\n')
      ? csvText.split('\n').slice(1)
      : csvText.split('\n')

    // Mapear cada línea CSV a un objeto JSON
    const jsonData = rows.map((data) => {
      const columns = data.split(',')

      return {
        id: columns[0],
        title: columns[1],
        resumen: columns[2],
        linkToPage: columns[3],
        linkToGithub: columns[4],
        tech: columns[5].split('-'),
        preview: columns[6],
        imagesDesk: columns[7].split('-'),
        imagesMobil: columns[8].split('-')
      }
    })

    // Ahora puedes hacer lo que quieras con los datos, por ejemplo, imprimir en la consola
    console.log(jsonData)

    return jsonData // Devuelve los datos procesados si es necesario
  } catch (error) {
    console.error(
      'Error al obtener datos desde la API de Google Sheets:',
      error
    )
    throw error // Re-lanza el error para manejarlo fuera de la función si es necesario
  }
}
