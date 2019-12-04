//firebase
var firebaseConfig = {
    apiKey: "AIzaSyAgxuKdE1HftlFVj7n1jzZUg1nhylzCvPU",
    authDomain: "organic-store-1d43c.firebaseapp.com",
    databaseURL: "https://organic-store-1d43c.firebaseio.com",
    projectId: "organic-store-1d43c",
    storageBucket: "",
    messagingSenderId: "637939267281",
    appId: "1:637939267281:web:e0dabe2a5da0c63ae0f7f0",
    measurementId: "G-PH2TVG5FWH"
};
firebase.initializeApp(firebaseConfig);
//global

var d = new Date();
var t = d.getTime();
var counter=t;

//form

document.getElementById("form").addEventListener("submit",(e)=>{
    var order=document.getElementById("order").value;
    var total=document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
}); 

//create new order

function createOrder(order,total){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder={
        id:counter,
        order:order,
        total:total
    }

    var db=firebase.database().ref("order/" +counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();

}

function readOrder(){
 var order = firebase.database().ref("order/");
 order.on("child_added",function(data){
     var orderValue = data.val();
     document.getElementById("cardSection").innerHTML+=`
     <div class="card mb-3">
      <div class="card-body">
      <h5 class="card-title"> Order: ${orderValue.order}</h5>
      <p class="card-text"> Total: ${orderValue.total}</p>
      `
 });
};

function renderTable(){

};