const mapa = new Map([['chave0',000],['chave1',100],['chave2',200],['chave3',300]]);


const mapa2 =  new Map();
for(let i = 0 ; i<= 100 ; i++) {
    mapa2.set(`key${i}`,i);
}

mapa2.delete(`key${100}`);

for(const x of mapa) {
    console.log(x)
}