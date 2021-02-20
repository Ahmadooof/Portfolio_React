import React from 'react'
import './YearSection.scss'

function YearSection() {

    // this code to generate random color on hover 

    // const generateRandomColor = (event) => {
    //     if (event.target.nodeName === 'I')
    //         return
    //     var red = Math.floor(Math.random() * 256);
    //     var blue = Math.floor(Math.random() * 256);
    //     var green = Math.floor(Math.random() * 256);
    //     event.target.style.animation = 'scrollTop 0.5s alternate';
    //     event.target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    // }

    return (
        <>
            <div className="year-container">
                <div className="menu-container">
                    <ui className="mainMenu glow-on-hover">
                        <li>
                            <a href="#content-2021">
                                <i class="fas fa-notes-medical"></i>
                            2021
                            </a>
                        </li>
                        <li>
                            <a href="#content-2020"><i class="fas fa-graduation-cap"></i>2020</a>
                        </li>
                        <li>
                            <a href="#content-2019"><i class="fas fa-book-open"></i>2019</a>
                        </li>
                        <li>
                            <a href="#content-2018"><i class="fas fa-book-open"></i>2018</a>
                        </li>
                        <li>
                            <a href="#content-2017"><i class="fab fa-js"></i>2017</a>
                        </li>
                        <li>
                            <a href="#content-2016"><i class="fas fa-search"></i>2016</a>
                        </li>
                        <li>
                            <a href="#content-2015"><i class="fas fa-plane-departure"></i>2015</a>
                        </li>
                    </ui>
                </div>
                <div className="content-container" id='content-2021'>
                    <div className="year-header-before"></div>
                    <h1 className='year-header' >
                        2021
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </h1>
                    <div className="year-header-after" id='content-2020'></div>

                    <h1 className='year-header'>
                        2020
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, excepturi? Vitae, laboriosam! Voluptas quaerat deleniti ab iure possimus esse, ipsum hic nulla, placeat impedit, velit cupiditate quae laboriosam a vero?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a totam tempora hic doloribus recusandae! Officia assumenda nulla dolorum minima nostrum, deserunt, in culpa ad quas nobis, dolore exercitationem quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus excepturi harum totam quaerat modi officiis officia omnis similique impedit animi, tempora sunt minima eius qui corrupti nihil debitis vitae!
                        </p>
                    </h1>

                    <div className="year-header-after" id='content-2019'></div>

                    <h1 className='year-header'>
                        2019
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim, mollitia pariatur accusamus magni voluptatem! Harum officiis ipsam voluptatem incidunt quod explicabo vel tenetur distinctio a, sunt consequuntur ab repellat!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cupiditate, odio accusamus magni, asperiores, maxime beatae nihil alias deleniti aut nemo! Nulla aut consectetur placeat commodi, vero atque mollitia vel.
                        </p>
                    </h1>

                    <div className="year-header-after" id='content-2018'></div>

                    <h1 className='year-header'>
                        2018
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>

                    <div className="year-header-after" id='content-2017'></div>

                    <h1 className='year-header' id='content-2017'>
                        2017
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>

                    <div className="year-header-after" id='content-2016'></div>

                    <h1 className='year-header' id='content-2016'>
                        2016
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>

                    <div className="year-header-after" id='content-2015'></div>

                    <h1 className='year-header' id='content-2015'>
                        2015
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>
                    <div className="year-header-before"></div>

                </div>
            </div>
        </>
    )
}

export default YearSection
