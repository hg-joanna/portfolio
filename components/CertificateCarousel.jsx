"use client";

import {
    useRef
} from "react";

export default function CertificateCarousel({
    certificates
}) {

    const listRef = useRef(null);

    return (

        <div className="certificate-carousel">

            <div
                ref={listRef}
                className="certificate-list"
            >

                {certificates.map((certificate) => {

                    const content = (
                        <>
                            <div className="certificate-logo">

                                {certificate.logo ? (
                                    <img
                                        src={certificate.logo}
                                        alt=""
                                    />
                                ) : (
                                    <span>+</span>
                                )}

                            </div>


                            <div className="certificate-info">

                                <h3>
                                    {certificate.title}
                                </h3>

                                <p>
                                    {certificate.year}
                                </p>

                            </div>


                            {/* LARGE CLICK INDICATOR */}

                            {certificate.viewLink && (
                                <span
                                    className="certificate-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            )}

                        </>
                    );


                    return certificate.viewLink ? (

                        <a
                            key={certificate.title}
                            href={certificate.viewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certificate-item"
                        >
                            {content}
                        </a>

                    ) : (

                        <div
                            key={certificate.title}
                            className="certificate-item certificate-item-disabled"
                        >
                            {content}
                        </div>

                    );

                })}

            </div>

        </div>

    );
}