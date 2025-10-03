const getAverage = array => {
    let total = array[0];
    for(let i=1;i<array.length;i++){
        total = total + array[i];
        
    }
    let average =total/array.length;
    return average;
}
const getGrade = score => {
    let grade;
    if(score === 100){
        grade = "A+";
    } else if (score >= 90 && score<=99){
        grade = "A";
    }  else if (score >= 80 && score<=89){
        grade = "B";
    }  else if (score >= 70 && score<=79){
        grade = "C";
    }  else if (score >= 60 && score<=69){
        grade = "D";
    }  else if (score >= 0 && score<=59){
        grade = "F";
    }
    return grade;
}
const hasPassingGrade = score => {
    let result = getGrade(score);
    if(result === "F"){
        return false;
    } else {
        return true;
    }
}

const studentMsg = (array,score) => {
    let studentAverage = getAverage(array);
    let studentGrade = getGrade(score);
    if(studentGrade === "F"){
        return `Class average: ${studentAverage}. Your grade: ${studentGrade}. You failed the course.`
    } else {
        return `Class average: ${studentAverage}. Your grade: ${studentGrade}. You passed the course.`
    }
}