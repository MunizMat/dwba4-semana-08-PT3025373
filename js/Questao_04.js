/**
 * 1. Crie um arquivo Questao_04.js
1.1. Crie uma Classe Aluno
1.1.1. A classe deverá possuir as propriedades:
1.1.1.1. primeiroNome, segundoNome, primeiraNota, segundaNota
1.1.2. A classe deverá possuir os métodos
1.1.2.1. nomeCompleto: primeiroNome + segundoNome
1.1.2.2. media: (primeiraNota * 0,6) + (segundaNota * 0,4)
1.1.2.3. situacao: se media > 6 “Aprovado”, senão “Reprovado”
1.2. Crie um array que contenha 5 objetos Aluno
1.3. Crie uma função que percorra o array e mostre: Nome completo, Média e Situação do aluno.
1.4. Crie a página Questao_04.html para hospedar e executar o arquivo Questao_04.js
1.5. Mostre os dados de, no mínimo, 3 alunos.
 */
class Aluno {
    constructor({ primeiroNome, segundoNome, primeiraNota, segundaNota }){
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto(){
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media(){
        return this.primeiraNota * 0.6 + this.segundaNota * 0.4;
    }

    situacao(){
        return this.media() > 6 ? 'Aprovado' : 'Reprovado';
    }
}

const dadosAlunos = [
    {
        primeiroNome: 'João',
        segundoNome: 'da Silva',
        primeiraNota: 7,
        segundaNota: 8.5
    },
    {
        primeiroNome: 'Matheus',
        segundoNome: 'Muniz',
        primeiraNota: 8,
        segundaNota: 6.4,
    },
    {
        primeiroNome: 'André',
        segundoNome: 'da Rocha',
        primeiraNota: 5,
        segundaNota: 9.2
    },
    {
        primeiroNome: 'Christian',
        segundoNome: 'Silva',
        primeiraNota: 3,
        segundaNota: 4.2
    },
    {
        primeiroNome: 'Luis',
        segundoNome: 'Roberto',
        primeiraNota: 5,
        segundaNota: 6.2
    },
]

const alunos = dadosAlunos.map(dadosAlunos => new Aluno(dadosAlunos));

const exibirAlunos = (alunos) => {
    for (const aluno of alunos) {
        const dadosParaExibir = [
            `Nome completo: ${aluno.nomeCompleto()}`, 
            `Média: ${aluno.media()}`, 
            `Situação: ${aluno.situacao()}`
        ];

        alert(dadosParaExibir.join('\n'));
    }
}

exibirAlunos(alunos);