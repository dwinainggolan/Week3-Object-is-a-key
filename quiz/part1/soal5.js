//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let hasil = ""
    for (i=0; i<kata.length; i ++)
       {let char = kata[i]
        if (char === "z"){
            hasil += "a"

        }else {
            hasil += String.fromCharCode(char.charCodeAt(0) + 1)
        }
       }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu