import React from 'react'
import Images from './Images';
import './Grid.css';

function Grid() {
    return (
        <div className="photos-container">
            <div className="select-photo-type-container">
                <select name="options" class="options">
                    <option value="Popular">Popular</option>
                    <option value="New">New & Noteworthy</option>
                    <option value="Sale">Goods for Sale</option>
                </select>
                <div className="photos">
                    <div className="art-segment">All</div>
                    <div className="art-segment">Animation</div>
                    <div className="art-segment">Branding</div>
                    <div className="art-segment">Illustration</div>
                    <div className="art-segment">Mobile</div>
                    <div className="art-segment">Print</div>
                    <div className="art-segment">Product Design</div>
                    <div className="art-segment">Typography</div>
                    <div className="art-segment">Web Design</div>
                </div>

                <select name="filter" id="filter">
                    <option value="Filter">Filter</option>
                    <option value="Tags">Tags</option>
                    <option value="Color">Color</option>
                    <option value="Time Frame">Time Frame</option>
                    <option value="Made With">Made With</option>
                    <option value="Downloads">Downloads</option>
                </select>
            </div>

            <div className="grid-container">{
                Images.map(({id, src, title, description}) => 
                <div><img key={id} src={src} title={title}/></div>
                
            )}</div>
            <img src="../../images/grid/nature/nature1"/>

            {/* <div className="row"> */}

            {/* images.map(({id, src, title, description}) => 
                <img key={id} src={src} title={title} alt={description} />) */}
                {/* {// <div className="column">
                //     <img src="./img/nature/nature1.jpeg" alt=""/>
                //     <img src="./img/fashion/img1.jpeg" alt=""/>
                //     <img src="./img/wild/wild1.jpeg" alt=""/>
                //     <img src="./img/creative/creative1.jpeg" alt=""/>
                // </div>

                // <div className="column">
                //     <img src="./img/creative/creative2.jpeg" alt=""/>
                //     <img src="./img/nature/nature2.jpeg" alt=""/>
                //     <img src="./img/fashion/img2.jpeg" alt=""/>
                //     <img src="./img/wild/wild2.jpeg" alt=""/>
                // </div>

                // <div className="column">
                //     <img src="./img/fashion/img3.jpeg" alt=""/>
                //     <img src="./img/wild/wild3.jpeg" alt=""/>
                //     <img src="./img/creative/creative3.jpeg" alt=""/>
                //     <img src="./img/nature/nature3.jpeg" alt=""/>
                // </div>

                // <div className="column">
                //     <img src="./img/creative/creative4.webp" alt=""/>
                //     <img src="./img/nature/nature4.jpeg" alt=""/>
                //     <img src="./img/wild/wild4.jpeg" alt=""/>
                //     <img src="./img/fashion/img4.jpeg" alt=""/>
                // </div> 
            // </div>  */}

        </div>
    )
}

export default Grid;
