var Student = document.querySelector(".table");
var container = document.createElement('p')
Gender1 = document.querySelectorAll('input[type="radio"]');



Studentdata ={
Name1 : document.getElementById("name"),
Age1 : document.getElementById("age"),
Course1 : document.getElementById("choice"),
gender: container,
Email1 : document.getElementById("email")
}

function bad(){
for(i=0;i<Gender1.length;i++){
    if(Gender1[i].checked){
       container.textContent = Gender1[i].value
      }}
};

function ridoff(event){
    console.log(event);
    event.target.remove();
}


  




const Element = (Studentdata) => 


`
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            
            <tr>
            
            <th>${Studentdata.Name1.value}</th>
            <th>${Studentdata.Age1.value}</th>
            <th>${Studentdata.Course1.value}</th>
            <th>${Studentdata.gender.textContent}</th>
            <th>${Studentdata.Email1.value}</th>
            <th><button onclick="ridoff(event)">Delete</button></th>
             </tr>
        </table>
    `



function Save() {
    console.log( Studentdata.gender)
    Student.insertAdjacentHTML("beforeend", Element(Studentdata));
   

}

