 const inputBox =   document.getElementById('inputText')



  
document.getElementById('f-1').addEventListener('click', function(){
     
    if(inputBox.value == ''){
        alert('please type any word')
     } 
    else{
        inputBox.style.fontWeight = 'bold'
    }
})


document.getElementById('f-2').addEventListener('click', function(){
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.fontStyle = 'italic'
    }
})

document.getElementById('f-3').addEventListener('click', function(){
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.textDecoration = 'underline'
     }
})

document.getElementById('a-1').addEventListener('click', function(){
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.textAlign = 'left'
     }
})

document.getElementById('a-2').addEventListener('click', function(){
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.textAlign = 'center'
     }
})

document.getElementById('a-3').addEventListener('click', function(){
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.textAlign = 'right'
     }
})

document.getElementById('a-4').addEventListener('click', function(){
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.textAlign = 'justify'
        
     }
})


 
document.getElementById('font-size').addEventListener('click', function(){
    const valueText =  document.getElementById("font-size").value
    if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.fontSize =  valueText + 'px' 
        
     }
     
})

document.getElementById('colorinput').addEventListener('click', function(){
     const color = document.getElementById('colorinput').value;
     if(inputBox.value == ''){
        alert('please type any word')
     }  else{
        inputBox.style.color =   color
        
     }
})