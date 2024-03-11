
const orijinalTatlar = [
    "Muz",
    "Vişne",
    "Ceviz",
    "Kestane",
    "Kiraz",
    "Çikolata",
    "Fındık Çikolata",
    "Fıstık Çikolata",
    "Badem Çikolata",
    "Franbuaz",
    "Yaban Mersini",
    "Tarçın",
    "Badem",
    "Kahve",
    "Fındık",
    "Anten Fıstık",
    "Limon",
    "Misket Limon",
    "Akçaağaç Şurubu",
    "Şeftali",
    "Nane",
    "Ananas",
    "Ahududu",
    "Çilek",
    "Vanilya",
  ];

function ismeGoreFiltrele(tatlardizisi, flavourName){
    let filtre = []
    for (let i=0; i<tatlardizisi.length; i++){
        if(tatlardizisi[i].includes(flavourName)){
            filtre.push(tatlardizisi[i])
        }
    }
    return filtre
}
console.log(ismeGoreFiltrele(orijinalTatlar, "Çikolata"));


