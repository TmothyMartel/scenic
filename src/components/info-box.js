import React from "react";
import "./css/info-box.css";
import tripod from "../images/camera.svg";
import diaphragm from "../images/camera-diaphragm.svg";
import mCamera from "../images/m-camera.svg";
export default function InfoBox(props) {
    return (
        <section className="container">
            <article className="card">
                <img className="icon" src={tripod} />
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
            </article>
            <article className="card">
                <img className="icon" src={diaphragm} />
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
            </article>
            <article className="card">
                <img className="icon" src={mCamera} />
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
            </article>
        </section>
    );
}
