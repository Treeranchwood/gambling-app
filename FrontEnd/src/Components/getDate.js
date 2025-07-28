function getDate() {

    const today = new Date()
    const day = today.getDate()
    let month = today.getMonth() + 1
    const year = today.getFullYear()

    if (month === 12 || month === 11 || month === 10){}
    else{
        month = `0${month}`
    }

    const currentDay = `${year}-${month}-${day}`

    return currentDay
}


export default getDate
