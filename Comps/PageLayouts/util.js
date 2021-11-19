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

export const convertParagraph = (_paragraph) => {

    const result = _paragraph.map((content) => {
        if (content.type === "heading-1") {
            return (
                <h1 className="mb-1">
                    {content.content}
                </h1>
            )
        } else if (content.type === "heading-2") {
            return (
                <h2 className="mb-1">
                    {content.content}
                </h2>
            )
        } else if (content.type === "heading-3") {
            return (
                <h3 className="mb-1">
                    {content.content}
                </h3>
            )
        } else if (content.type === "heading-4") {
            return (
                <h4 className="mb-1">
                    {content.content}
                </h4>
            )
        } else if (content.type === "heading-5") {
            return (
                <h5 className="mb-1">
                    {content.content}
                </h5>
            )
        } else if (content.type === "heading-6") {
            return (
                <h6 className="mb-1">
                    {content.content}
                </h6>
            )
        } else if (content.type === "paragraph") {
            return (
                <p className="mb-1 small">
                    {content.content}
                </p>
            )
        }
    })

    return result
}