import React from 'react';
import {TbFileSpreadsheet} from 'react-icons/tb'
import './Service.css'

const Service = () => {
    return (
        <div class="container mb-5 home-page-service-section">
    <div class="text-center mt-5">
        <h1>Our Services</h1>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services settings">
                    <div class="icon icon-1"> <TbFileSpreadsheet/> </div>
                    <h4>Social Media Ads</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services speedup">
                    <div class="icon icon-2"><TbFileSpreadsheet/> </div>
                    <h4>Meta Ads</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services privacy">
                    <div class="icon icon-3"> <TbFileSpreadsheet/> </div>
                    <h4>Google Ads</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services backups">
                    <div class="icon icon-4"> <TbFileSpreadsheet/> </div>
                    <h4>Web Analytics</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services ssl">
                    <div class="icon icon-5"> <TbFileSpreadsheet/> </div>
                    <h4>Graphice Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services database">
                    <div class="icon icon-6"> <TbFileSpreadsheet/> </div>
                    <h4>Website Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Service;