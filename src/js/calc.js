function calc() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    $.ajax({
        type: "POST",
        url: "../php/calc.php",
        data: {first:a, second:b}
    }).done(function(result) {
        $('#result').html(result);
    });
}