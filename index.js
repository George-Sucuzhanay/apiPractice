// https://dictionaryapi.dev/
const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'//use your chosen api url here
axios.get(`${BASE_URL}`)
   .then(res => {
        console.log(res);
   })

let response = async function() {
     .then(res => {
     const catCategories = res.data
     for(let i = 0; i < catCategories.length; i++){
     dropdown.innerHTML += `<option id=${catCategories[i].id}>${catCategories[i].name} <option/>`
     console.log(catCategories)
     }
}).catch(err => {
     console.log(err)
})

}
   

//    const dropdown = document.querySelector("select");
//    const button = document.querySelector("#try-me");
//    const picDisplay = document.querySelector("#catpic")
   
//    let response = async function() {
//        await axios.get(`${BASE_URL}categories`,
//        {
//            "x-api-key": API_KEY
//        }).then(res => {
//            const catCategories = res.data
//            for(let i = 0; i < catCategories.length; i++){
//                dropdown.innerHTML += `<option id=${catCategories[i].id}>${catCategories[i].name} <option/>`
//                console.log(catCategories)
//            }
//        }).catch(err => {
//            console.log(err)
//        })
//    }
   
//    button.addEventListener('click', async() => {
//        const categoryId = dropdown[dropdown.selectedIndex].id
//        // when we work with dom, specifically with dropdown, with a select
//        // element, we are to use the selectedIndex
//        try{
//            const response = await axios.get{`${BASE_URL}images/search?category_ids=${categoryId}`,
//        {
//            "xi=api-key" : API_KEY
//        }
//        }
//            const catPhoto = 
//        picDisplay,innerHTML = `<img> src=${catPhoto}>`
//        }catch (error){
//            console.log(error)
//        }
   
//    })
//    response()