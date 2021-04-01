import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'
import './YearSection.scss'

function YearSection() {
    const animationRef = useRef(null)
    const onFocusRef = useRef(null)
    const [visible, setVisiblity] = useState("");
    const functionEvents = (e) => {
        // focusOnClick(e)
        paragraphAnimation(e)
    }
    // window.pageYOffset = Y corrdinates on scroll
    // window.innerHeight = Y corrdinates of the screen
    //
    var pageButtom = Math.trunc(window.pageYOffset + window.innerHeight)
    var { y: pageUp } = useWindowScroll()

    const fadeOnScroll = (headerTags) => {
        headerTags.forEach((child) => {
            if (child.classList.contains("year-header-after") | child.classList.contains("year-header-before") && pageUp + 50 > child.offsetTop)
                focusMenuOnScroll(child.id)
            if (child.classList.contains("fadeOnScroll"))
                return
            if (child.classList.contains("year-header"))
                if (pageButtom > child.offsetTop) {
                    // console.log(child.id)

                    child.classList.add("fadeOnScroll")
                    setInterval(() => {
                        child.style.setProperty('--opacityHeader', "1")
                    }, 1700);
                }
        })
    }

    const focusMenuOnScroll = (headerId) => {
        var anchorTags = onFocusRef.current.childNodes
        console.log()
        anchorTags.forEach((child) => {
            if (child.classList.contains("mainMenu-onFocus"))
                child.classList.remove("mainMenu-onFocus")
            if (headerId.split(' ')[0].includes((child.innerText))) {
                child.classList.add("mainMenu-onFocus")
            }

        })
    }

    useEffect(() => {
        const headerTags = animationRef.current.childNodes
        fadeOnScroll(headerTags)
        if (pageUp > 630) {
            setVisiblity("goFromLeft")
        }
        else
            setVisiblity("")


    }, [pageUp]);

    // this row to convert children nodes to Array so we can use it within "foreach"
    // NodeList.prototype.forEach = Array.prototype.forEach

    // This method focus on click side nav button to change style
    // Becuase of onFocus not working proberly, that's why I made that stupid method.

    // const focusOnClick = (e) => {
    //     if (e.target.className === "mainMenu-onFocus")
    //         return

    //     var anchorTags = onFocusRef.current.childNodes
    //     anchorTags.forEach((child) => {
    //         if (child.classList.contains("mainMenu-onFocus"))
    //             child.classList.remove("mainMenu-onFocus")
    //     });
    //     e.target.className += "mainMenu-onFocus"
    // }

    const paragraphAnimation = (e) => {
        var children = animationRef.current.childNodes
        children.forEach(child => {
            if (child.classList.contains("onClickChangeColor"))
                child.classList.remove("onClickChangeColor")

            if (child.classList.contains("year-header") && child.innerText.indexOf(e.target.innerText) === 0) {
                child.classList.add("onClickChangeColor")
            }
        });
    }
    return (
        <>
            <div className="year-container">
                <div className="menu-container">
                    <ul className={`mainMenu glow-on-hover ${visible}`} ref={onFocusRef}>
                        <a href="#content-2021" onClick={functionEvents}>
                            <i className="fas fa-notes-medical"></i>
                            2021
                            </a>
                        <a href="#content-2020" onClick={functionEvents}><i className="fas fa-graduation-cap"></i>2020</a>
                        <a href="#content-2019" onClick={functionEvents}><i className="fas fa-book-open"></i>2019</a>
                        <a href="#content-2018" onClick={functionEvents}><i className="fas fa-book-open"></i>2018</a>
                        <a href="#content-2017" onClick={functionEvents}><i className="fab fa-js"></i>2017</a>
                        <a href="#content-2016" onClick={functionEvents}><i className="fas fa-search"></i>2016</a>
                        <a href="#content-2015" onClick={functionEvents}><i className="fas fa-plane-departure"></i>2015</a>
                    </ul>
                </div>
                <div className="content-container" ref={animationRef}>
                    <div className="year-header-before" id='content-2021'></div>
                    <div className="year-header">
                        <h3 className="header-c">2021</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </div>
                    <div className="year-header-after" id='content-2020'></div>

                    <div className='year-header' >
                        <h3 className="header-c">2020</h3>
                        <p>Lorem ipsum 2019 dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, excepturi? Vitae, laboriosam! Voluptas quaerat deleniti ab iure possimus esse, ipsum hic nulla, placeat impedit, velit cupiditate quae laboriosam a vero?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a totam tempora hic doloribus recusandae! Officia assumenda nulla dolorum minima nostrum, deserunt, in culpa ad quas nobis, dolore exercitationem quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus excepturi harum totam quaerat modi officiis officia omnis similique impedit animi, tempora sunt minima eius qui corrupti nihil debitis vitae!
                        </p>
                    </div>

                    <div className="year-header-after" id='content-2019'></div>

                    <div className='year-header'>
                        <h3 className="header-c">2019</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim, mollitia pariatur accusamus magni voluptatem! Harum officiis ipsam voluptatem incidunt quod explicabo vel tenetur distinctio a, sunt consequuntur ab repellat!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cupiditate, odio accusamus magni, asperiores, maxime beatae nihil alias deleniti aut nemo! Nulla aut consectetur placeat commodi, vero atque mollitia vel.
                        </p>
                    </div>

                    <div className="year-header-after" id='content-2018'></div>

                    <div className='year-header'>
                        <h3 className="header-c">2018</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </div>

                    <div className="year-header-after" id='content-2017'></div>

                    <div className='year-header' id='content-2017'>
                        <h3 className="header-c">2017</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </div>

                    <div className="year-header-after" id='content-2016'></div>

                    <div className='year-header' id='content-2016'>
                        <h3 className="header-c">2016</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est suscipit consectetur, hic voluptatum et, natus facilis sint vel, at assumenda voluptate voluptates necessitatibus nemo fuga laudantium maxime. Repellendus, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet obcaecati, accusantium libero quaerat facilis debitis soluta tempora praesentium exercitationem alias in provident nobis earum adipisci eveniet velit expedita tempore.
                        </p>
                    </div>

                    <div className="year-header-after" id='content-2015'></div>

                    <div className='year-header' id='content-2015'>
                        <h3 className="header-c">2015</h3>
                        <p>
                            This year was unique, as many things changed, the most important of which was immigration from Syria to Sweden. There are no academic achievements this year.
                            There were many difficulties and challenges that I faced while traveling, but finding a safe and beautiful place will make you forget what you have faced before.
                        </p>
                    </div>
                    <div className="year-header-before"></div>
                </div>
                <div className="year-right-section">

                </div>
            </div>
        </>
    )
}


export default YearSection
