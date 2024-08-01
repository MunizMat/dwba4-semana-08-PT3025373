const calcularNotaTotal = (aluno) => {
    return aluno.primeiraNota * 0.6 + aluno.segundaNota * 0.4;
}

const alunos = [
    {
        nome: 'João da Silva',
        primeiraNota: 7,
        segundaNota: 8.5
    },
    {
        nome: 'Matheus Muniz',
        primeiraNota: 8,
        segundaNota: 6.4,
    },
    {
        nome: 'André',
        primeiraNota: 5,
        segundaNota: 9.2
    },
]

for (const aluno of alunos) {
    alert(`Nome do aluno ${aluno.nome}\nNota 1: ${aluno.primeiraNota}\nNota 2: ${aluno.segundaNota}`);
    alert(`Nome do aluno ${aluno.nome}\nNotal final: ${calcularNotaTotal(aluno)}`);
}