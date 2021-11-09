// not perfect, but it works
// for details please visit: https://glenthemes.github.io/iconsax
document.addEventListener("DOMContentLoaded",() => { 
    init_iconsax();
});

function init_iconsax(){
    document.querySelectorAll(".iconsax").forEach(iconsax => {
    	var TuT = iconsax.getAttribute("icon-name").toLowerCase().trim();
    	
    	fetch("//glenthemes.github.io/iconsax/icons/" + TuT + ".svg")
    	.then(n_n => {
    	  return n_n.text();
    	})
    	.then(n_n => {
    	  iconsax.innerHTML = n_n;
    	  if(iconsax.querySelectorAll("[http-equiv='Content-Security-Policy']").length){
    	     iconsax.innerHTML = "";
          }
    	});
    });
}
