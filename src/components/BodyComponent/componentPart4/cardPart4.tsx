import React, { useRef, useState } from "react";  
// Import Swiper React components  
import { Swiper, SwiperSlide } from "swiper/react";  

// Import Swiper styles  
import "swiper/css";  
import "swiper/css/pagination";  

// import images  
import img1 from '../../../assets/0191b816-d596-751d-a14f-4df0be5df0c1.png'  
import img2 from '../../../assets/1716238578443.png'  
import img3 from '../../../assets/1717417134163.png'  
import img4 from '../../../assets/1718643078461.png'  
import img5 from '../../../assets/1720532267435.png'  
import ItemCardPart4 from "./itemCardPart4";  
import { useMediaQuery } from "@mui/material";
import theme from "../../theme";

let data = [  
    {id: 1, img: img1, version: 'v0.90', date: '4d ago', title: 'Enhanced Vulnerability Management, AWS Integration, and Real-time Template Feed', description: 'In this release, weve significantly improved our vulnerability management capabilities, introduced new AWS integration features, enhanced overall user experience, and added real-time feed of Nuclei templates. Were focusing on providing more comprehensive vulnerability tracking, streamlining cloud integrations and improving scan and asset management.'},  
    {id: 2, img: img2, version: 'v0.89', date: '1mo ago ', title: 'Asset & Tech Inventory with AI-Powered Search - August 1, 2024', description: 'In this release, weve significantly enhanced our asset management capabilities, introduced Asset inventory with AI-powered search filters, and improved the overall user experience. In addition were focusing on providing more comprehensive asset insights, streamlining asset filtering and export processes, and enhancing cloud integration features.'},  
    {id: 3, img: img3, version: 'v0.88', date: '2mo ago', title: 'Enhancing Asset Discovery with Screenshots and Tech Stack Detection - July 8, 2024', description: 'In this release, weve made substantial enhancements to our asset discovery capabilities, introduced new features for Basic Tier (Free) users, and resolved several critical issues. Our primary focus has been on improving the visibility and analysis of discovered assets, and refining the insights for assets.'},  
    {id: 4, img: img4, version: 'v0.87', date: '3mo ago', title: 'Introducing Multiple Team Support with RBAC and 2FA, and Asset Filtering - June 17, 2024', description: 'In this release, we have introduced support for the creation of multiple teams. Team support includes new features for member segregation and enhanced 2FA (two-factor authentication). For assets, we have added the ability to filter and scan assets directly from the asset content page. This release improves the flexibility and control of team and account management, with significant updates to our API.'},  
    {id: 5, img: img5, version: 'v0.86', date: '4mo ago', title: 'Enhanced Asset Discovery and Free Trial - June 4, 2024', description: 'This release focuses on improving Asset management. Key highlights include new asset filtering options and a Free Trial for new users.'},  
    {id: 6, img: img1, version: 'v0.85', date: '5mo ago', title: 'New Asset Details and Ticket Tracking', description: 'This release continues to improves the asset discovery and management experience. We are enhancing PDCP with more context and options for assets. Future updates will include asset filtering, labeling, and additional metadata (for example: asset categories and screenshots).'},  
];  

const CardPart4 = () => {  
    const isMboile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    return (  
        <>  
            <Swiper slidesPerView={ isTablet ? 3 : isMboile ? 2 : 4} spaceBetween={10} className="mySwiper">  
                {data.map((item) => (  
                    <SwiperSlide key={item.id} >
                        <ItemCardPart4 items={item} />
                    </SwiperSlide>  
                ))}  
            </Swiper>  
        </>  
    );  
}  

export default CardPart4;