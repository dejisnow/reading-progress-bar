winwindow.onload=()=>{
    
    let main = document.querySelector(".main")
    let progress = document.querySelector(".progress")
    
   function  progressDisplay(){
       
        
        let mainTop= -( main.getBoundingClientRect().top)
 
 let documentHeight = document.documentElement.clientHeight
 let mainHeight = main.getBoundingClientRect().height
 let percentage = (mainTop/(mainHeight - documentHeight) )* 100
 
// console.log(percentage  )
 progress.style.width = percentage + "%"
 
 if(percentage ==0 ){
     progress.style.width = "0%"
 }
        
    }
 
 window.addEventListener("scroll",progressDisplay )
 
    
    
/*    console.log(sect.getBoundingClientRect().height,document.documentElement.clientWidth)
*/
    
    
}￼Enter
