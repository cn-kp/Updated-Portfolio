var submitBuutton=document.querySelector("#submit-button")
var contactName=document.querySelector("#contact-name")
var contactEmail=document.querySelector("#contact-email")
var contactMessage=document.querySelector("#contact-message")

submitBuutton.addEventListener("click",function(){
    var contactList=JSON.parse(localStorage.getItem("contacts"))
    if (!contactList){
        contactList=[]
    }
    var contact= {
        name:"",
        email:"",
        message:""
    }
    contact.name=contactName.value;
    contact.email=contactEmail.value;
    contact.message=contactMessage.value;
    contactList.push(contact)
    localStorage.setItem("contacts",JSON.stringify(contactList))
    console.log(contactList)
})

