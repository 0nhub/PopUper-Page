
let init_search_term = "init"
let final_search_term = "fin"
document.addEventListener('keydown', function(event) {
    
    const new_search_term = document.getElementById("Url").value
    console.log(new_search_term)
    init_search_term = document.getElementById("Url").value
});

document.addEventListener('keyup', function(event) {
    
    const new_search_term = document.getElementById("Url").value
    console.log(new_search_term)
    final_search_term = document.getElementById("Url").value
    
    if (init_search_term === final_search_term) {
        if (event.key.length === 1) {
            document.getElementById("Url").select()
            document.getElementById("Url").value = event.key
            
        }
    }
});