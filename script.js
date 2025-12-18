function volume_sphere() {
    //Write your code here
   function volume_sphere(e) {
    //Write your code here
    e.preventDefault();
  let r=document.getElementById('radius').value;
  
  let v=document.querySelector("input[name='volume']");
  if(!(r.charCodeAt(0)>=48 && r.charCodeAt(0)<=57))
  v.value='NaN';
  else
  v.value= ((4/3)*(Math.PI)*r*r*r).toFixed(4);
    
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
