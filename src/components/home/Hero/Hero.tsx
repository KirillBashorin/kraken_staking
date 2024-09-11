import React, {FC} from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {Button, Text, Title} from "@/components/ui";
import {Socials} from "@/components/common";

import styles from './Hero.module.css';

const Hero: FC = () => {
    const {t} = useTranslation();

    let section = <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <div className={styles.heroImage}>
                    <motion.div className={styles.krakenImage}>
                        <Image src={'/images/kraken.png'} width="297" height="231" alt="kraken"/>
                    </motion.div>
                    <motion.div className={styles.krakenLogo}>
                        <Image src={'/images/logo.png'} width="326" height="72" alt="kraken logo"/>
                    </motion.div>
                </div>

                <div className={styles.content}>
                    <Title className={styles.title} size={'large'} isNoShadow={true}>{t('hero:title')}</Title>
                    <Text className={styles.text} size={'big'}>{t('hero:text')}</Text>
                    <div className={styles.buttons}>
                        <Button className={styles.buy} isLight={true} disabled={true} locked={true}>
                            {t('common:buy')}
                        </Button>
                        <Socials/>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>;
    return section
};

export default Hero;
