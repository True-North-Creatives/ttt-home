import React from 'react';
import { Link } from 'react-router-dom';

import Classes from './footer.module.css';
import NextArrow from '../NextArrow';

export default function Footer({ para1, para2, strong }) {
    return (
        <div className={Classes.footer}>
            <div className={Classes.descriptionContainer}>
                <p className={Classes.description}>
                    {para1} <strong className={Classes.strong}>{strong}</strong>
                    {para2}
                </p>
                <Link to="/services" className={Classes.explore}>
                    Explore <NextArrow />{' '}
                </Link>
            </div>
            <div>
                <Link className={Classes.button} to="/register">
                    Join Now
                </Link>
                <h4
                    style={{ position: 'relative', top: -10 }}
                    className={Classes.price}
                >
                    INR 99/ MONTH
                </h4>
            </div>
        </div>
    );
}
