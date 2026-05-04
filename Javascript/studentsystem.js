// > - Check if a student can enroll (capacity check)
// > - Get enrollment percentage per class
// > - Find most/least popular courses
// > - Generate waiting list when full

const courses = [
  {
    courseId: "FSD-001",
    courseName: "Fullstack Software Development",
    maxCapacity: 15,
    enrolledStudents: [
      { id: 101, name: "Kamau Otieno" },
      { id: 102, name: "Nanjala Wafula" },
      { id: 103, name: "Muthoni Njeri" },
      { id: 104, name: "Juma Hassan" },
      { id: 105, name: "Achieng Onyango" },
      { id: 106, name: "Kiptoo Rono" },
      { id: 107, name: "Wanjiku Maina" },
      { id: 108, name: "Mwakio Mghanga" },
      { id: 109, name: "Atieno Odhiambo" },
      { id: 110, name: "Kariuki Kimani" },
      { id: 111, name: "Chepkoech Langat" },
      { id: 112, name: "Omar Bakari" },
      { id: 113, name: "Mwangi Githinji" },
      { id: 114, name: "Waweru Njoroge" },
      { id: 115, name: "Nekesa Simiyu" },
    ],
  },
  {
    courseId: "GD-002",
    courseName: "Graphic Design",
    maxCapacity: 30,
    enrolledStudents: [
      { id: 201, name: "Wambui Kamau" },
      { id: 202, name: "Omondi Wuod" },
      { id: 203, name: "Cherono Bett" },
      { id: 204, name: "Musa Juma" },
      { id: 205, name: "Wawira Njue" },
      { id: 206, name: "Kipkorir Yego" },
      { id: 207, name: "Nyambura Muchiri" },
      { id: 208, name: "Okello Joram" },
      { id: 209, name: "Fatuma Ali" },
      { id: 210, name: "Gati Chacha" },
      { id: 211, name: "Barasa Kundu" },
      { id: 212, name: "Makena Mutua" },
      { id: 213, name: "Khamisi Mohammed" },
      { id: 214, name: "Zawadi Luvai" },
      { id: 215, name: "Moraa Nyaboke" },
    ],
  },
  {
    courseId: "NW-003",
    courseName: "Networking",
    maxCapacity: 20,
    enrolledStudents: [
      { id: 301, name: "Kiplagat Tanui" },
      { id: 302, name: "Wamalwa Khisa" },
      { id: 303, name: "Adhiambo Awuor" },
      { id: 304, name: "Munyao Kyalo" },
      { id: 305, name: "Wanjala Nasimiyu" },
      { id: 306, name: "Odour Silas" },
      { id: 307, name: "Kuria Macharia" },
      { id: 308, name: "Mwaniki Thuo" },
      { id: 309, name: "Khadija Idi" },
      { id: 310, name: "Ekwam Epetet" },
    ],
  },
  {
    courseId: "DM-004",
    courseName: "Digital Marketing",
    maxCapacity: 10,
    enrolledStudents: [
      { id: 401, name: "Mwikali Musyoka" },
      { id: 402, name: "Ochieng Owino" },
      { id: 403, name: "Waceke Gachagua" },
      { id: 404, name: "Kiprotich Sang" },
      { id: 405, name: "Amondi Tabitha" },
      { id: 406, name: "Mulei Mutisya" },
      { id: 407, name: "Wekesa Wafula" },
      { id: 408, name: "Nimo Abdi" },
      { id: 409, name: "Kerubo Bosibori" },
      { id: 410, name: "Sifuna Murunga" },
    ],
  },
];

console.log(courses[1].enrolledStudents.length);
console.log(courses[3].enrolledStudents.length);
// log max capacity for the networking class
console.log(courses[2].maxCapacity);

function checkSlotAvailability(courses) {
  for (let course of courses) {
    if (course.maxCapacity <= course.enrolledStudents.length) {
      console.log(course.courseName + " Is FULL!!!!");
    } else {
      console.log(course.courseName + " Has OPEN slots!!!");
    }
  }
}
checkSlotAvailability(courses);

// do percentate capacity capacity