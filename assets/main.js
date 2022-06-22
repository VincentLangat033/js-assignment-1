function getName(){
    // Selecting the input element and get its value 
    let getName = document.getElementByText("myname").value;
    
    document.getElementById("display").innerHTML= "Hello " + getName + ", welcome to the bootcamp"

}
 
