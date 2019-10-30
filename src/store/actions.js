// ****************************
// ******* CONST **************
// ****************************
export const GET_HERO = 'GET_HERO';
export const lang_es = "ES";
export const lang_en = "EN";
export const es = {
              HERO:{title: "Portafolio"}
              ,

            };

export const en = {
             HERO:{ title: "portfolio"}
             ,
            };


// ***************************************
// ************ ACTIONS ******************
// ***************************************

 export function getEnglish(){

   return {
             type: lang_en,
             txt: en
           };
 };

 export function getSpanish(){
   return {
             type: lang_es,
             txt: es
           };
 };
