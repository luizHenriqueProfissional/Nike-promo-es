//Criando uma data futura//
const dataDoEvento = new Date("jul 12, 2024 19:00:00:00");
//recuperar  o timeStamp do futuro//
const timeStampDoEvento = dataDoEvento.getTime();
//executar o intervalo dos segundos//
const contaAsHoras = setInterval(function() {
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
    const diasAteOEvento = Math.floor(distanciaAteOEvento / 86400000);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % 86400000 / 3600000);
    const minutossAteOEvento = Math.floor(distanciaAteOEvento % 3600000 / 60000);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % 60000 / 1000);
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutossAteOEvento);
    console.log(segundosAteOEvento);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutossAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Promo\xe7\xe3o expirada";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
