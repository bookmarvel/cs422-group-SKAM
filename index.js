

// code for simple cat test on workouts page
function displayCat() {
    let catButton = document.getElementById('give-cat')

    let catDiv = document.getElementById('cat-pic')

    // catDiv.innerHTML = '<h2>Sorry could not retrieve a cat :(</h2>'
    catDiv.innerHTML = `<h3>Here have a cat :)</h3>
                        <img src="images/cat-pic.jpg" alt="kitty" />`

    // fetch('https://api.thecatapi.com/v1/images/search?')
    // .then(res => res.json())
    // .then(cats => {
    //     cats.forEach(cat => {
    //         catDiv.innerHTML = `<h3>Here have a cat :)</h3>
    //         <img src="${cat.url}" alt="kitty" />`
    //     });
    // })
}