var dob = document.querySelector("#dob");
var fav = document.querySelector('#fav');
var submit = document.querySelector("#submit");
var submit1 = document.querySelector("#submit1");
var welcome = document.querySelector("#welcome");
var main = document.querySelector("#main");
var res = document.querySelector("#res");
var output = document.querySelector("#output");
var error = document.querySelector("#error")
var again = document.querySelector("#reload")

submit1.addEventListener("click", () => {

    welcome.style.display = "none";
    main.style.display = "block";

})

again.addEventListener("click", () => {
    window.location.reload("/")

})


function lucky(d, f) {
    var status;
    if (d % f == 0) {
        status = " You are lucky  😀 ";

    } else {
        status = " You are not lucky  😞 ";
    }
    return status;
}

function sumOfDigits(d) {
    var sum = 0;
    while (d >= 0) {
        if (d > 0) {
            sum = sum + Math.floor(d % 10);

            d = Math.floor(d / 10);

        } else {

            break;
        }
    }

    return sum

}

submit.addEventListener("click", () => {
    var dateofbirth = String(dob.value);
    var favroite = fav.value;

    if (dateofbirth == "" || favroite == "" || dateofbirth == 0 || favroite == null) {
        error.style.display = "block";
        error.innerHTML = " Please fill all the fields"

    } else {
        main.style.display = "none";
        res.style.display = "block";
        dateofbirth = dateofbirth.replaceAll("-", "");
        dateofbirth = Number(dateofbirth)


        sum = sumOfDigits(dateofbirth);
        // alert(sum)
        var status = lucky(sum, favroite)
        // alert(status)
        output.innerHTML = status

    }

})