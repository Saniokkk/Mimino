function count (string) {  
  if(string.length === 0){
   return {};
    }
  string.split('').reduce((acc, el, index) => {
    acc.el += 1
    console.log("🚀 ~ file: main.js:9 ~ string.split ~ acc:", acc)
    
  }, {})
    
}


count(street);