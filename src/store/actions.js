// ****************************
// ******* CONST **************
// ****************************
export const GET_HERO = 'GET_HERO';
export const LANG_ES = "ES";
export const LANG_EN = "EN";
export const APPEAR = 'START_DECIMATION'
export const ES = {
              HERO:{title: "Portafolio"}
              ,
              Appear: {show: true},

            };

export const EN = {
             HERO:{ title: "portfolio"}
             ,
             Appear: {show: true},
            };


// ***************************************
// ************ ACTIONS ******************
// ***************************************

 export function getEnglish(){

   return {
             type: LANG_EN,
             txt: EN
           };
 };

 export function getSpanish(){
   return {
             type: LANG_ES,
             txt: ES
           };
 };
