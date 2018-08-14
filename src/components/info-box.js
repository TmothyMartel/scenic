import React from 'react';
import './css/info-box.css';
export default function InfoBox(props) {
    return (
        <section className="container">
            <article className="card">
                <p>some text</p>
            </article>
            <article className="card">
                <p>some text2</p>
            </article>
            <article className="card">
                <p>some text3</p>
            </article>
        </section>
        
    )
}