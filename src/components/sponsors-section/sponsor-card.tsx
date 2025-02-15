/*eslint-disable*/
import { Sponsor } from "models/sponsor";
import React, { useState } from "react";
import styles from './Sponsors.module.css'
import Image from 'next/image'


interface SponsorCardProps extends Sponsor {
    isStaff?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = (sponsor) => {
    return (
        <a href={sponsor.url} target="_blank">
            <div className={styles.SponsorCard}>
                <img alt={`Logo da empresa ${sponsor.name}`} src={sponsor.logo} className={styles.SponsorCardBodyImage} />
            </div>
        </a>
    );
}

export default SponsorCard;

