const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.splice(1, 1));    // retirou o elemento 1
console.log(languages);
console.log(languages.splice(1, 0, "C++", "C#")); // adicionou a partir da posição 1 o C++ e C#
console.log(languages);
console.log(languages.splice(1, 2, "C")); // retira a partir do elemento 1 duas posições e insere o 'C'
console.log(languages);
