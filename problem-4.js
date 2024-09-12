function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }

    let score = 0;
    if(obj.testScore <= 50 && obj.schoolGrade <= 30){
        score = obj.testScore + obj.schoolGrade;

        if(obj.isFFamily){
            score += 20;
        }
    }

    return (score >= 80) ? true : false;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily : true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25,
    isFFamily : true }));
