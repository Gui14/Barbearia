var agendamentos = [];
var cont = 0
function agendar() {
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;
    var now = new Date();
    var dataAgendamento = new Date(data);
    var d = document.querySelector('input#data').value;
    var [ano, mes, dia] = d.split('-').map(Number);
    var d = document.querySelector('#data').valueAsDate;
    var dia = d.getUTCDate();
    var mes = d.getUTCMonth() + 1;  
    var ano = d.getUTCFullYear();
    var diahoje = now.getDate()
    var horanow = now.getHours()
    var meshoje = now.getMonth()
    console.log(nome)
    if (dia < diahoje && mes<meshoje) {
      alert("O dia do agendamento não pode ser antes do dia atual");
      return;
    }
    if (horario <= horanow && dia <= diahoje && mes==meshoje) {
      alert("O horário do corte não pode ser antes do horário atual");
      return;
    }
    for (var i = 0; i < agendamentos.length; i++) {
      if (agendamentos[i].horario === horario && agendamentos[i].data === data) {
        alert("Este horário já foi escolhido, por favor escolha outro horário");
        return;
      }
    }
    var corte = document.getElementById("corte").value;
    var nome = document.getElementById("nome").value
    if(!nome){
      alert("Digite seu nome para completar o agendamento");
      return;
    }
    if(horario === "n"){
      alert("Escolha horário para completar o agendamento");
      return;
    }

    function red_rgb() {
      return 'rgba(' + 165 + ',' + 5+ ',' +5 + ')';
    }
  
    var agendamento = {
      data: data,
      corte: corte,
      horario: horario,
      nome: nome
    };
  
    agendamentos.push(agendamento);
  
    //mostrarAgendamentos();
    guardardia()
  }

function mostrarAgendamentos() {
    var agendamentosDiv = document.getElementById("agendamentos");
    agendamentosDiv.innerHTML = "";
  
    for (var i = 0; i < agendamentos.length; i++) {
      var agendamento = agendamentos[i];
      agendamentosDiv.innerHTML += "<p>Data: " + agendamento.data + "</p>" + "<p>Nome: " + agendamento.nome + "</p>" +
      "<p>Corte: " + agendamento.corte + "</p>" +
      "<p>Horario: " + agendamento.horario + "</p>"
    }

    
  }

function atualizar(){
  var now = new Date();
  var meshoje1 = now.getMonth()
  var diahoje = now.getDate()
  var data2 = document.querySelector('input#data').value;
  var [ano, diames2, diadata2] = data2.split('-').map(Number);
  var data2 =document.getElementById ("data2").valueAsDate
  var diadata2 = data2.getUTCDate();
  var diames2 = data2.getUTCMonth()
  function red_rgb() {
    return 'rgba(' + 165 + ',' + 5+ ',' +5 + ')';
  }

  if(diadata2 < diahoje && meshoje1 == diames2){
    var n1 = document.getElementById("80").style.color = red_rgb()
    var n2 = document.getElementById("90").style.color = red_rgb()
    var n3 = document.getElementById("100").style.color = red_rgb()
    var n4 = document.getElementById("110").style.color = red_rgb()
    var n5 = document.getElementById("140").style.color = red_rgb()
    var n6 = document.getElementById("150").style.color = red_rgb()
    var n7 = document.getElementById("160").style.color = red_rgb()
    var n8 = document.getElementById("170").style.color = red_rgb()
    var n9 = document.getElementById("180").style.color = red_rgb()
    var n10 = document.getElementById("190").style.color = red_rgb()

    
    

  }
  mudardia()
  
}

  var dia1 = []
  var dia2 = []
  var dia3 = []
  var dia4 = []
  var dia5 = []
  var dia6 = []
  var dia7 = []
  var dia8 = []
  var dia9 = []
  var dia10 = []
  var dia11= []
  var dia12 = []
  var dia13 = []
  var dia14 = []
  var dia15 = []
  var dia16 = []
  var dia17 = []
  var dia18 = []
  var dia19 = []
  var dia20 = []
  var dia21 = []
  var dia22 = []
  var dia23 = []
  var dia24 = []
  var dia25 = []
  var dia26 = []
  var dia27 = []
  var dia28 = []
  var dia29 = []
  var dia30 = []
  var dia31 = []
  
    
function guardardia(){
  var horario = document.getElementById("horario").value;
  var numhorario = Number(horario)
  var d = document.querySelector('input#data').value;
  var [ano, mes, dia] = d.split('-').map(Number);
  var d = document.querySelector('#data').valueAsDate;
  var dia = d.getUTCDate();
  
  
  if(dia == 1){
    dia1.push(numhorario)
  }
  if(dia == 2){
    dia2.push(numhorario)
  }
  if(dia == 3){
    dia3.push(numhorario)
  }
  if(dia == 4){
    dia4.push(numhorario)
  }
  if(dia == 5){
    dia5.push(numhorario)
  }
  if(dia == 6){
    dia6.push(numhorario)
  }
  if(dia == 7){
    dia7.push(numhorario)
  }
  if(dia == 8){
    dia8.push(numhorario)
  }
  if(dia == 9){
    dia9.push(numhorario)
  }
  if(dia == 10){
    dia10.push(numhorario)
  }
  if(dia == 11){
    dia11.push(numhorario)
  }
  if(dia == 12){
    dia12.push(numhorario)
  }
  if(dia == 13){
    dia13.push(numhorario)
  }
  if(dia == 14){

    dia14.push(numhorario)
  }
  if(dia == 15){
    dia15.push(numhorario)
  }
  if(dia == 16){
    dia16.push(numhorario)
  }
  if(dia == 17){
    dia17.push(numhorario)
  }
  if(dia == 18){
    dia18.push(numhorario)
  }
  if(dia == 19){
    dia19.push(numhorario)
  }
  if(dia == 20){
    dia20.push(numhorario)
  }
  if(dia == 21){
    dia21.push(numhorario)
  }
  if(dia == 22){
    dia22.push(numhorario)
  }
  if(dia == 23){
    dia23.push(numhorario)
  }
  if(dia == 24){
    dia24.push(numhorario)
  }
  if(dia == 25){
    dia25.push(numhorario)
  }
  if(dia == 26){
    dia26.push(numhorario)
  }
  if(dia == 27){
    dia27.push(numhorario)
  }
  if(dia == 28){
    dia28.push(numhorario)
  }
  if(dia == 29){
    dia29.push(numhorario)
  }
  if(dia == 30){
    dia30.push(numhorario)
  }
  if(dia == 31){
    dia31.push(numhorario)
  }
  
 
 
  
}
function mudardia(){ 
  var now = new Date();
  var meshoje1 = now.getMonth()
  var diahoje = now.getDate()
  var data2 = document.querySelector('input#data2').value;
  var [ano, diames2, diadata2] = data2.split('-').map(Number);
  var data2 =document.getElementById ("data2").valueAsDate
  var diadata2 = data2.getUTCDate();
  var diames2 = data2.getUTCMonth()
  function red_rgb() {
    return 'rgba(' + 165 + ',' + 5+ ',' +5 + ')';
  }
  function green_rgb(){
    return 'rgba('+ 0 + ',' + 128 + ',' + 0 + ')';
  }  
  if(diadata2 < diahoje && diames2 == meshoje1){
    atualizar()
  }else{
    
    var cor1 = document.getElementById("80")
    var cor2 = document.getElementById("90")
    var cor3 = document.getElementById("100")
      var cor4 = document.getElementById("110")
      var cor5 = document.getElementById("140")
      var cor6 = document.getElementById("150")
      var cor7 = document.getElementById("160")
      var cor8 = document.getElementById("170")
      var cor9 = document.getElementById("180")
      var cor10 = document.getElementById("190")

    
    
    if(diadata2 == 1){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia1.length ;x++){
        if(dia1[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia1[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia1[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia1[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia1[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia1[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia1[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia1[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia1[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia1[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }

      
      
    
      
    }
    if(diadata2 == 2){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia2.length ;x++){
        if(dia2[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia2[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia2[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia2[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia2[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia2[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia2[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia2[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia2[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia2[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
    }
      
    if(diadata2 == 3){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia3.length ;x++){
        if(dia3[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia3[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia3[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia3[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia3[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia3[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia3[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia3[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia3[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia3[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 4){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia4.length ;x++){
        if(dia4[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia4[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia4[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia4[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia4[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia4[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia4[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia4[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia4[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia4[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 5){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia5.length ;x++){
        if(dia5[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia5[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia5[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia5[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia5[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia5[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia5[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia5[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia5[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia5[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 6){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia6.length ;x++){
        if(dia6[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia6[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia6[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia6[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia6[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia6[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia6[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia6[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia6[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia6[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 7){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia7.length ;x++){
        if(dia7[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia7[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia7[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia7[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia7[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia7[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia7[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia7[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia7[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia7[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 8){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia8.length ;x++){
        if(dia8[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia8[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia8[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia8[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia8[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia8[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia8[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia8[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia8[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia8[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 9){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia9.length ;x++){
        if(dia9[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia9[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia9[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia9[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia9[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia9[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia9[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia9[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia9[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia9[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 10){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia10.length ;x++){
        if(dia10[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia10[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia10[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia10[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia10[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia10[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia10[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia10[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia10[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia10[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 11){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia11.length ;x++){
        if(dia11[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia11[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia11[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia11[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia11[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia11[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia11[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia11[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia11[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia11[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 12){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia12.length ;x++){
        if(dia12[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia12[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia12[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia12[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia12[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia12[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia12[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia12[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia12[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia12[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 13){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia13.length ;x++){
        if(dia13[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia13[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia13[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia13[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia13[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia13[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia13[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia13[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia13[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia13[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 14){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia14.length ;x++){
        if(dia14[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia14[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia14[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia14[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia14[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia14[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia14[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia14[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia14[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia14[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 15){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia15.length ;x++){
        if(dia15[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia15[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia15[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia15[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia15[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia15[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia15[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia15[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia15[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia15[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 16){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia16.length ;x++){
        if(dia16[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia16[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia16[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia16[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia16[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia16[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia16[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia16[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia16[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia16[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 17){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia17.length ;x++){
        if(dia17[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia17[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia17[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia17[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia17[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia17[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia17[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia17[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia17[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia17[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 18){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia18.length ;x++){
        if(dia18[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia18[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia18[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia18[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia18[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia18[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia18[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia18[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia18[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia18[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 19){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()

      for (var x = 0; x <= dia19.length ;x++){
        if(dia19[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia19[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia19[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia19[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia19[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia19[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia19[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia19[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia19[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia19[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 20){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia20.length ;x++){
        if(dia20[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia20[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia20[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia20[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia20[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia20[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia20[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia20[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia20[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia20[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 21){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia21.length ;x++){
        if(dia21[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia21[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia21[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia21[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia21[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia21[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia21[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia21[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia21[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia21[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 22){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia22.length ;x++){
        if(dia22[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia22[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia22[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia22[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia22[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia22[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia22[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia22[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia22[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia22[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 23){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia23.length ;x++){
        if(dia23[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia23[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia23[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia23[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia23[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia23[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia23[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia23[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia23[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia23[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 24){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia24.length ;x++){
        if(dia24[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia24[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia24[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia24[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia24[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia24[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia24[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia24[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia24[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia24[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 25){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia25.length ;x++){
        if(dia25[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia25[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia25[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia25[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia25[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia25[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia25[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia25[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia25[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia25[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 26){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia26.length ;x++){
        if(dia26[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia26[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia26[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia26[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia26[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia26[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia26[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia26[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia26[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia26[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 27){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia27.length ;x++){
        if(dia27[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia27[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia27[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        
        if(dia27[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia27[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia27[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia27[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia27[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia27[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia27[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 28){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia28.length ;x++){
        if(dia28[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia28[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia28[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia28[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia28[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia28[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia28[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia28[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia28[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia28[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 29){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia29.length ;x++){
        if(dia29[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia29[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia29[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia29[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia29[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia29[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia29[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia29[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia29[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia29[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 30){
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia30.length ;x++){
        if(dia30[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia30[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia30[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia30[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia30[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia30[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia30[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia30[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia30[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia30[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
    if(diadata2 == 31){
      
      cor1.style.color = green_rgb()
      cor2.style.color = green_rgb()
      cor3.style.color = green_rgb()
      cor4.style.color = green_rgb()
      cor5.style.color = green_rgb()
      cor6.style.color = green_rgb()
      cor7.style.color = green_rgb()
      cor8.style.color = green_rgb()
      cor9.style.color = green_rgb()
      cor10.style.color = green_rgb()
      for (var x = 0; x <= dia31.length ;x++){
        if(dia31[x] == 8){
          var cor = document.getElementById("80").style.color = red_rgb()
        }
        if(dia31[x] == 9){
          var cor = document.getElementById("90").style.color = red_rgb()
        }
        if(dia31[x] == 10){
          var cor = document.getElementById("100").style.color = red_rgb()
        }
        if(dia31[x] == 11){
          var cor = document.getElementById("110").style.color = red_rgb()
        }
        if(dia31[x] == 14){
          var cor = document.getElementById("140").style.color = red_rgb()
        }
        if(dia31[x] == 15){
          var cor = document.getElementById("150").style.color = red_rgb()
        }
        if(dia31[x] == 16){
          var cor = document.getElementById("160").style.color = red_rgb()
        }
        if(dia31[x] == 17){
          var cor = document.getElementById("170").style.color = red_rgb()
        }
        if(dia31[x] == 18){
          var cor = document.getElementById("180").style.color = red_rgb()
        }
        if(dia31[x] == 19){
          var cor = document.getElementById("190").style.color = red_rgb()
        }

      }
      
    }
  }

}