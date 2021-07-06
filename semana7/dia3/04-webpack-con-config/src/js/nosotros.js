import axios from "axios";

axios
.get('https://api.themoviedb.org/3/movie/550?api_key=028a32abb09e0d93405b2207e3f7ca65'
)
.then(({data})=>{
    console.log(data);
});
