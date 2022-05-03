import axios from "axios"

 export const baseUrl = 'https://bayut.p.rapidapi.com'




  export const fetchApi = async (url) => {
      const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '57a7e7a7d3msh06fbca5471056a9p1c6ecajsn1995d7346da5'
          }
      })
      return data;
  }