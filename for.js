/*let n = 17;
for (let i=0; i <= 10; i++) {
    document.write(`${n} x ${i} = ${n * 1} <br>`);
}

let estudiantes = ["Jefferson", "Turpo" ,"Martin", "maximo"];
let texto = 'JavaScript';

for (let dato in estudiantes){
    document.write(`${dato}` );
}
for (let dato of estudiantes){
    document.write(`${dato}` )
}*/
let estudiantes = ["Jefferson", "Turpo" ,"Martin", "maximo"];
let texto = `JavaScript`;
for(let dato of estudiantes) {
    document.write(`<br>`Hola ${dato}, bienvenido al curso ${texto})
}
