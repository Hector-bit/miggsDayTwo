function miggsIsGay(){
    let maybe = Math.random()
    if(maybe < 0.5){
      return true
    } else {
      return false
    }
  }
  
  function miggsReportCard(){
    let grade = Math.random() * 100
    return grade
  }
  
  //IF STATEMENTS
  // let isGay = miggsIsGay()
  
  
  // && and (true && false) => not pass
  // || or  (true || false) => pass
  function isMySonADumbass(){
    console.log('|--------------------------------------|')
    let reportCard = miggsReportCard()
    
    if(reportCard > 90){
      console.log("did you win son")
    }else if (reportCard > 80 && reportCard < 90 ){
      console.log("your grounded")
    }else if (reportCard > 70 && reportCard < 80){
      console.log("dont come home")
    }else if (reportCard > 60 && reportCard <70){
      console.log("you bring dishonor to the family")
    }
    else{
      console.log("die")
    }
    console.log('MIGGS REPORT CARD: ', reportCard)
    console.log('|--------------------------------------|')
  }
  
  let myArr = [0,0,0]
  
  
  //GRADES FOR LOOP
  for(let i = 0;i < 10;i++){
    // let report = 10[i]
    isMySonADumbass()
  }
  
  