import { IPreviousExperience } from "../components/previous-experience/previousExperience";

const flgDev: IPreviousExperience = {
    type: "Job",
    title: "Software Engineer",
    organisation: "Fitness and Lifestyle Group",
    yearFrom: "Nov, 2022",
    yearTo: "Feb, 2024",
    location: "Brisbane, Australia",
    description: "After leading product requirements and planning at FLG Digital (see below), I moved to a development role, using my technical skills along side my analytical skills to deliver great solutions within the Scrum team."
};

const flgBA: IPreviousExperience = {
    type: "Job",
    title: "Technical Business Analyst",
    organisation: "Fitness and Lifestyle Group",
    yearFrom: "Dec, 2021",
    yearTo: "Nov, 2022",
    location: "Brisbane, Australia",
    description: "I joined Fitness and Lifestyle Group as the lead Technical Analyst in their Digital Product team. Leveraging my technical expertise and business stakeholder collaboration skillset, I delivered top-notch digital solutions with the Scrum team."
};

const instandaTechLead: IPreviousExperience = {
    type: "Job",
    title: "Lead Implementation Analyst",
    organisation: "INSTANDA",
    yearFrom: "Nov, 2019",
    yearTo: "Dec, 2021",
    location: "Brisbane, Australia",
    description: "I took the opportunity of a leadership role at INSTANDA. This role required me to manage a skilled resource team to implement web-based insurance technology solutions."
};

const instandaConfigAnalyst: IPreviousExperience = {
    type: "Job",
    title: "Configuration Business Analyst",
    organisation: "INSTANDA",
    yearFrom: "Aug, 2018",
    yearTo: "Nov, 2019",
    location: "Brisbane, Australia",
    description: "During this role, I worked as part of a small team to deliver bespoke solutions for clients. I was responsible for documenting product requirements and building applications/features using open web technologies and the INSTANDA platform."
};

const instandaPreSales: IPreviousExperience = { 
    type: "Job",
    title: "Technical Pre-Sales Analyst (Manager)",
    organisation: "INSTANDA", 
    yearFrom: "March, 2024", 
    yearTo: "Present",
    location: "Vienna, Austria",
    description: "In this role I lead the Technical Pre-Sales (TPS) team within the EMEA region. Using my deep technical knowledge of web applications and commercial software, my team of Sales Engineers and I support the sales operations of the business and maintain the demo products. In addition to this, I manage multiple people within my team to ensure we meet deadlines and maintain sustainable workloads."
}

export const previousJobs: IPreviousExperience[] = [
    instandaPreSales,
    flgDev,
    flgBA,
    instandaTechLead,
    instandaConfigAnalyst, 
]