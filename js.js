const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"  

console.log(url)

async function visualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json
    console.log(dados);
}

visualizarInformacoesGlobais();





questoes: [
    {
        p1: "Qual profissão você pretende exercer?",
        r1: "biotécnologo" 
    },
    {
        p2: "O que você tem feito ou fará para alcançar sua profissão?",
        r2: "Ter criado uma rotina de estudo, para conseguir alcançar o ensino superior"
    },
    {
        p3: "Quais motivos levaram você a escolher essa profissão?",
        r3: "A área de pesquisas sempre me intrigou, durante o 2 ano pude descobrir o que faz um biotécnologo, dessa maneira me interressando pela profissão"
    },
    {
        p4: "Como você acha que vai estar sua profissão daqui a 10 anos?",
        r4: "Acredito que o mercado não sofrerá grande alteração"
    },
    {
        p5: "O que é o sucesso para você e quando acha que o alcançará?",
        r5: "O sucesso para mim será quando eu tiver uma carreia estabilizada e tendo um maior tempo de lazer, sem se preocupar com a renda"
    },
    {
        p6: "Você escolheria o mesmo itinerário formativo? Como isso contribuiria para sua vida profissional?",
        r6: "Sim, por meio dele descobri a profissão que queria exercer"
    },
    {
        p7: "Você acha que a pressão social influencia em suas escolhas acadêmicas?",
        r7: "Sim"
    },
    {
        p8: "Qual pessoa que mais influenciou em sua decisão profissional?",
        r8: "A professora Thatiana de biologia"
    },
]