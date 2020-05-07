import axios from "axios";
const ENDPOINT = "http://localhost:3002/";
const JOB = "jobs/";

const EN_LANG = 'EN/';
const ES_LANG = 'ES/';

axios
  .get(`${ENDPOINT}${JOB}${EN_LANG}`)
  .then(Response => {
    console.log(Response.data.res);
    EN.Jobs = Response.data.res;
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });
axios
  .get(`${ENDPOINT}${JOB}${ES_LANG}`)
  .then(Response => {
    console.log(Response.data.res);


  })
  .catch(function(error) {
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
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "titulo del trabajo",
        location: "Caba, argentina",
        duration: "Enero-Marzo 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      }
    ]
  }
};

export const EN = {
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
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      },
      {
        title: "Job Title",
        location: "Caba, argentina",
        duration: "January-March 2020",
        description:
          "Lorem consectetur aliquip quis est excepteur duis." +
          " Est cupidatat irure eu pariatur minim voluptate." +
          " In reprehenderit cillum esse laborum nostrud eiusmod do enim ex. " +
          "Nulla velit ex nulla ea eiusmod laboris consequat cupidatat anim ex nisi esse."
      }
    ]
  }
};

// ***************************************
// ************ ACTIONS ******************
// ***************************************

export function getEnglish() {
  return {
    type: LANG_EN,
    txt: EN
  };
}

export function getSpanish() {
  return {
    type: LANG_ES,
    txt: ES
  };
}
