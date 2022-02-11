import contact from "./contact/en.js";
import actualCase from "./actualCase/en.js";
import SkillSupport from "./skillsupport/en.js";
import productHome from "./products/en.js";
import aboutUs from "./aboutUs/en.js";
import report from "./report/en.js";
import home from "./home/en.js";
export default {
    ...SkillSupport,
    ...contact,
    ...actualCase,
    ...productHome,
    ...aboutUs,
    ...report,
    ...home,

    home: "Home",
    aboutUs: "About us",
    productIntor: "Products",
    skillSupport: "Tech. support",
    actualCase: "Case Study",
    report: "Related media report",
    contactUs: "Contact Us",

    phone: "Phone",
    fax: "Fax",
    address: "Address",
    email: "E-mail",
    currentAddress: "3F., No. 12, Zhouzi St., Neihu Dist., Taipei City 114 , Taiwan (R.O.C.)",
    copyright: "Copyright © 2021 Strong And Wise Material Tech Company",

    previousPage: "Previous Page",
    submit: "Submit",
};