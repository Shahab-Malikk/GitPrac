//DOM Manipulation

const head = document.createElement('H1');
head.innerHTML = 'Hello World';
document.body.appendChild(head);


//arrow function

const SomeFunction = () => {
    const head = document.createElement('H1');
    head.innerHTML = 'Hello World';
    document.body.appendChild(head);
}

{/* <button onclick={() => {
    console.log('Hello World');
}}>
    Click Me
</button> */}

SomeFunction();


//ternary operator

let age = 18;
let name = 'Ali';

 name = age > 18 ? 'Ali' : 'Ahmed';

 console.log(name);


 //****************************************OBJECTS*********************************** */

    const person = {

       name: 'Arsalan',
        age: 18,
        isMarried: false,
  

    }


    //if you already have a variabke with same name as object property then you can do this

    const person2 = {

        name: 'Jack',
         age, //this will automatically assign the value of age variable to age property
         isMarried: false,
   
 
     }

     //If you want to cretae an object with almost all same properties as another but change just one or two properties then you can do this

        const person3 = { ...person, name: 'Nelson'};
            
        
        const name1 = person.name;
        const age1 = person.age;
        const isMarried = person.isMarried;
     //we can do the same in array as well
        const array1 = [1,2,3,4,5];
        const array2 = [...array1, 6,7,8,9,10];

        //object destructuring
        //doing same thing as above but in one line
        
        const {name2, age2, isMarried2} = person;

    // console.log(person.name);
    // console.log(person.age);
    // console.log(person.isMarried);



    //FILTERS

    const Students = ["Ali", "Ahmed", "Arsalan", "Nelson", "Jack", "John", "Doe"];

    ///Map function

    const StudentsWithId = Students.map((student, index) => {
        return {id: index, name: student};
    });


    //Filter function

    const FilteredStudents = Students.filter((student) => { //filter function returns an array
        return student.length > 3;
    });

    //filter function where it checks if the student name starts with A
    
    const FilteredStudents2 = Students.filter((student) => { //filter function returns an array
        return student[0] === 'A';
    });
    

    //Reduce function

    const sum = Students.reduce((accumulator, student) => {
        return accumulator + student.length;
    }, 0);



    //ASYNC AND AWAIT
    //Promise
    //Fetch


//for example an app we are fetching data from an API and somehow we are trying to access the data before it is fetched so we will get an error amd to avoid that we use async and await or opttional chaining

//Optional chaining

const fetchedData = async () => {
    const data = await fetch('https:/imdb.com');
    const personname = data?.person?.name; //if the data is not fetched then it will return undefined instead of error
    console.log(`The person name is ${personname}`);
}

//Template literals

const fetchdata1 = async (searchterm) => { //the argument searchterm is the name of the person we are searching for
    const data = await fetch('https:/imdb.com/searchterm=${searchterm}'); //so here we are using template literals to add the searchterm in the url
    const personname = data?.person?.name;
    console.log(`The person name is ${personname}`);
}