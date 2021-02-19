import React, { useRef } from 'react'
import './YearSection.css'

function YearSection() {

    // const gotoCommentSection = () =>
    //     window.scrollTo({
    //         top: commentSection.current.offsetTop,
    //         behavior: "smooth"
    //     });

    return (
        <>
            {/* <div className='section'>
                <div className='section-container'>
                    <ul>
                        <li ref={commentSection} onClick={gotoCommentSection}>
                            <h1 className='year-heading'> 2020 </h1>
                        </li>
                        <li ref={commentSection} onClick={gotoCommentSection}>
                            <h1> 2020</h1>
                        </li>
                        <li ref={commentSection} onClick={gotoCommentSection}>2019</li>
                    </ul>
                </div>
            </div> */}
            <div className="year-container">
                <div class="menu-container">
                    <ui class="mainMenu">
                        <li class="item">
                            <a href="#content-2021" class="btn-side-nav"><i class="fas fa-user-circle"></i>2021</a>
                        </li>
                        <li class="item">
                            <a href="#content-2020" class="btn-side-nav"><i class="fas fa-graduation-cap"></i>2020</a>
                        </li>
                        <li class="item">
                            <a href="#content-2019" class="btn-side-nav"><i class="fas fa-info"></i>2019</a>
                        </li>
                        <li class="item">
                            <a href="#content-2018" class="btn-side-nav"><i class="fas fa-book-open"></i>2018</a>
                        </li>
                        <li class="item">
                            <a href="#content-2017" class="btn-side-nav"><i class="fas fa-sign-out-alt"></i>2017</a>
                        </li>
                        <li class="item">
                            <a href="#content-2016" class="btn-side-nav"><i class="fas fa-book-open"></i>2016</a>
                        </li>
                        <li class="item">
                            <a href="#content-2015" class="btn-side-nav"><i class="fas fa-plane-departure"></i>2015</a>
                        </li>
                    </ui>
                </div>
                <div className="content-container">
                    <h1 className='year-header' id='content-2021'>
                        2021
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </h1>

                    <h1 className='year-header' id='content-2020'>
                        2020
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, excepturi? Vitae, laboriosam! Voluptas quaerat deleniti ab iure possimus esse, ipsum hic nulla, placeat impedit, velit cupiditate quae laboriosam a vero?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a totam tempora hic doloribus recusandae! Officia assumenda nulla dolorum minima nostrum, deserunt, in culpa ad quas nobis, dolore exercitationem quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus excepturi harum totam quaerat modi officiis officia omnis similique impedit animi, tempora sunt minima eius qui corrupti nihil debitis vitae!
                        </p>
                    </h1>

                    <h1 className='year-header' id='content-2019'>
                        2019
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim, mollitia pariatur accusamus magni voluptatem! Harum officiis ipsam voluptatem incidunt quod explicabo vel tenetur distinctio a, sunt consequuntur ab repellat!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cupiditate, odio accusamus magni, asperiores, maxime beatae nihil alias deleniti aut nemo! Nulla aut consectetur placeat commodi, vero atque mollitia vel.
                        </p>
                    </h1>

                    <h1 className='year-header' id='content-2018'>
                        2018
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>

                    <h1 className='year-header' id='content-2017'>
                        2017
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>

                    <h1 className='year-header' id='content-2016'>
                        2016
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>

                    <h1 className='year-header' id='content-2015'>
                        2015
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default YearSection
