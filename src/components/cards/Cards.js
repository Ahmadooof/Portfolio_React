import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image from '../../photos/af.gif'

function Cards() {
    let imaacsge = {
        src: '',
        text: '',
        label: '',
        path: '',
    }
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem
                            src={image}
                            text="ascasccsa ac s ascsacsac"
                            label="Nature"
                            path="/services"
                        />

                        <CardItem
                            // src="photos/image-2.jpg"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem autem vel, voluptas distinctio porro accusamus totam beatae perspiciatis, quae repudiandae nostrum, laboriosam veritatis nam commodi incidunt temporibus accusantium? Officiis."
                            label="Nature"
                            path="/services"
                        />
                        <CardItem
                            // src="photos/image-3.jpg"
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
