const config = require('config.json');
const db = require('_helpers/db');
const Calc = db.Calc;

module.exports = {
    saveData,
    getData
};

async function saveData(calcData) {
    console.log(calcData);
    // validate
    const dataFound = await Calc.findById({ _id: calcData._id })
    if(dataFound){
        Object.assign(dataFound, calcData);
        await dataFound.save();
        const data = dataFound.toObject();
        return {
            ...data
        };
    } else {
        const calc = new Calc(calcData);
        await calc.save();
        const data = calc.toObject()
        return {
            ...data
        };
    }    
}

async function getData(id) {
    return await Calc.findById(id)
}