import React from 'react'
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
                    <div className="art-segment">Technology</div>
                    <div className="art-segment">Architecture</div>
                    <div className="art-segment">Business & Work</div>
                    <div className="art-segment">Wellness</div>
                    <div className="art-segment">History</div>
                    <div className="art-segment">Product Design</div>
                    {/* <div className="art-segment">Typography</div> */}
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


          
        </div>
    )
}

export default Grid;
