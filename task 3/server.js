const mongoose = require("mongoose");

// Connection
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ManagementSystem");
    console.log("Connection Successful");
}
main().catch(err => console.log("Error occured:", err));

const stuSchema = new mongoose.Schema({
    name: String,
    course: String,
    age: Number,
    sub: [String],
    college: String,
    admission_date: Date,
});

const teaSchema = new mongoose.Schema({
    name: String,
    sub_assigned: [String],
    age: Number,
    college: String,
    joining_date: Date,
});


const Student = mongoose.model("Student", stuSchema);
const Teacher = mongoose.model("Teacher", teaSchema);


// // Insert one student
// const stu1 = new Student({
//     name: "Rohit Biswash",
//     course: "BCA",
//     age: 21,
//     sub: ["MERN STACK", "PYTHON", "DSA", "DATABASE"],
//     college: "GGSIPU",
//     admission_date: new Date("2023-08-01")
// });
// stu1.save().then(() => console.log("Student saved")).catch(err => console.log(err));

// // Insert multiple teachers
// Teacher.insertMany([
//     {
//         name: "Rohit Biswash",
//         sub_assigned: ["MERN STACK", "PYTHON", "DSA", "DATABASE"],
//         age: 21,
//         college: "GGSIPU",
//         joining_date: new Date("2023-08-01")
//     },
//     {
//         name: "Namo Narayan",
//         sub_assigned: ["MERN STACK", "PYTHON", "DSA", "DATABASE"],
//         age: 21,
//         college: "GGSIPU",
//         joining_date: new Date("2023-08-01")
//     },
//     {
//         name: "Manya Mishra",
//         sub_assigned: ["MERN STACK", "PYTHON", "DSA", "DATABASE"],
//         age: 20,
//         college: "GGSIPU",
//         joining_date: new Date("2023-08-01")
//     }
// ])
// .then(() => console.log("Teachers saved"))
// .catch(err => console.log(err));


// Fetch all teachers
// Teacher.find()
// .then(data => console.log("All teachers:\n", data))
// .catch(err => console.log(err));

// Conditional query (age < 21)
// Teacher.find({ age: { $lt: 21 } })
// .then(data => console.log("Teachers with age < 21:\n", data))
// .catch(err => console.log(err));

// Find one by ID
// Teacher.findById("PUT_ID_HERE")
// .then(data => console.log("Teacher by ID:\n", data))
// .catch(err => console.log(err));

// // Update one document
// Teacher.updateOne({ name: "Namo Narayan" }, { $set: { age: 25 } })
// .then(res => console.log("Updated one:", res))
// .catch(err => console.log(err));

// // Update many
// Teacher.updateMany({ age: { $in: [20, 21] } }, { $set: { age: 22 } })
// .then(res => console.log("Updated many:", res))
// .catch(err => console.log(err));

// Delete one
Teacher.deleteOne({ name: "Manya Mishra" })
.then(res => console.log("Deleted one:", res))
.catch(err => console.log(err));

// Delete many (corrected: used Teacher not Student)
Teacher.deleteMany({ college: "GGSIPU" })
.then(res => console.log("Deleted many:", res))
.catch(err => console.log(err));