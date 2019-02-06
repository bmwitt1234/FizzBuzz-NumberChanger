// Brian's Fizz Buzz with a BOOM!... with long winded if statements.
// Try it here: https://jsbin.com/?js,console
let compareNum1 = 3;
let compareNum2 = 5;

function renderListToHTML() {
    var f = "Fizz",
        b = "Buzz";

    const listDiv = $('<div class="listDiv">')

    $('.listSpace').append(listDiv);

    for (i = 1; i <= 101; i++) {

        if (i % compareNum1 == 0 && i % compareNum2 == 0) {
            console.log(f + b);
            $('.listDiv').append(f + b

            )


        } else if (i % compareNum1 == 0) {	// if there is no remainder, then i is divisible by 3
            console.log(f);
            const fText = $(`<h1 class="fizzBuzz">${f}</h1>`)
            $(".listDiv").append(fText)
        } else if (i % compareNum2 == 0) {
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


function changeFunction(event) {
    event.preventDefault();
    console.log("change button clicked");
    let userinput1 = $('#input1').val();
    let userinput2 = $('#input2').val();

    console.log(userinput1, userinput2)

    compareNum1 = userinput1;
    compareNum2 = userinput2;

    console.log("compare numbers after clicking change button " + compareNum1, compareNum2)


    $(".listDiv").empty();
    renderListToHTML();

};

$('#changeButton').on('click', changeFunction);




renderListToHTML();