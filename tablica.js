class Film{
    constructor(tytul, rok, imie_rezysera, nazwisko_rezysera){
        this.tytul = tytul;
        this.rok = rok;
        this.imie_rezysera = imie_rezysera;
        this.nazwisko_rezysera = nazwisko_rezysera;}
    getInfo(){
        return `Tytył filmu: ${this.tytul}, rok produkcji filmu: ${this.rok}, Imię i nazwisko reżysera filmu: ${this.imie_rezysera} ${this.nazwisko_rezysera}`
    }
    getImieRezysera() {
        return `${this.imieRezysera} ${this.nazwiskoRezysera}`;
    }
}

const Films = [new Film('Film pierwszy', '2011', 'Jan', 'Kowalski'),
    new Film('Film drugi', '2022', 'Tadeusz', 'Mickiewicz'),
    new Film('Film trzeci', '1999', 'Adam', 'Słowacki'),
    new Film('Film czwarty', '2003', 'Juliusz', 'Kochanowski')
]
for(let i = 0; i < Films.length; i++)
{
   console.log (Films[i].getInfo())
}