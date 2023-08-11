const register = () => {
    
};

const loader = () => {
    let loadGif = document.createElement("img");
    let span = document.getElementById('loaderSpan');
    loadGif.src = "/assets/images/loading.gif";
    loadGif.alt = "loading...";
    span.appendChild(loadGif)
    document.querySelector("body").appendChild(span);
}

const bodyLoad = () => {
    // loader();

    // setTimeout(() => {
    //     document.getElementById('loaderSpan').style.display = 'none'
    document.getElementById('signUpPage').hidden = false
    // }, 3000);
};