// //Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

for (var i = 1; i <= 100; i++) {
    var fizz = (i % 3);
    var buzz = (i % 5);
    if (fizz == 0 && buzz == 0) {

        console.log('fizzbuzz');

    } else if (fizz == 0) {

        console.log('fizz');
    } else if (buzz == 0) {

        console.log('buzz');
    } else {
        console.log(i);
    }


}
