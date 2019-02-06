// Brian's Fizz Buzz with a BOOM!... with long winded if statements.
// Try it here: https://jsbin.com/?js,console


function renderListToHTML() {
    var f = "Fizz",
        b = "Buzz";

    const listDiv = $('<div class="listDiv">')

    $('.listSpace').append(listDiv);

    for (i = 1; i <= 101; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log(f + b);
            $('.listDiv').append(f + b

            )


        } else if (i % 3 == 0) {	// if there is no remainder, then i is divisible by 3
            console.log(f);
            const fText = $(`<h1 class="fizzBuzz">${f}</h1>`)
            $(".listDiv").append(fText)
        } else if (i % 5 == 0) {
            console.log(b);
            const bText = $(`<h1 class="fizzBuzz">${b}</h1>`)
            $(".listDiv").append(bText)
        } else {

            if (i >= 100) {
                console.log("BOOM!");
                const boomText = $(`<h1 class="fizzBuzz">BOOM!</h1>`)
                $(".listDiv").append(boomText)
            } else {
                console.log(i);
                const number = $("<h2>" + i + "</h2>")
                $('.listDiv').append(number)
            }

        }
    }

}


renderListToHTML();