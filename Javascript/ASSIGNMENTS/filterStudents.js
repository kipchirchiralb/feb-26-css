// given an array of students{name,email,gender,age} , write a javascript function that filters students data to get male students above age 21

const students = [
  {
    name: "Albert Kipchirchir",
    email: "albert@eldohub.ac.ke",
    gender: "male",
    age: 25,
    isInsured: false,
  },
  {
    name: "Faith Chepkoech",
    email: "faith.c@eldohub.ac.ke",
    gender: "female",
    age: 22,
    isInsured: true,
  },
  {
    name: "Emmanuel Kiprop",
    email: "emmanuel.k@eldohub.ac.ke",
    gender: "male",
    age: 24,
    isInsured: false,
  },
  {
    name: "Mercy Jemutai",
    email: "mercy.j@eldohub.ac.ke",
    gender: "female",
    age: 21,
    isInsured: true,
  },
  {
    name: "Brian Kimutai",
    email: "brian.k@eldohub.ac.ke",
    gender: "male",
    age: 26,
    isInsured: false,
  },
  {
    name: "Sharon Chebet",
    email: "sharon.c@eldohub.ac.ke",
    gender: "female",
    age: 23,
    isInsured: true,
  },
  {
    name: "Victor Kiprono",
    email: "victor.k@eldohub.ac.ke",
    gender: "male",
    age: 27,
    isInsured: true,
  },
  {
    name: "Brenda Cherotich",
    email: "brenda.c@eldohub.ac.ke",
    gender: "female",
    age: 20,
    isInsured: false,
  },
  {
    name: "Kevin Kipkemboi",
    email: "kevin.k@eldohub.ac.ke",
    gender: "male",
    age: 25,
    isInsured: true,
  },
  {
    name: "Diana Chepkemoi",
    email: "diana.c@eldohub.ac.ke",
    gender: "female",
    age: 22,
    isInsured: false,
  },
  {
    name: "Collins Kipkorir",
    email: "collins.k@eldohub.ac.ke",
    gender: "male",
    age: 24,
    isInsured: true,
  },
  {
    name: "Naomi Jepchumba",
    email: "naomi.j@eldohub.ac.ke",
    gender: "female",
    age: 23,
    isInsured: false,
  },
  {
    name: "Gideon Kiprotich",
    email: "gideon.k@eldohub.ac.ke",
    gender: "male",
    age: 28,
    isInsured: true,
  },
  {
    name: "Sheila Chepkorir",
    email: "sheila.c@eldohub.ac.ke",
    gender: "female",
    age: 21,
    isInsured: true,
  },
  {
    name: "Dennis Kipngetich",
    email: "dennis.k@eldohub.ac.ke",
    gender: "male",
    age: 15,
    isInsured: false,
  },
  {
    name: "Ruth Jeptoo",
    email: "ruth.j@eldohub.ac.ke",
    gender: "female",
    age: 24,
    isInsured: true,
  },
  {
    name: "Amos Kiposgei",
    email: "amos.k@eldohub.ac.ke",
    gender: "male",
    age: 26,
    isInsured: false,
  },
  {
    name: "Lydia Chelagat",
    email: "lydia.c@eldohub.ac.ke",
    gender: "female",
    age: 22,
    isInsured: true,
  },
  {
    name: "Philemon Kipkurui",
    email: "philemon.k@eldohub.ac.ke",
    gender: "male",
    age: 20,
    isInsured: false,
  },
  {
    name: "Cynthia Jerotich",
    email: "cynthia.j@eldohub.ac.ke",
    gender: "female",
    age: 23,
    isInsured: true,
  },
];

function getStdentsAboveAge(age, gender, listOfAllStudents) {
  const genderFilteredData = listOfAllStudents.filter(
    (student) => student.gender == gender,
  );
  //   console.log(genderFilteredData);
  const ageFilteredData = genderFilteredData.filter(
    (student) => student.age < 21,
  );
  //   console.log(ageFilteredData);
  return ageFilteredData;
}

getStdentsAboveAge(21, "male", students);

// Write a function that sorts the whole list of students by age in descending - oldest to the youngest - sort

function sortStudentsAges(listofallstudents) {
  const studentages = listofallstudents.sort((a, b) => b.age - a.age);
  return studentages;
}
console.log(sortStudentsAges(students));

// Write a function that will create a exact copy of the list of students but with emails reading @gmail.com instead of @eldohub.ac.ke - map , sole this wothout mao method, use a for loop
