var a ="";
var numeros = [1,2,3,4,5,6,7,8,9,0];
var e = "";

function escribirNumero(valor){
  a = document.getElementById("calculo").value +=valor;
}

function resultado(escribirNumero){
  var operacion;
  switch (operacion){
		case 1:
    var c = a.split("+");
      c += parseInt(c);
      console.log(c);
			c += c;
		break;

    case 2:
      var d = a.split("-");
      d += parseInt(d);
      console.log(d);
    break;

    case 3:
      var e = a.split("/");
      e += parseInt(e);
      console.log(e);
    break;

    case 4:
      var f = a.split("*");
      f += parseInt(f);
      console.log(f);
    break;
}
}
