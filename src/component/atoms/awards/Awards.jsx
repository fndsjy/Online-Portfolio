import "./award.style.css";

const Awards = ({title, awardsTitle}) => {
    return(
        <section id="awards">
            <h1>{title}</h1>
            <div className="trophy row">
                <div className="col-lg-1">
                    <ion-icon name="trophy-sharp"></ion-icon>
                </div>
                <div className="col">
                    <p>{awardsTitle}</p>
                </div>
            </div>
        </section>
    );
}

export default Awards;