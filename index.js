
console.log("Hello")
document.getElementById('search-icon').addEventListener('click',handleEvents)

function handleEvents(event){
    document.getElementById('search-input')
    input = event.target.value
    axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBn8v2EyNp4IJjIOv1pXmOGvCi2Pn3hFo4&cx=017576662512468239146:omuauf_lfve&q=${input}`)

}

function handleResponse(){
    
    console.log("Are we in?")
    console.log(response)
}


