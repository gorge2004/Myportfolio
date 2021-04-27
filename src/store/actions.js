/* import axios from "axios";
const ENDPOINT = "http://localhost:3002/";
const JOB = "jobs/"; */

/* const EN_LANG = "EN/";
const ES_LANG = "ES/"; */

/* axios
  .get(`${ENDPOINT}${JOB}${EN_LANG}`)
  .then((Response) => {
    console.log(Response.data.res);
    EN.Jobs = Response.data.res;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get(`${ENDPOINT}${JOB}${ES_LANG}`)
  .then((Response) => {
    console.log(Response.data.res);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }); */
// ****************************
// ******* CONST **************
// ****************************
export const GET_HERO = "GET_HERO";
export const LANG_ES = "ES";
export const LANG_EN = "EN";
export const APPEAR = "START_DECIMATION";
export const ES = {
  HERO: { title: "Portafolio" },
  Appear: { show: true },
  content: {
    Jobs: [
      {
        title: "Analista de sistema (Pasante)-Desarrollador PHP",
        location: "Maturin, Venezuela",
        duration: "Ene. 2016 – Jul. 2017",
        description:
          "Reingeniería de software de sistema web PHP y MySQL."+
          " Lenguaje  PHP para modificar funcionalidades ya existente y añadir las requeridas."
          +" Utilizando Php 5.0, Mysql, BoostrapCss 3",
      },
      {
        title: "Desarrollador web( Freelance)",
        location: "Maturin, Venezuela",
        duration: "May. 2017 – Jul. 2017",
        description:
          "Desarrollo de software, añadiendo nuevas funcionalidades al sistema. Desarrollado con CakePHP y PostgreSQL."
          +" Utilizando cakephp 2.3, y materializeCss",
      },
      {
        title: "Desarrollador web( Freelance)",
        location: "MonkuApp, Peru ( Freelance)",
        duration: "Ene. 2019 – Abr 2019",
        description:
          "Worked several web Sites."
          +" Using distinct tecnologies as Koa(NodeJs), PUG, JavaScript, Jquery.",
      },
      {
        title: "Desarrollador web( Freelance)",
        location: "Bucares, Francia ( Freelance)",
        duration: "Jun. 2019 - Jul. 2019",
        description:
          "Apoyo en el desarrollo de una Tienda prestaShop, and developin de un plugin para tienda realizada en  Wordpress.",
      },
      {
        title: "Desarrollador Salesforce",
        location: "Xappia, Argentina",
        duration: "Enero. 2020- Nov. 2020",
        description:
          "Desarrollo con lenguaje Apex, distinto requerimientos en distintos projectos.",
      },
      {
        title: "Desarrollador Web",
        location: "Nectica, Argentina",
        duration: "Nov. 2020- Presente",
        description:
          "Desarrollo  de distintos sistemas administrativos . Realizados con laravel. Modificacion de sitios ya existente con php y Javascript",
      },
    ],},
    skill: {
      description: `Tengo alrededor de 2 años de experiencia en desarrollo web utilizando múltiples tecnologías enfocadas en el area, 
      utilizando principalmente PHP, Javascript, Mysql. He utilizado tecnologías como laravel, cakePhp, React native, Mysql, Postgress,
      KoaJs, BootstrapCSS, MaterializeCSS he tomado el cargo de desarrollador web a lo largo de mi carrera profesional. 
      Durante la misma también he tenido contacto con librerias como ReactJs, VueJs, Redux, Leguajes como Java, C# y netcore porque me gusta ir aprendiendo la nuevas tecnologías y estar a la vanguardia de la industria de desarrollo . Me considero una persona altamente responsable y me gusta aprender distintas cosas que me ayuden a  ser un profesional integral que pueda aportar tanto a la organización para la cual trabaje como nutrir mi conocimiento. me gustan las tecnologías tanto de backend como de frontend, aprender y practicar distintos lenguajes de programación. 
      Mis hobbies me gusta mucho el cine y la musica, tengo  interés por el mundo de la criptomonedas tanto el trading como las tecnologías usadas.`,
      json_skill: [
        "javascript",
        "php",
        "java",
        "python",
        "css",
        "redux",
        "react",
        "cakephp",
        "laravel",
        "MVC",
        "linux mint",
        "c#",
        "Node Js",
        "DB",
      ],
    },
    footer: {
      description: `Este es mi portafiolio, 
                          el cual esta realizado con React.Js para demostrar mis habilades aprendidas. 
                          me puedes contactar a traves de gorge2004@gmail.com`,
      socials: [
        { type: "github", link: "https://github.com/gorge2004" },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/jorge-espinoza-47aa03177/",
        },
      ],
    },
  
};

export const EN = {
  HERO: { title: "portfolio" },
  Appear: { show: true },
  content: {
    Jobs: [
      {
        title: "Systems Engineer (Intern)- PHP Developer",
        location: "Maturin, Venezuela",
        duration: "Jan. 2016 – Jul. 2017",
        description:
          "Software reengineering of technical support, technologies PHP y MySQL."+
          "this job was modified systems features  y add new ones."
          +" Using Php 5.0, Mysql, BoostrapCss 3",
      },
      {
        title: "Web Developer Aquitupides( Freelance)",
        location: "Maturin, Venezuela",
        duration: "May. 2017 – Jul. 2017",
        description:
          "Developing new features that lets user post articles on web site. Technologies used: cakephp 2.3,  materializeCss and PostgreSQL."
          ,
      },
      {
        title: "Web Developer( Freelance)",
        location: "MonkuApp, Peru ( Freelance)",
        duration: "Jan. 2019 – Apr 2019",
        description:
          "used to modify several web sites, using technologies As  Koa(NodeJs), PUG, JavaScript, Jquery."
      },
      {
        title: "Web Developer( Freelance)",
        location: "Bucares, Francia ( Freelance)",
        duration: "Jun. 2019 - Jul. 2019",
        description:
          " Desarrollo of a plugin to a wordpress shop.",
      },
      {
        title: "Salesforce Developer",
        location: "Xappia, Argentina",
        duration: "Jan. 2020- Nov. 2020",
        description:
          "Working in several projects and developing distinct requeriments in each one. Apex, Js, Html",
      },
      {
        title: "Web Developer",
        location: "Nectica, Argentina",
        duration: "Nov. 2020- Presente",
        description:
          "Developing  Administration systems and modified some sites using Php and Javascript. Develope by laravel.",
      },
    ],
  },
  skill: {
    description: ` I have around 2 years experienced as a Web developer, and have used different technologies in special PHP, Javascript and Mysql. 
    i have worked  with technologies as laravel, cakephp, react, react native , Koajs, 
    BootstrapCss, MaterialiceCss , both in  companies projects and personals project. 
    i took several course with diffents programming languagues as java, C# and netcore,
    and have learned myseft a bite about React.js, redux, react native, vuejs , nodejs, becuase 
    these technologies are actually popular in this jobs world. i think myselft as full responsibility person who can learn so fast and reach goals.
    my hobbies is watching movies and like to learn about crypto Currencies to save way and awesome tenchologies what use on it. `,
    json_skill: [
      "javascript",
      "php",
      "java",
      "python",
      "css",
      "redux",
      "react",
      "cakephp",
      "laravel",
      "MVC",
      "linux mint",
      "c#",
      "Node Js",
      "DB",
    ],
  },
  footer: {
    description: `This is my personal portfolio, it was made with React.js my intention is show my learned skills. 
                you can contact me by gorge2004@gmail.com`,
    socials: [
      { 
        type: "github", 
        link: "https://github.com/gorge2004" 
      },
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/jorge-espinoza-47aa03177/",
      },
    ],
  },
};

// ***************************************
// ************ ACTIONS ******************
// ***************************************

export function getEnglish() {
  return {
    type: LANG_EN,
    txt: EN,
  };
}

export function getSpanish() {
  return {
    type: LANG_ES,
    txt: ES,
  };
}
