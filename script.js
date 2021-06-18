var taka=document.getElementById("tk");
var usdolar=document.getElementById("dolar");
var indianrupi=document.getElementById("indianRs");
var lankanrupi=document.getElementById("lankaRs");
var soudiriyal = document.getElementById("riyal")
var britishpound = document.getElementById("pound")
var canadiandollar = document.getElementById("cad")


taka.addEventListener("input",bdTktoOthers);

function bdTktoOthers(){
    var bdtk = parseFloat(taka.value);
    var usd=bdtk*0.012;
    var ir = bdtk*0.86;
    var lr = bdtk*2.33;
    var  sr = bdtk*0.04427;
    var bp= bdtk*0.00836;
    var cad = bdtk*0.014704308;
    
    usdolar.value = usd;
    indianrupi.value=ir;
    lankanrupi.value=lr;
    soudiriyal.value=sr;
    britishpound.value=bp;
    canadiandollar.value = cad;
}



usdolar.addEventListener("input",usdTktoOthers);
function usdTktoOthers(){
    const usd = parseFloat(usdolar.value);
    const bdtk=usd*84.73;
    const ir = usd*73.23;
    const lr = usd*197.87;
    var  sr = usd*3.75030;
    var bp= usd*0.70822;
    var cad = bdtk*1.2471477;
    
    taka.value = bdtk;
    indianrupi.value=ir;
    lankanrupi.value=lr;
    soudiriyal.value=sr;
    britishpound.value=bp;
    britishpound.value=bp;
    canadiandollar.value = cad;
}

indianrupi.addEventListener("input",inrTOothers);
function  inrTOothers(){
    const ir= parseFloat(indianrupi.value);
    const bdtk = ir*1.15;
    const usd = ir*0.013;
    const lr=ir*2.70;
    var  sr = ir*0.05121;
    var bp= ir*0.00967;
    var cad = bdtk*0.016826194;

    taka.value = bdtk;
    usdolar.value = usd;
    lankanrupi.value=lr;
    soudiriyal.value=sr;
    britishpound.value=bp;
    canadiandollar.value = cad;

}

lankanrupi.addEventListener("input",lankaRtoother);
function lankaRtoother(){

    const lr = parseFloat(lankanrupi.value);
    const bdtk = lr*0.428;
    const usd  = lr*0.0051;
    const ir  = lr*0.37;
    var  sr = lr*0.019;
    var bp= lr*0.00358;
    var cad = bdtk*0.0062721249;

    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;
    soudiriyal.value=sr;
    britishpound.value=bp;
    canadiandollar.value = cad;

}


soudiriyal.addEventListener("input",soudiRiyaltoothers);
function soudiRiyaltoothers(){

    var sr = parseFloat(soudiriyal.value)

    var bdtk = sr* 22.58620;
    var usd=sr*0.26665;
    var ir = sr*19.52440;
    var lr = sr*52.79580;
    var bp= sr*0.18887564;
    var cad = bdtk*0.33256349;

    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;
    lankanrupi.value=lr;
    britishpound.value=bp;
    canadiandollar.value = cad;
}


britishpound.addEventListener("input",poundToOther);
function poundToOther(){

    var bp = parseFloat(britishpound.value)

    var bdtk = bp* 119.65813;
    var usd=bp*1.4115328;
    var ir = bp*103.36997;
    var lr = bp*52.79580;
    var sr= bp*279.83419;
    var cad = bdtk*1.7216946;

    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;
    lankanrupi.value=lr;
    soudiriyal.value=sr;
    canadiandollar.value = cad;
}


canadiandollar.addEventListener("input",cadToothers);
function cadToothers(){

    var cad = parseFloat(canadiandollar.value)

    var bdtk = cad* 68.005804;
    var usd=cad*0.8018253;
    var ir = cad*59.430076;
    var lr = cad*159.38724;
    var sr= cad*3.0068536;
    var bp = cad*0.58084185;

    canadiandollar.value = cad;
    usdolar.value = usd;
    indianrupi.value=ir;
    lankanrupi.value=lr;
    soudiriyal.value=sr;
    britishpound.value = bp;
    taka.value=bdtk;
}






function main(){
    bdTktoOthers();
    usdTktoOthers();
    inrTOothers();
    lankaRtoother();
    soudiRiyaltoothers(); 
    poundToOther();
    cadToothers()
}
main();