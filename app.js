const express = require('express');
const bodyParser = require(`body-parser`);
const  _ = require(`lodash`);
const { toUpper } = require('lodash');

const app = express();
const port = 3000;

app.use(express.static(`public`));

app.set('view engine', 'ejs');

let branches = [`Computer Engineering`, `Electrical and Electronics Engineering`, `Mechanical Engineering`, `Civil Engineering`, `General`, `Commercial and Computer Practice`];
let branches_lower = [`dcme`, `deee`, `dme`, `dce`, `general`, `dccp`];
let YOE = [`2008`, `1961`, `1961`, `1961`, `1975`];
let college_photos = `images/college_photos/`;
let faculty = `images/faculty/`;

let general_faculty = [`${faculty}general/g1.png`, `${faculty}general/g2.png`, `${faculty}general/g3.png`, `${faculty}general/g4.png`, `${faculty}general/g5.png`];
let general_faculty_name = [`P.M.BASHA`, `M.MOHANDAS`, `P.ANUPAMA`, `S.RAMANAMURTHY`, `K.UDAYBHASHKAR`];
let general_faculty_post = [`Senior Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`];
let general_faculty_mobile = [`+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`];

let dcme_faculty = [`${faculty}dcme/hod.png`, `${faculty}dcme/ark.png`, `${faculty}dcme/bs.jpg`, `${faculty}dcme/pkv.png`, `${faculty}dcme/ps.png`, `${faculty}dcme/brr.jpg`, `${faculty}dcme/ggr.jpeg`, `${faculty}dcme/bd.jpeg`];
let dcme_faculty_name = [`D. Murali Krishna`, `A. Rama Krishna`, `B. Suresh`, `P.Krishnaveni`, `P. Shiva`, `B. Ramana Rao`, `G. Girish Reddy`, `B.Drakshyani`];
let dcme_faculty_post = [`Head of Computer Department`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`];
let dcme_faculty_mobile = [`+91 94403 50315`, `+91 98491 37389`, `+91 93988 09940`, `+91 99599 65687`, `+91 94943 34125`, `+91 99488 04292`, `+91 XXXXX XXXXX`, `+91 94403 46130`];

let deee_faculty = [`${faculty}deee/svr.png`, `${faculty}deee/ssr.png`, `${faculty}deee/dv.png`, `${faculty}deee/pr.png`, `${faculty}deee/vr.png`, `${faculty}deee/lsr.png`];
let deee_faculty_name = [`S.V.R.NAIK`, `S.SRINIVASA RAO`, `D.VENKANNA`, `P.RAJU`, `VARA LAKSHMI`, `L.SRINIVASA RAO`];
let deee_faculty_post = [`Lecutrer`, `Lecturer`, `Senior Instructor`, `Electrician`, `Office Subordinate`, `Lab Attender`];
let deee_faculty_mobile = [`+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`];

let dme_faculty = [`${faculty}dme/hod.png`, `${faculty}dme/vsp.png`, `${faculty}dme/kr.png`, `${faculty}dme/gb.png`, `${faculty}dme/adr.png`, `${faculty}dme/pmk.png`, `${faculty}dme/krk.jpg`, `${faculty}dme/pmr.jpg`, `${faculty}dme/ms.jpg`];
let dme_faculty_name = [`G.V.Raghunath`, `V.Surya Pratap`, `K.Raju`, `G.Bharathi`, `A.Dhanunjaya Rao`, `Dr. P.Murali Krishna`, `K.Ramesh Kumar`, `P.Maheswara Rao`, `Muzeer Shaik`];
let dme_faculty_post = [`HOD`, `Senior Lecturer`, `Senior Lecturer`, `Senior Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`];
let dme_faculty_mobile = [`+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`];

let dce_faculty = [`${faculty}dce/YVR.jpg`, `${faculty}dce/JVSK.jpg`, `${faculty}dce/vvrs.jpg`, `${faculty}dce/JRR.jpg`, `${faculty}dce/KVR.jpg`, `${faculty}dce/chsl.jpg`];
let dce_faculty_name = [`Y.Venkateswara Rao`, `J.V.S.K.Haranath`, `V.V.R.S. MURTHY`, `J.Rukmeswara Rao`, `K.Vasudevarao`, `CH. Swarna Latha`];
let dce_faculty_post = [`HOD`, `Senior Lecturer`, `Senior Lecturer`, `Lecturer`, `Lecturer`, `Lecturer`];
let dce_faculty_mobile = [`+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`];

let dccp_faculty = [`${faculty}dccp/hod.png`, `${faculty}dccp/pck.png`, `${faculty}dccp/ps.png`, `${faculty}dccp/pvr.png`];
let dccp_faculty_name = [`Dr.G.Rajeswari`, `P.Srividya`, `P.Chitti kasulu`, `P.V.Rajyalakshmi`];
let dccp_faculty_post = [`HOD`, `Lecturer`, `Lecturer`, `Lecturer`];
let dccp_faculty_mobile = [`+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`, `+91 XXXXX XXXXX`];

let allFaculty = [dcme_faculty, deee_faculty, dme_faculty, dce_faculty, general_faculty ,dccp_faculty];
let allFacultyNames = [dcme_faculty_name, deee_faculty_name, dme_faculty_name, dce_faculty_name, general_faculty_name ,dccp_faculty_name];
let allFacultyPosts = [dcme_faculty_post, deee_faculty_post, dme_faculty_post, dce_faculty_post, general_faculty_post ,dccp_faculty_post];
let allFacultyMobile = [dcme_faculty_mobile, deee_faculty_mobile, dme_faculty_mobile, dce_faculty_mobile, general_faculty_mobile ,dccp_faculty_mobile];

let labs = `images/labs/`;

let dcmeLabs = [`${labs}dcme/computer-lab.jpg`];
let dcmeLabsName = [`COMPUTER LAB`];

let deeeLabs = [`${labs}deee/electrical-machine-lab.jpg`, `${labs}deee/measurements-lab.jpg`, `${labs}deee/electronics-lab.jpg`, `${labs}deee/power-electronics.jpg`];
let deeeLabsName = [`ELETRICAL MACHINES LABORATORY`, `ELETRICAL MEASUREMENTS LABORATORY`, `ELETRONICS LABORATORY`, `POWER ELECTRONICS AND PLC LABORATORY`];

let dmeLabs = [`${labs}dme/cam-lab.jpg`, `${labs}dme/carpentary.jpg`, `${labs}dme/fitting.jpg`, `${labs}dme/forging.jpg`, `${labs}dme/foundry.jpg`, `${labs}dme/fuels-lab.jpg`, `${labs}dme/machine-shop.jpg`, `${labs}dme/material-testing.jpg`, `${labs}dme/sheetmetal.jpg`, `${labs}dme/thermal-engineering.jpg`, `${labs}dme/turningshop.jpg`, `${labs}dme/welding.jpg`];
let dmeLabsName = [`CAM LAB`, `CARPENTARY`, `FITTING`, `FORGING`, `FOUNDRY`, `FUELS LAB`, `MACHINESHOP`, `MATERIAL TESTING LAB`, `SHEETMETAL`, `THERMAL ENGINEERING LAB`, `TURNINGSHOP`, `WELDING`];

let dceLabs = [`${labs}dce/soil_mechanics.jpg`, `${labs}dce/hydraulics.jpg`, `${labs}dce/surveying.jpg`, `${labs}dce/material-testing.jpg`];
let dceLabsName = [`SOIL MECHANIC LAB`, `HYDRAULICS LABORATORY`, `SURVEY LABORATORY`, `MATERIAL TESTING LABORATORY`];

let dccpLabs = [`${labs}dccp/type-lab.jpg`, `${labs}dccp/computer-lab.jpg`];
let dccpLabsName = [`ENGLISH TYPE WRITING LAB`, `COMPUTER LAB`];

let allLabs = [dcmeLabs, deeeLabs, dmeLabs, dceLabs, dccpLabs];
let allLabsNames = [dcmeLabsName, deeeLabsName, dmeLabsName, dceLabsName, dccpLabsName];

app.get(`/`, (req, res) => {
    res.render(`home`, { course: branches, year: YOE, college_pics: college_photos });
});

app.get(`/departments`, (req, res) => {
    res.render(`departments`, { course: branches, link: branches_lower, college_pics: college_photos });
});

app.get(`/about`, (req, res) => {
    res.render(`about`)
})

app.get(`/contact`, (req, res) => {
    res.render(`contact`, { picsPath: college_photos });
})

for (let i = 0; i < branches_lower.length; i++) {
    let route = _.lowerCase(`${branches_lower[i]}faculty`);
    app.get(`/${route}`, (req, res) => {
        res.render(`faculty`, {
            title: toUpper(branches_lower[i]),
            faculty: allFaculty[i],
            facultyName: allFacultyNames[i],
            facultyPost: allFacultyPosts[i],
            facultyMobile: allFacultyMobile[i]
        });
    });
}


for (let i = 0; i < branches_lower.length; i++) {
    let route = _.lowerCase(`${branches_lower[i]}labs`);
    app.get(`/${route}`, (req, res) => {
        res.render(`labs`, {
            title: toUpper(branches_lower[i]),
            labPics: allLabs[i],
            labNames: allLabsNames[i]
        });
    });
}


app.listen(port, () => {
    console.log(`Server is Up and running at localhost:${port}`);
});