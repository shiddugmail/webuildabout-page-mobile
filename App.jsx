import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X02AboutPageMobile from "./components/X02AboutPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|02-about-page-mobile)">
          <X02AboutPageMobile {...x02AboutPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-13@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const founderCardData = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90@2x.png",
    name: "Jenny Wilson",
    designation: "Designation",
};

const founderCard32Data = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-2@2x.png",
    name: "Esther Howard",
    designation: "Designation",
};

const founderCard2Data = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-1@2x.png",
    name: "Brooklyn Simmons",
    designation: "Designation",
};

const founderCard4Data = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-3@2x.png",
    name: "Jane Cooper",
    designation: "Designation",
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-4@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-223@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-409@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-347@2x.svg",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagramData,
    twitterProps: twitterData,
};

const group32Data = {
    place: "Contact",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-374@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-318@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-111@2x.svg",
    text21: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text20: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const x02AboutPageMobileData = {
    aboutUs: "About Us",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-7@2x.png",
    text1: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    whyChooseUs: "Why Choose Us?",
    line55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-55-2@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-114@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-286@2x.svg",
    place: "Quality",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-116@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-117@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-118@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-120@2x.svg",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-278@2x.svg",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-279@2x.svg",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-280@2x.svg",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-281@2x.svg",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-282@2x.svg",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-283@2x.svg",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-127@2x.svg",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-285@2x.svg",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-286@2x.svg",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-287@2x.svg",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-288@2x.svg",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-289@2x.svg",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-133@2x.svg",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-291@2x.svg",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-292@2x.svg",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-293@2x.svg",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-294@2x.svg",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-295@2x.svg",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-296@2x.svg",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-297@2x.svg",
    vector29: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-298@2x.svg",
    vector30: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-299@2x.svg",
    vector31: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-307@2x.svg",
    vector32: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-308@2x.svg",
    vector33: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-309@2x.svg",
    vector34: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-310@2x.svg",
    vector35: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-311@2x.svg",
    vector36: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-300@2x.svg",
    vector37: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-301@2x.svg",
    vector38: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-302@2x.svg",
    vector39: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-303@2x.svg",
    vector40: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-147@2x.svg",
    vector41: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-305@2x.svg",
    vector42: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-306@2x.svg",
    transparency: "Transparency",
    vector43: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-155@2x.svg",
    vector44: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg",
    cost: "Cost",
    rectangle72: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-72@2x.png",
    place2: "Quality",
    text3: "Quality for us is not just using expensive brands of raw materials, it mainly involves three key points,  Right design. By understanding the geological condition of your site as a prerequisite, we provide the customized design for your homesite by adopting inputs from the soil testing that we perform for each construction site.   Following the right standard operating procedures. Our SOPs ensure we achieve high efficiency, quality outputs, and uniformity of performance. Specific brands of construction material to be used for specific conditions.  Each brand of construction material has its own strengths and weaknesses. We provide suggestions at each stage for specific brands and types of material to be used according to your unique condition.",
    rectangle73: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-73@2x.png",
    transparenccy: "Transparenccy",
    text4: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
    rectangle70: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-70@2x.png",
    cost2: "Cost",
    text5: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
    rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-77-2@2x.png",
    whyWebuild: "Why Webuild?",
    text2: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable. If you are Lorem Ipsum you need to be sure there is not the anything of embarrassing. If you are Lorem Ipsums your need to be sure there as isn’t anything embarrassing.",
    whyWebuild2: "Why Webuild?",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3-2@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5-2@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4-2@2x.png",
    frame145Props: frame145Data,
    founderCardProps: founderCardData,
    founderCard32Props: founderCard32Data,
    founderCard2Props: founderCard2Data,
    founderCard4Props: founderCard4Data,
    group8622Props: group8622Data,
    group87Props: group87Data,
    group32Props: group32Data,
    frame5Props: frame5Data,
};

