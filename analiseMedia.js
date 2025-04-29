// Sistema de Cadastro, Cálculo de Média e Verificação de Aprovação de Aluno

// Crie um sistema em JavaScript para gerenciar as notas de um aluno, calcular a sua média e determinar se ele foi aprovado ou não. 
// Este sistema deverá ser composto pelas seguintes funções:

// cadastrarNota(aluno, nota)
// calcularMedia(aluno)
// verificarAprovacao(media)
// exibirResultado(aluno, media, aprovado)


var aluno = prompt("Digite nome do aluno: ")
var notas = []

function calcularMedia() {
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / notas.length;
    verificarAprovacao(media);
};

function cadastrarNota(){
    resposta = 'Sim'
    while (resposta.toLowerCase() === 'sim') {
        var nota = (Number(prompt(`Adicione a ${notas.length + 1}° nota: `)));
        
        if (!isNaN(nota)) {
            notas.push(nota)
        }
        else {
            alert('Digite um número válido')
        };
        resposta = prompt('Você quer adicionar outra nota?\nSe quer adicionar outra nota digite "Sim"\nSe quer ver a média das notas digite "Não"')
    };
    calcularMedia();
};

function verificarAprovacao(media) {
    if (media >= 7) {
        exibirResultado(media);
    }
    else {
        console.log('O aluno está reprovado')
    }
};

function exibirResultado(media) {
    console.log('O aluno ' + aluno + ' está aprovado.');
    console.log('Aluno: ' + aluno + '\nMédia: ' + media + '\nResultado: Aprovado');
};

cadastrarNota();