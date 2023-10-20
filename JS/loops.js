function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    console.log(document.selectForm.musicTypes);
    const musicTypes = document.selectForm.musicTypes;
    
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
  });
  
  // for-in loop 
  const arr=[2,"dfg",345]
  for (const i in arr) {
  console.log(i);
  }
  //For-of Loop
  for (const i of arr) {
    console.log(i);
  }
  // for of return value while for return key
// forEach LOOP
  arr.forEach(element => {
    console.log("for each ",element);
 });
  