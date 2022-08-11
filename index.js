var n = document.querySelector('.score')
var submit = document.querySelector('.submit')
var comment = document.querySelector('.comment')

submit.addEventListener('click', ()=> {
    var input = document.querySelector('.text')
    var match = document.querySelector('.match')
    var b = Math.random()
    b = b * 100;
 
    if (b > 50) {
     comment.innerHTML = ' Great match!'
    } else { comment.innerHTML = 'Not a really good match'
     
    }
    b = Math.floor(b) + 1;
    n.innerHTML = b;
 //    n.innerHTML = b;
 console.log(b)
 
    if (input === '' || input === null){
        match.style.display = 'none';   
        match.style.color = 'green';  
        console.log('none');
     }

     else{
        match.style.display = 'block';
        console.log('none');
     }
    

   
});