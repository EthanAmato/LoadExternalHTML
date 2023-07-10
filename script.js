function myDisplayer(html) {
    let myDemoDiv = document.querySelector("#demo")
    myDemoDiv.innerHTML = html;
}


function getFile(myCallback) {
    // fetch API -> native javascript way of asking for external
    // resources

    // Returns a Promise object
    // A promise can be in several states:
    // Resolved / Rejected
    fetch('./mycar.html')
        .then((response) => {
            // .text() returns another promise
            // so we need to wait for it to finish
            // by going into another .then()
            // Whatever is returned inside of the
            // .then() callback is what will be
            // inserted as the input to the next
            // .then()
            return response.text()
        }).then((data) => {
            myCallback(data)
        })

}


getFile(myDisplayer)