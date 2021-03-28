//
const myStudies = []

const addStudies = subject =>{
  myStudies.includes(subject) === false ? myStudies.push(subject) : console.log('Already exist in collection')
  console.log(myStudies)
  return myStudies
}

const listSubjects = () =>{
  for(let i = 0; i < myStudies.length; i++){
    console.log(myStudies[i])
    return myStudies[i] || 'Empty'
  }
  
}

const favoriteStudy = (subject) =>{
  subject === myStudies[0] ? console.log('One of my favorite subjects') : console.log('Eh...it\'s not one of my favorites')
}