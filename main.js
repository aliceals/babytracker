var pooButton = document.getElementById("poo");
var peeButton = document.getElementById("pee");
var enterButton = document.getElementById("enter")

function buttonPressed(e) {
    console.log(e.target.id + " has been pressed")
}


pooButton.addEventListener('click', buttonPressed
)

peeButton.addEventListener('click', buttonPressed
)

enterButton.addEventListener('click', buttonPressed
)


