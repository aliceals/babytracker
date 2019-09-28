var pooButton = document.getElementById("Poo");
var peeButton = document.getElementById("Pee");
var enterButton = document.getElementById("enter");
var list = document.getElementById("list");

function buttonPressed(e) {
    apiPost(e.target.id)
}


pooButton.addEventListener('click', buttonPressed
)

peeButton.addEventListener('click', buttonPressed
)

// enterButton.addEventListener('click', buttonPressed
// )


function apiPost(type) {
    fetch("/api/babytracker", {
        method: "POST",
        body: JSON.stringify({
            type: type
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json()
    })
        .then(json => {
            console.log(json);
            var x = document.createElement("LI");
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes();
            x.innerHTML = json[json.length - 1] + " at " + time;
            list.appendChild(x);
        })

}



