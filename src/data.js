export const API_KEY='AIzaSyCjf_BciKCcYNtb8T4tv8KUM9JEZ2y4E-A'


export const value_converter=(value)=>{
    if (value>=1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}