let adds = document.getElementsByClassName('add')

for(let btn of adds){
    btn.addEventListener("click", function(){
        btn.previousElementSibling.value++
        btn.nextElementSibling.nextElementSibling.value = btn.previousElementSibling.value * btn.previousElementSibling.previousElementSibling.innerHTML
        totalglobal()
    })
}



let subs = document.getElementsByClassName('sub')

for(let btns of subs){
    btns.addEventListener("click", function(){
        if(btns.previousElementSibling.previousElementSibling.value>0){
            btns.previousElementSibling.previousElementSibling.value--
            btns.nextElementSibling.value = btns.previousElementSibling.previousElementSibling.value * btns.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        }
        totalglobal()
    })
}



// let prices = document.getElementsByClassName('price')
// let quantités = document.getElementsByClassName('quantité')
// let sum = prices[i] * quantités [i]
// for(i=0 ; i<price.length;i++)
// for(i=0 ; i<length.quantités;i++)


let trashs = document.getElementsByClassName('trash')
let products = document.getElementsByClassName('product')
for (let el of trashs)
el.addEventListener('click' ,function (){
    el.parentNode.remove()
})

function totalglobal (){
    let arr=document.getElementsByClassName('total')
    let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum + Number(arr[i].value)
}
return document.querySelector('.somme').value = sum


}

// var tab =[]
// var co=document.getElementsByClassName("cv")
// for (let i=0;i<co.length;i++){
//     tab.push=(true)
  
//     co[i].addEventListener('click' ,function (){
//         if(tab[i]){
//             // co[i].style.filter="none"  
//             co[i].style.opacity=1  
//             tab[i]=false
//         }
//         else{
//             // co[i].style.filter=" grayscale(100%)"  
//             co[i].style.opacity=0.3
//             tab[i]=true 
//         }

//     })
// }


// function add_img() { 
// 	let img = document.createElement('img'); 
//     img.src = "heart1.png"; 
// 	document.getElementsByClassName('product').appendChild(img);
// }
//   
  
    // let hearts=document.getElementsByClassName('heart')
    // let favoris=document.getElementsByClassName('cv')
    //     for (let elx of hearts)
    //     for(let el of favoris)
    // //     // el.addEventListener("click", function(){
    // //     //       el.previousElementSibling.remove()
    // //     //      } 
    //     el.addEventListener("click",function(){
    //         if (el.style.display.none) {
    //             (el.style.display.block)
    //         }
    //  else {
    // //             (elx.style.display.none)
    // //         }
    

    // //     })

    let favourite=document.getElementsByClassName("fa-heart")
    for (let el of favourite){
        el.addEventListener("click",function(){
            if (el.style.color==='red') {
                el.style.color='black'
        }
         else {
            el.style.color='red'
        }
    }
// please do not take in consideration all comments


        )}