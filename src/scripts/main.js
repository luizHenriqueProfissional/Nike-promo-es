//Criando uma data futura//
const dataDoEvento = new Date("jul 12, 2024 19:00:00:00");

//recuperar  o timeStamp do futuro//
const timeStampDoEvento = dataDoEvento.getTime();

//executar o intervalo dos segundos//
const contaAsHoras = setInterval(function(){
    //Buscando a data atual//
    const agora = new Date();
    //buscando o timeStamp de "agora"//
    const timeStampAtual = agora.getTime();

    //buscando a distancia do timestampdoevento até o timestampatual//
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    //buscando os dias até o evento//
    //minutos 1000*60//
    //hora 1000*60*60//
    //dia 1000*60*60*24//
    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24))
    const horasAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutossAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000*60)) / (1000))

    console.log(diasAteOEvento.value);
    console.log(horasAteOEvento.value);
    console.log(minutossAteOEvento.value);
    console.log(segundosAteOEvento.value);


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutossAteOEvento}m ${segundosAteOEvento}s`

   if(distanciaAteOEvento < 0){
    clearInterval(contaAsHoras)
    document.getElementById('contador').innerHTML = 'Promoção expirada'
   }
},1000)


