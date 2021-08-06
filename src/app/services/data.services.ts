
export class DataServices { 

    findMovieByTitle(title) {
        const url = `http://www.omdbapi.com/?s=${title}&apikey=1d4c6e59`;
        return fetch(url)
        .then(res => res.json())
        .catch(err =>  console.log("Error! :D", err))
    }
    

}
