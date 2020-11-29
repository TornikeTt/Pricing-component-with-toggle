var s = false;
var Monthly = true;
var Annually = false;

function Clik(){
    this.BasicPrice = document.getElementById("Basic-Price");
    this.ProfessionalPrice = document.getElementById("Professional-Price");
    this.MasterPrice = document.getElementById('Master-Price');

    this.changeCircle = document.getElementById("changeCircle")

    if(s === Annually){
        this.BasicPrice.textContent =  "$199.99";
        this.ProfessionalPrice.textContent = "$249.99";
        this.MasterPrice.textContent = "$399.99";
        this.changeCircle.style.marginRight = "33px";
        this.changeCircle.style.transition = "margin 0.3s";

        s = true;
    }else if(s === Monthly){
        this.BasicPrice.textContent =  "$19.99";
        this.ProfessionalPrice.textContent = "$24.99";
        this.MasterPrice.textContent = "$39.99";
        this.changeCircle.style.marginRight = "2px";
        s = false;
    }
}


function change(){
    const changes = new Clik();
}