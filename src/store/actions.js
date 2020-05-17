import axios from "axios";
const ENDPOINT = "http://localhost:3002/";
const JOB = "jobs/";

const EN_LANG = "EN/";
const ES_LANG = "ES/";

axios
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
  });
// ****************************
// ******* CONST **************
// ****************************
export const GET_HERO = "GET_HERO";
export const LANG_ES = "ES";
export const LANG_EN = "EN";
export const APPEAR = "START_DECIMATION";
export const ES = {
  HEADER:   {Options: [{title : 'Experiencia', id: '#'},{title: 'Habilidades', id: '#'}, {title:  'Pie de pagina', id: '#'}]},
  
  HERO: { title: "Portafolio" },
  Appear: { show: true },
  content: {
    Jobs: [
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
    ],},
    skill: {
      description: ` ES Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, `,
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
  HEADER: {Options: [{title : 'Experience', id: '#'},{title: 'Skill', id: '#'}, {title:  'Footer', id: '#'}]},

  HERO: { title: "portfolio" },
  Appear: { show: true },

  content: {
    Jobs: [
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse.",
      },
    ],
  },
  skill: {
    description: ` EN Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, `,
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
