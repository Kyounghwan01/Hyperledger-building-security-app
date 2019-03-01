const search = async(FacilityNumber) => {
    let response = await fetch(`http://192.168.190.45:3000/api/queries/selectGradesByFacilityNumber?grade_prev=resource%3Aorg.acme.model.Grade%23${FacilityNumber}`, {
        accept: 'application/json'
    });
    let result = await response.json();
    return result;
}

/*
const update = async(type, data) => {
    let response = await fetch(`http://192.168.190.16:3000:3000/api/${type}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
    });
    let result = await response.json();
    return result;
}
*/


const Client = {search};
export default Client;
