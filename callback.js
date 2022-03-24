// function welcomeMessage(name){

//     console.log(name);
// }

// const personName = 'Tom Hanks';

// welcomeMessage(personName)



/* 
    ----------------function in an array----------------
*/


    // function welcomeMessage(name){

    //     console.log(name)
    // }


    // const personNames = ['Tom Hanks', 'Tom Cruise', 'Tom Brady']

    // welcomeMessage(personNames)



    /* 
    
    -----function in object--------
    
    
    */


    // function welcomeMessage(objName){

    //     console.log(objName)
    // }


    // const myObj = {name: 'Tom Hanks', age: 28, occupation: 'Web Programmer'};

    // welcomeMessage(myObj)




    // call back function


    function welcomeMessage(name,greetHandler){

        greetHandler(name)
    }

    function greetMorning(name){

        console.log('Good Morning', name)
    }
    function greetAfternoon(name){

        console.log('Good Afternoon', name)
    }
    function greetEvening(name){

        console.log('Good Evening', name)
    }

    welcomeMessage('tom hanks', greetMorning)
    welcomeMessage('sakib hanks', greetAfternoon)
    welcomeMessage('Bappa Raj', greetEvening)