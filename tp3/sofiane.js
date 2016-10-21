$(document).ready(function(){
 
 ("#submitForm").on('click',function(){
  if(§("#inputEmail3").val()==""){
   §('.modal-body').html('veuillez remplir les champs svp');
  }
  else{
   §('.modal-body').html('fff');
   §('.modal').modal('show'); 
  }
 })
});
 
 


