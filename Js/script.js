document.getElementById("signIn").onclick = function () {
   document.getElementById("signUp").style.display = "block"
   document.getElementById("signIn").style.display = "none"
   document.getElementById("card2").style.display = "block"
   document.getElementById("card1").style.display = "none"
}
const inputFieldValue = (id) => {
   return document.getElementById(id).value
}
let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//
function showNotification(msg, type) {
   bgColor = ""
   switch (type) {
      case "success":
         bgColor = "green"
         break
      case "error":
         bgColor = "red"
         break
      default:
         bgColor = "black"
   }
   Toastify({
      text: msg,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
         background: bgColor,
      },
      onClick: function () { } // Callback after click
   }).showToast();

}
function uniqueid() {
   let id = Math.random().toString(36).slice(2)
   return id
}
function signIn() {
   document.getElementById("signUp").style.display = "none"
   document.getElementById("signIn").style.display = "block"
   document.getElementById("card1").style.display = "none"
   document.getElementById("card2").style.display = "block"
}
let users = []
function handleSignUp() {
   event.preventDefault()
   let email = inputFieldValue("email")
   let password = inputFieldValue("password")
   if (!emailFormat.test(email)) {
      showNotification("Please Type Your Email Properly", "error")
      return
   }
   if (password.length < 5) {
      showNotification("Please Type Your Email Properly", "error")
      return
   }
   email = email.trim()
   password = password.trim()
   let user = {
      email,
      password,
      uid: uniqueid(),
      status: "active",
      createdAt : new Date()
   }
   const finduser = users.find(element => element.email === user.email || element.password === user.password)
   if (finduser) {
      showNotification("User already exist", "error")
      return
   }
   users.push(user)
   showNotification("You are successfully register", "success")
   console.log(user)
   console.log(users)
}
function handleSignIn() {
   event.preventDefault()
   let email = inputFieldValue("email2")
   let password = inputFieldValue("password2")
   if (!emailFormat.test(email)) {
      showNotification("Please Type Your Email Properly", "error")
      return
   }
   if (password.length < 6) {
      showNotification("Please Type Your Email Properly", "error")
      return
   }
   email = email.trim()
   password = password.trim()
   let user = {
      email,
      password,
      uid: uniqueid(),
      status: "active",
      createdAt : new Date()
   }
   const finduser = users.find(user => user.email === email)
   if (finduser) {
      const findpassword = users.find(user => user.password === password)
      if(findpassword){
         showNotification("Congrat you are login","success")
         console.log(user)
         document.getElementById("type-email").innerHTML = email
         document.getElementById("todo-page").style.display = "block"
         document.getElementById("card2").style.display = "none"
         document.getElementById("signIn").style.display = "none"
         return
      }else{
         showNotification("password enter are wrong","error")
         return
      }
   }
   showNotification("invalid email and password", "error")
}
 document.getElementById("correct").onclick =function(){
   document.getElementById("card1").style.display = "none"
   // document.getElementById("type-email").style.display = "none"
   document.getElementById("first").style.display = "none"
   document.getElementById("second").style.display = "block"
}

// Todo code
 let todos = []
function createTodo(){
    
       let title = inputFieldValue("input-text")
       let discription= inputFieldValue("input-disc")
      let date = inputFieldValue("input-date")
     const todo = {
      title,
      discription,
      date,
      id : uniqueid(),
      status : "inCompleted",
      createdAt : new Date()
     }   
    
    todos.push(todo)
    showNotification("A new todo has been successfully added","success")
    console.log(todos)
}
function readTodo(){
   console.log(todos)
   let checkId = users.find(user=>user.id=== id)
   console.log(checkId)
}
function updateTodo(){
   let title2 = prompt("Type your Title")
    const newtodo = "isCompleted"
    const updateTodo = todos.map((todo, i) => {
        if (todo.title === title2) {
            return { ...todo, status: newtodo }
        } else {
            return todo
        }
    })
    todos = updateTodo
    showNotification("A todo has been successfully updated", "success")
    console.log(todos)
}
function deleteTodo(){
   let title3 = prompt("type title to delete a todo")
    const filteredTodos = todos.filter(todo => todo.title !== title3)
    console.log('filteredTodos', filteredTodos)
    todos = filteredTodos
    showNotification("A todo has been successfully deleted", "success")
}
function showTable(){
    let tableStart = '<div class = "table-responsive"><table class = "table">'
    let tableEnd = '</table></div>'
    let tableHead = '<thead><tr><th scope = "col">#</th><th scope = "col">Title</th><th scope = "col">Discription</th><th scope = "col">Date</th><th scope = "col">Status</th><th scope = "col">Id</th></tr></thead>'
    let tableBody = ''
    for (i = 0; i < todos.length; i++) {
        tableBody += '<tr><th scope = "row">' + (i + 1) + '</th><td>' + todos[i].title + '</td><td>' + todos[i].discription + '</td><td>' + todos[i].date + '</td><td>' + todos[i].status + '</td><td>' + todos[i].id + '</td></tr>'
    }
    let table = tableStart + tableHead + '<tableBody>' + tableBody + '</tableBody>' + tableEnd
    document.getElementById("output").innerHTML = "<span style = 'width: 100%'>" + table + '</span>'
}




