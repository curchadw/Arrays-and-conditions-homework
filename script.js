//I start out with an empty array
const myStudies = []

//This is how I am add subjects dynamically instead of hardcoding a bunck of variables
const addStudies = subject =>{
  myStudies.includes(subject) === false ? myStudies.push(subject) : console.log('Already exist in collection')
  console.log(myStudies)
  return myStudies
}

//This fuction will log each subject individually
const listSubjects = () =>{
  for(let i = 0; i < myStudies.length; i++){
    console.log(myStudies[i])
    // return myStudies[i] || 'Empty'
  }
  
}


//This function will tell you how I feel about other subject and how I feel about my favorite subject
const favoriteStudy = (subject) =>{
   if(subject === myStudies[0]){
    console.log('One of my favorite subjects')
  }else{
    if(subject === '' ||myStudies[0] === false){
      console.log('Either you entered a empty subject')
    }
    else{
      console.log('Eh...it\'s not one of my favorites')
    }
  }

  if(subject === myStudies[0]) {
    return 'One of my favorite subjects'
  }
  else{
      if(subject === ''){
         return 'Nothing to judge'
      }else{
         
          return "Eh...it's not one of my favorites" 
       
      }
  }


}