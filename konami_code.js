const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0

function init() {
  // Write your JavaScript code inside the init() function
<<<<<<< HEAD
 document.body.addEventListener('keydown', function (key){
   console.log(key.detail)
   if (parseInt(key.detail)===code[index]){
     index++
     if (index===code.length) {
       alert("Congratulation!")
     }
   }else {index=0}
 })
=======
 document.body.addEventListener('keydown', handleKeyDown(keys))
}

function handleKeyDown(keys){
    var equalToCode=true
  if (keys.length===code.length) {
      for (var i=0; i<code.length; i++){
        if (keys[i]!=code[i]){ equalToCode=false}
       }
  } else {equalToCode=false}
  if (equalToCode) {
    console.log(key.which)
    return("It equals")
  }else{
    return("It's not equal")
  }
>>>>>>> 76bbbcfe279295c3c9003e336bc5d6f8f78739c8
}
