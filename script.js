const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Efeito estufa e seus impactos ambientais",
//Qual seu nível de conhecimento sobre o efeito estufa e seus impactos?

alternativas: [
{
texto: "Baixo",

//"Um pouco, apenas o que vejo na mídia"
quiz

afirmacao: "Você está começando a aprender sobre os

impactos do efeito estufa."
  //Nível baixo

},
{
texto: "Médio",

//"Sim, sei um pouco e já pesquisei sobre o assunto"

afirmacao: "Você tem um conhecimento razoável sobre os

impactos do efeito estufa. "
//Nível médio 
},
{
texto: "Alto",

//"Sim, estudo muito sobre o assunto"

afirmacao: "Você tem um conhecimento aprofundado sobre os

impactos das mudanças climáticas. "

//Nível alto

}
]
},
{
enunciado: "1 -O efeito estufa é um fenômeno natural que é intensificado pela ação humana. Qual gás, lançado por meio das atividades antrópicas, está diretamente relacionado ao efeito estufa?
",
alternativas: [
{
texto: "a) Argônio",


afirmacao: "As emissões de gases de efeito estufa são uma

das principais causas das mudanças climáticas. "
//*aqui eu coloco o que a pessoa está afirmando com esta resposta, isto
dará o resultado do meu quiz; -->

},
{
texto: "b) Desmatamento",

//*aqui eu coloco a segunda resposta para a pergunta; -->

afirmacao: "O desmatamento contribui significativamente

para as mudanças climáticas. "
//*aqui eu coloco o que a pessoa está afirmando com esta resposta, isto
dará o resultado do meu quiz

},
{
texto: "c) Uso de combustíveis fósseis",
//*aqui eu coloco a terceira resposta para a pergunta

afirmacao: "O uso de combustíveis fósseis é uma das

principais fontes de emissões de gases de efeito estufa. "
//*aqui eu coloco o que a pessoa está afirmando com esta resposta, isto
dará o resultado do meu quiz

},
{
texto: "d) Todas as opções acima",
//*aqui eu coloco a quarta resposta para a pergunta; -->

afirmacao: "Todas as opções mencionadas são causas

principais das mudanças climáticas. "
//*aqui eu coloco o que a pessoa está afirmando com esta resposta, isto
dará o resultado do meu quiz

}

]
},
{
enunciado: "2 - Quais são alguns dos efeitos imediatos das mudanças
climáticas em diferentes regiões do mundo?",
//*aqui eu coloco a minha segunda pergunta sobre o tema do quiz, e
continuo com o script conforme eu fiz para a primeira pergunta
alternativas: [
{
texto: "a) Aumento das temperaturas médias",
afirmacao: "O aumento das temperaturas médias é um efeito

imediato das mudanças climáticas. "

},
{
texto: "b) Aumento da frequência de eventos climáticos

extremos",

afirmacao: "A maior frequência de eventos climáticos

extremos é um impacto direto das mudanças climáticas. "

},
{
texto: "c) Acidificação dos oceanos",
afirmacao: "A acidificação dos oceanos é uma consequência

das mudanças climáticas. "

},
{
texto: "d) Todas as opções acima",
afirmacao: "Todos os efeitos mencionados são impactos

imediatos das mudanças climáticas. "

}
]
},
{
enunciado: "3 - Que medidas estão sendo tomadas globalmente para
mitigar as mudanças climáticas?",
alternativas: [
{
texto: "a) Investimento em energias renováveis",
afirmacao: "O investimento em energias renováveis é uma das

principais medidas para mitigar as mudanças climáticas. "

},
{
texto: "b) Implementação de políticas de conservação

ambiental",

afirmacao: "A implementação de políticas de conservação

ambiental é crucial para combater as mudanças climáticas. "

},
{
texto: "c) Acordos internacionais como o Acordo de Paris",
afirmacao: "Acordos internacionais como o Acordo de Paris

são essenciais para a ação climática global. "

},

{
texto: "d) Todas as opções acima",
afirmacao: "Todas as medidas mencionadas são importantes

para mitigar as mudanças climáticas. "

}
]
}
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Obrigado por completar o quiz!";
//*aqui eu coloco o uma mensagem para aparecer na última tela do quiz, esta
mensagem irá aparecer junto com o resultado final.
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
