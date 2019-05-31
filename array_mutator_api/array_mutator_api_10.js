const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return a.name.localeCompare(b.name);    // padrão é ordem ascendente. 
                                            // Se multiplicar por -1, ordem descendente
});
console.log(languages);

// o localeCompare leva em consideração os caracteres acentuados, por exemplo
// e faz a classificação correta retornando -1, 0 ou 1
