export const convertDate = (_timestamp) => {

    const date = _timestamp.slice(0, 10);
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);

    if (day[0] === "0") {
        day = day.slice(1);
    }

    if (month[0] === "0") {
        month = month.slice(1);
    }

    switch (month) {
        case "1":
            month = "January"
            break;
        case "2":
            month = "February"
            break;
        case "3":
            month = "March"
            break;
        case "4":
            month = "April"
            break;
        case "5":
            month = "May"
            break;
        case "6":
            month = "June"
            break;
        case "7":
            month = "July"
            break;
        case "8":
            month = "August"
            break;
        case "9":
            month = "September"
            break;
        case "10":
            month = "October"
            break;
        case "11":
            month = "November"
            break;
        case "12":
            month = "December"
            break;
        default:
    }

    const result = `${month} ${day}, ${year}`;

    return result;
}