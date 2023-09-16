//simple ternary operator 
let age = 20
let name = age > 15 ? "Zainab" : "Jack";

let component = () =>{

    return age > 15 ? <div>Zainab</div> : <div>Jack</div>
}


// ... operator -> used to get minimum changes in large amount of data

let person = {
    name: "Jack",
    age : 20
}

let person2 = {...person, name : "Ali"}


// ... operator in Arrays

let names = ["Zaynab", "Ali", "Jack"]
let names2 = [...names , "Andrew"]


// .map() function to map to individual item in the list

let names3 = ["Zaynab", "Ali", "Jack"]

names3.map((name) => {
    return name;
})


//.filter() function, similar to map() but return statement differs

let names4 = ["Jack", "Joe", "Jack"]
names4.filter((name) => {
    return name !== "Jack";
})

// fetch 

function fetchExample() {
    fetch('some link')
      .then(response => response.json())
      .then(data => console.log('Fetch Example:', data))
      .catch(error => console.error('Fetch Error:', error));
  }
  
  fetchExample();

  //await

  async function asyncAwaitExample() {
  try {
    const response = await fetch('');
    const data = await response.json();
    console.log('Async/Await Example:', data);
  } catch (error) {
    console.error('Async/Await Error:', error);
  }
}

asyncAwaitExample();