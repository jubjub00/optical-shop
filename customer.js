
const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('./client_secret.json')
const doc = new GoogleSpreadsheet('1c_wlQshNY0mgDH5olFlUDvZ5v1MW1EdrM-COfrpUNdk')

function getAll(data){
    return [
        `Namesss:'${data.Name}'`,
        `Surname:'${data.Surname}'`,
        `Telephone_Number:'${data.Telephone_Number}'`,
        `Age:'${data.Age}'`,
        `Gender:'${data.Gender}'`,
        `Type_Lens:'${data.Type_Lens}'`,
        `Eyeglass_Frame:'${data.Eyeglass_Frame}'`,
        `Price:'${data.Price}'`,
        `Date_of_Purchase:'${data.Date_of_Purchase}'`,
        `SPH_L:'${data.SPH_L}'`,
        `CYL_L:'${data.CYL_L}'`,
        `AXIS_L:'${data.AXIS_L}'`,
        `ADD_L:'${data.ADD_L}'`,
        `PRISM_L:'${data.PRISM_L}'`,
        `SPH_R:'${data.SPH_R}'`,
        `CYL_R:'${data.CYL_R}'`,
        `AXIS_R:'${data.AXIS_R}'`,
        `ADD_R:'${data.ADD_R}'`,
        `PRISM_R:'${data.PRISM_R}'`,
        `Photo:'${data.Photo}'`,
        `Branch:'${data.Branch}'`
    ]
}

async function AllUser(){
    
    await doc.useServiceAccountAuth(creds)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()

    const output = []
    rows.forEach(row => {
        output.push(getAll(row))
    })

    return output
}

module.exports = {
    AllUser
}