import { writeFileSync } from "fs";
// import * as XLSX from "xlsx";

export class Utility {
    
    getUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'Production')
            return "https://www.amazon.in/";  // required URL
        else if (envi == 'staging'){
            //If there are any other environments
        }
    }
}