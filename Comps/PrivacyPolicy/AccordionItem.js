const AccordionItem = ({ title, content }) => {

    const getContent = (_content) => {

        return _content.map((content) => (
            <p>{content}</p>
        ))

    }

    return (
        <div className="accordion__wrapper mb-1">

            <div className="d-flex justify-content-between align-items-start align-items-md-center">

                <div className="h5">{title}</div>

                <div className="ml-6">

                    <div className="plus__wrapper">

                        <span className="minus" />

                        <span className="vertical-line" />

                    </div>

                </div>

            </div>

            <div className="pe-md-4">

                <div className="pt-1 pb-1">

                    {getContent(content)}

                </div>

            </div>

        </div>
    );
}

export default AccordionItem;