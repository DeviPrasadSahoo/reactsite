import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../css/slider.css';
import bannerone from '../images/banner2.jpg';
import bannertwo from '../images/banner4.jpg';
import bannerthree from '../images/banner5.jpg';

const items = [
    {
        src: bannerone,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        src: bannertwo,
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: bannerthree,
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
    }
    ];
    
    const MySlider = () => {
        return(
            <>
                <UncontrolledCarousel items={items} />
            </>
        );
    };

export default MySlider;