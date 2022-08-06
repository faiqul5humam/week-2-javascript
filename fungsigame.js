alert(`Ini adalah permainan semacam kertas batu gunting, akan tetapi menggunakan angka. Kertas adalah angka 1, gunting adalah angka 2, dan batu adalah angka 3. Permainan akan berlangsung selama 3 babak dimana Anda akan melawan komputer yang akan menebak angka secara random. Ayo Bertarung dan kalahkan robot!`);
let SPemain = 0;
let Srandom = 0;
let babak = 1;
let stop = true;

while (stop){
    let Pemain = prompt("Pilih senjata Anda, Ingat: Kertas = 1, Gunting = 2, Batu = 3");
    let random = getRandom();
    let ulangi = valid(Pemain);
    let kertas = 1;
    let gunting = 2;
    let batu = 3;
    
    if(!ulangi){
        stop = window.confirm("ulangi?");
    }else{
        if(Pemain == random){
            alert("Senjata Kalian sama kuat, pertarungan seimbang!");
        }else{
            if( Pemain == 1 && random == 3){
                alert("Selamat! Anda menang pada ronde ini");
                SPemain++
            }else if( Pemain == 3 && random == 1){
                alert("Komputer menang!");
                Srandom++
            }else if(Pemain > random){
                alert("Selamat! Anda menang pada ronde ini");
                SPemain++
            }else if(Pemain < random){
                alert("Komputer menang!");
                Srandom++
            }
        }

        alert(`
        Senjata komputer: ${random}
        Senjata Anda : ${Pemain}`);

        babak++;
        if (babak <= 3) {
            stop = window.confirm("Babak" + babak + "?");
        } else {
        if (SPemain > Srandom) {
            alert("Selamat! Anda berhasil mengalahkan komputer!");
            stop = false;
        }else if (SPemain < Srandom) {
            alert("Sayang sekali Anda kalah! Hati - hati, robot akan menguasai dunia!");
            stop = false;
        } else {
            alert(`Wow pertarungan yang sangat sengit`);
            babak = 1;
            SPemain = 0;
            Srandom = 0;
            stop = window.confirm("mau main lagi?");
        }
    }
  }    
}

function valid(Pemain){
    if(Pemain > 3 || Pemain < 1){
        alert("Maaf! Angka yang diperbolehkan 1,2, dan 3")
        return false
    }
    if(isNaN(Pemain)){
        alert("Maaf! Anda belum memasukkan angka!")
        return false
    }
    return true
}

function getRandom() {
    const range = [1, 2, 3];
    let isNotRandom = true;
    while (isNotRandom) {
      let random = Math.floor(Math.random() * 10);
      let ketemu = range.find((r) => r === random);
      if (ketemu) {
        isNotRandom = false;
        return random;
      }
    }
  }
  
  console.log(getRandom());
  