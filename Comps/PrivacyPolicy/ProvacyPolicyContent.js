import AccordionItem from "./AccordionItem";

const PrivacyPolicyContent = () => {
    return ( 
        <div className="privacy-policy-content col-md-8 offset-md-2 pt-2 pb-2 ps-1 pe-1 ps-md-0 pe-md-0">

            <div className="d-flex justify-content-center mb-3">

                <h3 className="privacy-policy-content-title">
                    Terms Of Service
                </h3>

            </div>

            <div className="privacy-policy-content-accordion__wrapper">

                <AccordionItem title={"Overview"} content={["Aliquet nibh praesent tristique magna sit amet purus gravida. Vitae suscipit tellus mauris a diam maecenas sed enim. Purus gravida quis blandit turpis cursus in. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.", "Aliquet lectus proin nibh nisl condimentum id venenatis. Tellus rutrum tellus pellentesque eu. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Ultrices eros in cursus turpis massa tincidunt dui.", "Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Eget duis at tellus at urna condimentum mattis. Consectetur lorem donec massa sapien. Quis auctor elit sed vulputate. ", "Pharetra convallis posuere morbi leo urna molestie at elementum. Turpis egestas integer eget aliquet nibh praesent tristique magna. Condimentum lacinia quis vel eros donec ac."]} />

            </div>

        </div>
     );
}
 
export default PrivacyPolicyContent;