// //Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

for (var i = 1; i < 101; i++) {


    var fizz = (i % 3);
    var resto1 = fizz;
    var buzz = (i % 5);
    var resto2 = buzz;


    if (resto1 == 0 && resto2 == 0) {

        console.log('fizzbuzz');

    } else if (fizz == 0) {

        console.log('fizz');
    } else if (buzz == 0) {

        console.log('buzz');
    } else {
        console.log(i);
    }


}
