function changeMe(arr) {
    let curyear = 2023;
  
  
  
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      let age;
  
      if (value[3] === undefined || value[3] > curyear) {
        age = 'Invalid Birth Year';
      } else {
        age = curyear - value[3];
      }
  
      let obj = {
        firstName: value[0],
        lastName: value[1],
        gender: value[2],
        age: age
      };
  
      console.log(`${i + 1}. ${value[0]} ${value[1]}:`);
      console.log(obj);
    }
  }
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
  
  changeMe([]); // ""