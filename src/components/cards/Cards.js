import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC lo</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem
                            src="photos/image-1.jpg"
                            text="ascasccsa ac s ascsacsac"
                            label="Nature"
                            path="/services"
                        />

                        <CardItem
                            src="photos/image-2.jpg"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem autem vel, voluptas distinctio porro accusamus totam beatae perspiciatis, quae repudiandae nostrum, laboriosam veritatis nam commodi incidunt temporibus accusantium? Officiis."
                            label="Nature"
                            path="/services"
                        />
                        <CardItem
                            src="photos/image-3.jpg"
                            text="explore the natureLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem autem vel, voluptas distinctio porro accusamus totam beatae perspiciatis, quae repudiandae nostrum, laboriosam veritatis nam commodi incidunt temporibus accusantium? Officiis."
                            label="Nature"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
