import React from 'react';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import SingleContactUs from '../../components/ContactUs/SingleContactUs';
import ContactUsFrom from '../../components/ContactUs/ContactUsFrom';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';

const Contacts = () => {
    return (
        <div>
            <ShearedBanner title={'Contact'}/>
            <SingleContactUs/>
            <ContactUsFrom/>
            <AutoServiceLogo/>
        </div>
    );
};

export default Contacts;