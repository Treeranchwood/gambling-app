/**
 * Utility function that returns current date in YYYY-MM-DD format
 * @function getDate
 * @returns {string} Current date in YYYY-MM-DD format
 */
function getDate() {
    // gets current date
    const today = new Date()
    
    // extracts day, month, and year
    const day = today.getDate()
    let month = today.getMonth() + 1  // months are 0-indexed
    const year = today.getFullYear()

    if (month === 12 || month === 11 || month === 10){}
    else{
        month = `0${month}`
    }


    const currentDay = `${year}-${month}-${day}`

    return currentDay
}


export default getDate
