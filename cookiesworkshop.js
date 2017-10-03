
//wait for doc to load

document.addEventListener("DOMContentLoaded", function() {

//update cookie count value
  if (Cookies.get("chocolate")) {
    document.getElementById.innerText = Cookies.get("chocolate");
  }

  if (Cookies.get("lemon")) {
    document.getElementById.innerText = Cookies.get("lemon");
  }

  if (Cookies.get("sugar")) {
    document.getElementById.innerText = Cookies.get("sugar");
  }

  //wait for click on chocolate counter
  document.getElementById("counterc").addEventListener("click", function(){
  console.log(Cookies.get("chocolate"));
  //get cookie value and add one upon above function
  let choc_count = ~~Cookies.get("chocolate") + 1;
  //change display of current cookie count
  Cookies.set("chocolate",choc_count);
  document.getElementById("choc_count").innerText = choc_count;
})

document.getElementById("counterl").addEventListener("click", function(){
  console.log(Cookies.get("lemon"));
  let lemon_count = ~~Cookies.get("lemon") + 1;
  Cookies.set("lemon",lemon_count);
  document.getElementById("lemon_count").innerText = lemon_count;

})

document.getElementById("counters").addEventListener("click", function(){
  console.log(Cookies.get("sugar"));
  let sugar_count = ~~Cookies.get("sugar") + 1;
  Cookies.set("sugar", sugar_count);
  document.getElementById("sugar_count").innerText = sugar_count;

});

document.getElementById("clearOrder").addEventListener("click",function(){
    Cookies.expire("chocolate");
    Cookies.expire("sugar");
    Cookies.expire("lemon");
    document.getElementById("choc_count").innerText = 0;
    document.getElementById("lemon_count").innerText = 0;
    document.getElementById("sugar_count").innerText = 0;

});

});



