import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import EcommerceImage from '../../photos/ecommerce.gif'
import PDImage from '../../photos/personalDesktop.gif'
import databaseImage from '../../photos/database.gif'
import emotionImage from '../../photos/emotions_reader.gif'



function Cards() {
    // let card = {
    //     Imagesrc: '',
    //     description: '',
    //     label: '',
    //     path: '',
    // }
    return (
        <>
            <div className='cards'>
                <h1>Projects</h1>
                <div className="cards__container">
                    <div className="cards__wraper">
                        <ul className="cards__items">
                            <CardItem
                                svg={<>
                                    <div className="project-icons">
                                        <svg width="50" viewBox="0 0 128 128">
                                            <path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
                                        </svg>
                                        <svg width="50" viewBox="0 0 128 128">
                                            <path fill="#f58220" d="M27.35,80.52l10.68-68.44c0.37-2.33,3.5-2.89,4.6-0.8l11.48,21.48L27.35,80.52z M103.29,97.15 L93.1,34.11c-0.31-1.96-2.76-2.76-4.17-1.35L24.71,97.15l35.54,19.95c2.21,1.23,4.97,1.23,7.18,0L103.29,97.15z M74.44,42.15 L66.21,26.5c-0.92-1.78-3.44-1.78-4.36,0L25.7,90.95L74.44,42.15z"></path>
                                        </svg>
                                        <svg width="50" viewBox="0 0 128 128">
                                            <path fill="#5B4282" d="M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024h-5.001v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zM34.252 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM49.161 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM57.09 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM70.671 122.245c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107-.409-.354-.735-.765-.979-1.234-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613-.467-.116-.925-.174-1.376-.174-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zM78.254 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM86.778 120.827v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826h-3.146l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zM104.494 125.958l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561c-.896-2.884-1.401-4.515-1.514-4.893-.113-.378-.193-.677-.242-.896-.201.78-.777 2.71-1.729 5.789h3.485zM118.469 116.757c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122h.933c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zM73.951 56.759c-1.983-.653-4.838-.759-8.565-.759h-13.386v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zM71.895 48.147c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809h-11.549v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126c0-7.802-6.325-14.126-14.127-14.126h-77.746c-7.802 0-14.127 6.324-14.127 14.126v77.748c0 7.802 6.325 14.126 14.127 14.126h77.746c7.802 0 14.127-6.324 14.127-14.126v-77.748zm-30.43 57.144c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098-2.569.653-5.717 1.181-9.444 1.181h-22.424v-59h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"></path>
                                        </svg>
                                    </div>
                                </>
                                }

                                sourceCode={"https://github.com/Ahmadooof/E-commerce-Project-Course-in-Computer-Science"}
                                src={EcommerceImage}
                                text="E-commerce shop"
                                // label="Nature"
                                path="https://thewebshop-f3a8c.web.app/"
                                description="Angular project deployed on firebase"
                            />

                            <CardItem
                                svg={<>
                                    <div className="project-icons">
                                        <svg width="50" viewBox="0 0 128 128">
                                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                                        </svg>
                                        <svg width="50" viewBox="0 0 128 128">
                                            <g id="original"><path fill="#8ed6fb" d="M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"></path><path fill="#1c78c0" d="M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"></path></g>
                                        </svg>
                                        <svg width="50" viewBox="0 0 128 128">
                                            <path fill="#201C1D" d="M44.634 57.361c-2.599 0-5.499 1.001-6.107 4.296-.064.351.167.517.391.567l2.663.32c.246-.014.414-.28.461-.533.228-1.134 1.16-1.669 2.201-1.669.563 0 1.193.193 1.527.71.381.576.354 1.359.354 2.024v.391c-1.582.182-3.666.292-5.147.958-1.709.76-2.912 2.307-2.912 4.58 0 2.913 1.785 4.366 4.083 4.366 1.94 0 3.013-.456 4.509-2.022.497.738.656 1.073 1.562 1.846.202.108.458.098.64-.071v.035c.545-.497 1.535-1.401 2.094-1.881.222-.187.174-.493 0-.746-.5-.707-1.029-1.276-1.029-2.592v-4.366c0-1.85.156-3.556-1.172-4.828-1.046-1.031-2.791-1.385-4.118-1.385zm35.786 0c-2.6 0-5.498 1.001-6.106 4.296-.064.351.166.517.39.567l2.664.32c.246-.014.415-.28.461-.533.229-1.134 1.161-1.669 2.201-1.669.564 0 1.193.193 1.526.71.381.576.319 1.359.319 2.024v.391c-1.582.182-3.63.292-5.112.958-1.711.76-2.91 2.307-2.91 4.58 0 2.913 1.785 4.366 4.082 4.366 1.938 0 3.011-.456 4.509-2.022.495.738.656 1.073 1.563 1.846.203.108.458.098.639-.071v.035c.546-.497 1.537-1.401 2.095-1.881.222-.187.171-.493 0-.746-.5-.707-1.03-1.276-1.03-2.592v-4.366c0-1.85.12-3.556-1.206-4.828-1.05-1.031-2.759-1.385-4.085-1.385zm-20.13.142c-1.68 0-2.924.848-3.585 2.663h-.036v-1.882c-.018-.262-.23-.483-.496-.497h-2.557c-.29 0-.533.245-.533.533v14.378c.022.255.238.479.498.497h2.733c.292 0 .531-.243.532-.533v-7.633c0-1.664-.08-3.94 1.882-3.94 1.937 0 1.668 2.339 1.668 3.94v7.633c0 .271.222.515.498.533h2.733c.29 0 .532-.243.532-.533v-7.633c0-.816-.033-2.006.248-2.733s.971-1.207 1.634-1.207c.789 0 1.394.275 1.598 1.242.126.575.071 2.094.071 2.698v7.633c0 .271.222.515.496.533h2.734c.29 0 .532-.243.532-.533v-9.088c0-1.545.154-3.298-.71-4.509-.765-1.088-2.015-1.563-3.16-1.563-1.605 0-3.101.848-3.763 2.663-.764-1.814-1.842-2.662-3.549-2.662zm46.472 0c-3.949 0-6.142 3.473-6.142 7.953 0 4.448 2.167 8.022 6.142 8.022 3.823 0 6.249-3.492 6.249-7.881 0-4.537-2.198-8.094-6.249-8.094zm15.585 0c-1.887 0-2.966.943-3.728 2.911h-.035v-2.201c-.049-.222-.258-.377-.497-.39h-2.521c-.275 0-.508.199-.533.461v14.378c0 .271.225.515.497.533h2.699c.289 0 .527-.242.531-.533v-7.739c0-.97.083-1.855.463-2.733.306-.697.899-1.137 1.562-1.137 1.883 0 1.703 2.295 1.703 3.87v7.811c.028.244.249.445.498.462h2.733c.269 0 .501-.204.532-.462v-9.053c0-1.392.003-3.324-.71-4.474-.764-1.241-1.975-1.704-3.194-1.704zm-32.803.249c-.278 0-.497.22-.498.532v2.059c.001.31.213.531.498.533h4.686l-5.361 7.916c-.326.511-.354 1.089-.354 1.421v2.095c0 .302.328.63.639.461 3.056-1.668 6.717-1.52 9.479-.035.336.183.675-.16.675-.462v-2.202c-.026-.294-.142-.576-.497-.781-1.568-.901-3.388-1.178-5.111-1.136l4.65-6.815c.43-.613.67-.981.674-1.279v-1.774c0-.306-.209-.532-.496-.532h-8.984zm17.218 2.698c.865 0 1.504.386 1.811 1.384.354 1.152.391 2.588.391 3.799 0 1.846-.086 4.899-2.201 4.899-2.139 0-2.13-3.78-2.13-5.538-.001-1.753.117-4.544 2.129-4.544zm-60.673 5.254v.604c0 1.092.04 2.01-.497 2.981-.434.79-1.116 1.279-1.881 1.279-1.045 0-1.668-.849-1.668-2.06-.001-2.387 2.074-2.804 4.046-2.804zm35.786 0v.604c0 1.092.04 2.01-.496 2.981-.435.79-1.112 1.279-1.882 1.279-1.047 0-1.669-.849-1.669-2.06 0-2.387 2.073-2.804 4.047-2.804z"></path><path d="M99.59 73.656v2.06h1.386v-2.06h-1.386zm-40.152.356v14.662h1.278v-1.314c.272.521.582.91.958 1.171.376.262.806.391 1.277.391.939 0 1.75-.479 2.45-1.455.701-.977 1.065-2.392 1.065-4.189 0-1.178-.151-2.154-.462-2.981-.311-.826-.725-1.441-1.242-1.847-.519-.406-1.107-.639-1.739-.639-.452 0-.874.118-1.244.354-.368.236-.666.622-.958 1.101v-5.254h-1.383zm13.135 3.443c-.962 0-1.728.285-2.271.852s-.815 1.296-.815 2.202c0 .525.115.972.318 1.384.202.413.49.748.852.994.364.246 1.09.57 2.166.923.745.24 1.19.444 1.385.604.281.233.427.538.427.959 0 .486-.17.892-.498 1.207-.328.317-.786.461-1.385.461-.6 0-1.094-.168-1.455-.532-.362-.364-.557-.918-.64-1.668l-1.384.283c.313 2.278 1.449 3.41 3.408 3.408 1.045 0 1.844-.295 2.449-.923.604-.628.924-1.471.924-2.485 0-.548-.098-1.022-.284-1.419-.188-.397-.445-.693-.782-.924-.336-.229-1.089-.536-2.236-.923-.834-.292-1.321-.506-1.49-.64-.284-.224-.427-.53-.427-.922 0-.4.133-.739.427-.995.294-.255.747-.39 1.349-.39 1.058 0 1.65.581 1.774 1.739l1.35-.213c-.094-.732-.253-1.312-.496-1.705-.245-.392-.605-.724-1.065-.958-.465-.232-.992-.319-1.601-.319zm8.486 0c-1.109 0-2.046.457-2.77 1.42-.723.963-1.063 2.358-1.063 4.189 0 1.764.348 3.146 1.063 4.083.718.934 1.646 1.384 2.806 1.384.921 0 1.685-.276 2.307-.852.624-.575 1.077-1.423 1.313-2.557l-1.42-.248c-.407 1.451-1.16 2.163-2.2 2.165-.664 0-1.206-.281-1.669-.887-.464-.607-.726-1.507-.78-2.698h6.105v-.497c0-1.792-.357-3.137-1.065-4.083-.709-.945-1.569-1.419-2.627-1.419zm8.414 0c-.331 0-.621.112-.888.355-.267.242-.567.744-.888 1.49v-1.633h-1.243v10.615h1.385v-5.538c0-.772.074-1.516.249-2.201.1-.394.289-.703.532-.923.244-.221.523-.32.816-.32.326 0 .65.131.994.391l.462-1.668c-.482-.386-.955-.568-1.419-.568zm16.969 0c-1.096 0-1.999.462-2.699 1.385-.696.923-1.063 2.309-1.063 4.153 0 1.831.372 3.218 1.063 4.154.693.934 1.559 1.384 2.628 1.384.884 0 1.642-.328 2.272-.994.63-.665 1.014-1.646 1.172-2.911l-1.35-.213c-.101.905-.336 1.557-.71 1.988-.373.43-.823.639-1.349.639-.67 0-1.241-.313-1.67-.958-.427-.646-.638-1.68-.638-3.124 0-1.4.227-2.41.674-3.053.448-.644 1.021-.994 1.704-.994.457 0 .847.177 1.172.531.327.356.543.918.674 1.634l1.351-.283c-.162-1.119-.521-1.962-1.102-2.521-.58-.56-1.284-.817-2.129-.817zm7.917 0c-1.11 0-2.046.457-2.77 1.42-.723.963-1.065 2.358-1.065 4.189 0 1.764.349 3.146 1.065 4.083.719.934 1.646 1.384 2.805 1.384.918 0 1.685-.276 2.308-.852.622-.575 1.075-1.423 1.314-2.557l-1.42-.248c-.41 1.451-1.128 2.163-2.166 2.165-.664 0-1.241-.281-1.704-.887-.463-.607-.725-1.507-.781-2.698h6.106v-.497c0-1.792-.357-3.137-1.065-4.083-.706-.945-1.568-1.419-2.627-1.419zm8.202 0c-.966 0-1.729.285-2.272.852-.545.566-.817 1.296-.817 2.202 0 .525.082.972.284 1.384.2.413.489.748.853.994.361.246 1.09.57 2.166.923.743.24 1.226.444 1.42.604.281.233.426.538.426.959 0 .486-.168.892-.497 1.207-.326.317-.785.461-1.384.461-.602 0-1.094-.168-1.456-.532-.361-.364-.595-.918-.675-1.668l-1.384.283c.313 2.278 1.446 3.41 3.407 3.408 1.047 0 1.881-.295 2.485-.923s.922-1.471.922-2.485c0-.548-.096-1.022-.282-1.419-.188-.397-.479-.693-.817-.924-.336-.229-1.054-.536-2.2-.923-.835-.292-1.357-.506-1.527-.64-.283-.224-.426-.53-.426-.922 0-.4.167-.739.462-.995.294-.255.75-.39 1.35-.39 1.058 0 1.649.581 1.774 1.739l1.349-.213c-.094-.732-.252-1.312-.497-1.705-.244-.392-.605-.724-1.064-.958-.463-.232-.994-.319-1.6-.319zm-31.668.213l3.09 10.615h1.313l3.089-10.615h-1.42l-1.811 6.497c-.219.785-.413 1.464-.533 2.023-.15-.705-.296-1.446-.496-2.166l-1.775-6.354h-1.457zm8.697 0v10.615h1.386v-10.615h-1.386zm-45.513.143c-1.098 0-1.981.492-2.697 1.455-.717.963-1.102 2.358-1.102 4.189 0 1.765.355 3.113 1.065 4.047.709.935 1.657 1.42 2.806 1.42.911 0 1.655-.312 2.271-.888.616-.575 1.042-1.423 1.279-2.556l-1.385-.213c-.404 1.451-1.136 2.163-2.165 2.165-.659 0-1.21-.281-1.669-.888-.46-.606-.727-1.506-.781-2.697h6.035l.036-.497c0-1.792-.364-3.172-1.065-4.119-.701-.945-1.581-1.418-2.628-1.418zm-15.584.248l2.485 10.615h1.455l1.634-8.165.284 1.81 1.313 6.355h1.42l2.521-10.615h-1.313l-1.386 6.141-.462 2.06-.426-2.06-1.207-6.142h-1.42l-1.278 6.213-.426 2.201-.496-2.272-1.279-6.142h-1.419zm42.53.852c.69 0 1.258.333 1.704.994.306.452.506 1.14.567 2.059h-4.58c.044-.932.307-1.65.747-2.201.44-.55.943-.852 1.562-.852zm33.3 0c.688 0 1.258.333 1.704.994.308.452.506 1.14.569 2.059h-4.581c.044-.932.308-1.65.746-2.201.437-.55.943-.852 1.562-.852zm-60.246.39c.682 0 1.23.334 1.67.995.304.452.505 1.14.567 2.059h-4.51c.043-.932.275-1.687.711-2.236.434-.552.948-.818 1.562-.818zm8.805 0c.615 0 1.14.342 1.563.995.423.652.604 1.659.604 3.053 0 1.357-.2 2.37-.64 3.053-.439.684-.96 1.029-1.526 1.029-.416 0-.794-.14-1.136-.426-.344-.286-.595-.696-.782-1.242-.186-.546-.283-1.387-.283-2.485 0-1.294.231-2.263.674-2.947.443-.684.96-1.03 1.526-1.03z"></path><path fill="#F7A80D" d="M18.594 68.048l-5.29 2.271 4.899 2.095 5.681-2.095-5.29-2.271zm-7.952 2.839l-.178 10.226 7.74 3.408v-10.616l-7.562-3.018zm15.904 0l-6.994 2.663v10.012l6.994-2.84v-9.835zM34.889 39.078l-5.326 2.271 4.935 2.095 5.681-2.095-5.29-2.271zm-7.385 3.018v10.224l6.604 1.917.213-9.302-6.817-2.839zm14.769.567l-6.249 2.663v10.047l6.249-2.84v-9.87zM9.877 53.468l-5.29 2.272 4.899 2.095 5.68-2.095-5.289-2.272zm-7.951 2.841l-.178 10.224 7.739 3.408v-10.615l-7.561-3.017zm15.904 0l-6.994 2.662v10.012l6.994-2.84v-9.834zM26.918 53.091l-5.29 2.271 4.899 2.094 5.68-2.094-5.289-2.271zm-7.952 2.839l-.177 10.225 7.739 3.408v-10.615l-7.562-3.018zm15.905 0l-6.994 2.663v10.012l6.994-2.841v-9.834zM51.533 39.078l-5.289 2.271 4.899 2.095 5.681-2.095-5.291-2.271zm-7.952 2.84l-.178 10.225 7.74 3.407v-10.614l-7.562-3.018zm15.904 0l-6.994 2.663v10.011l6.994-2.84v-9.834z"></path>
                                        </svg>
                                    </div>
                                </>
                                }

                                sourceCode={"https://github.com/Ahmadooof/1dv525-examination-3-Introduction-to-web-programming"}
                                src={PDImage}
                                text="Personal web desktop"
                                // label="Nature"
                                path="https://master.d2feqvqgjgrh30.amplifyapp.com/#"
                                description="This project done with Vanilla JS and deployed on AWS Amplify"
                            />

                            <CardItem
                                svg={<>
                                    <div className="project-icons">

                                        <svg width="60" viewBox="0 0 128 128">
                                            <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"></path>
                                        </svg>
                                        <svg width="60" viewBox="0 0 128 128">
                                            <path fill="#00618A" d="M2.001 90.458h4.108v-16.223l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108v-16.196c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976-1.304.395-1.936 1.159-1.936 2.739v16.197zM33.899 77.252h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0v-10.643h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417h-12.972v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z"></path><path fill="#E48E00" d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738h-11.535c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816.237.237.315.475.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026h-11.338v2.738zM100.511 85.692c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706v-2.738h-10.784c-2.41 0-3.318-.606-3.318-2.055v-14.168h-4.108v14.195zM77.503 85.834v-9.765c0-2.48 1.742-3.985 5.186-4.46.356-.053.753-.079 1.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395c-.752 0-1.543-.105-2.414-.343-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"></path><path fill="#00618A" d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441-.9-1.735-1.786-3.631-2.585-5.458-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437-.427-.579-.854-1.341-1.149-2.011-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593c-.526-.01-.899.058-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"></path>
                                        </svg>
                                        <svg width="55" viewBox="0 0 128 128">
                                            <g><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.2h22.5v-11.3h13.5v22.5z"></path><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"></path><path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"></path><path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.6 41.5h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM62.2 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"></path><path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8h3.1z"></path><path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"></path></g>
                                        </svg>
                                        <svg width="40" viewBox="0 0 128 128">
                                            <path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
                                        </svg>
                                        <svg width="55" viewBox="0 0 128 128">
                                            <g fill="#090"><path d="M24.5 50.5c-1.5 0-2.5 1.2-2.5 2.7v14.1l-15.9-16c-.8-.8-2.2-1-3.2-.6s-1.9 1.4-1.9 2.5v20.7c0 1.5 1.5 2.7 3 2.7s3-1.2 3-2.7v-14.1l16.1 16c.5.5 1.2.8 1.9.8.3 0 .4-.1.7-.2 1-.4 1.3-1.4 1.3-2.5v-20.6c0-1.5-1-2.8-2.5-2.8zM44.2 62.3c-1.4 0-2.7 1.4-2.7 2.8s1.3 2.8 2.7 2.8l6.6.4-1.5 3.7h-8.5l-4.2-7.9 4.3-8.1h9.1l2.1 4h5.5l-3.6-7.9-.8-1.1h-15.6l-.7 1.2-5.9 10.3-.7 1.3.7 1.3 5.8 10.3.8 1.6h15.1l.7-1.7 4.3-9 1.9-4.3h-4.4l-11 .3zM65 50.5c-1.4 0-3 1.3-3 2.7v6.8h6v-6.7c0-1.5-1.6-2.8-3-2.8zM95.4 50.8c-1-.4-2.4-.2-3.1.6l-16.3 16v-14.1c0-1.5-1-2.7-2.5-2.7s-2.5 1.2-2.5 2.7v20.7c0 1.1.7 2.1 1.7 2.5.3.1.7.2 1 .2.7 0 1.6-.3 2.1-.8l16.2-16v14.1c0 1.5 1 2.7 2.5 2.7s2.5-1.2 2.5-2.7v-20.7c0-1.1-.6-2.1-1.6-2.5zM117.2 63.6l8.4-8.4c1.1-1.1 1.1-2.8 0-3.8-1.1-1.1-2.8-1.1-3.8 0l-8.4 8.4-8.4-8.4c-1.1-1.1-2.8-1.1-3.8 0-1.1 1.1-1.1 2.8 0 3.8l8.4 8.4-8.4 8.4c-1.1 1.1-1.1 2.8 0 3.8.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l8.4-8.4 8.4 8.4c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8c1.1-1.1 1.1-2.8 0-3.8l-8.4-8.4zM62 73.9c0 1.4 1.5 2.7 3 2.7 1.4 0 3-1.3 3-2.7v-11.9h-6v11.9z"></path></g>
                                        </svg>
                                    </div>
                                </>
                                }

                                sourceCode={"https://github.com/Ahmadooof/2dv513-Assignment-3-Database-Theory"}
                                src={databaseImage}
                                text="SQL Queries"
                                // label="Nature"
                                path="https://ahmadanbarje.com/angular-sql-nodejs"
                                description="Trying sql queries by dockerize Express.js api connected with mysql as Backend, and dockerize angular deployed on Nginx web server in Frontend"
                            />
                            <CardItem
                                svg={<>
                                    <div className="project-icons">
                                        <svg width="50" viewBox="0 0 128 128">
                                            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                                        </svg>

                                        <svg width="50" viewBox="0 0 128 128">
                                            <defs><path d="M54.74 128L32.9 115.32V40.55L0 59.56l.08-28.32L54.74 0v128zM59.65 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32L59.65 0z" id="tensorflow-original-a"></path></defs><path d="M61.55 128l-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="#ff6f00"></path>
                                        </svg>
                                        <svg width="60" viewBox="0 0 128 128">
                                            <g fill="#090"><path d="M24.5 50.5c-1.5 0-2.5 1.2-2.5 2.7v14.1l-15.9-16c-.8-.8-2.2-1-3.2-.6s-1.9 1.4-1.9 2.5v20.7c0 1.5 1.5 2.7 3 2.7s3-1.2 3-2.7v-14.1l16.1 16c.5.5 1.2.8 1.9.8.3 0 .4-.1.7-.2 1-.4 1.3-1.4 1.3-2.5v-20.6c0-1.5-1-2.8-2.5-2.8zM44.2 62.3c-1.4 0-2.7 1.4-2.7 2.8s1.3 2.8 2.7 2.8l6.6.4-1.5 3.7h-8.5l-4.2-7.9 4.3-8.1h9.1l2.1 4h5.5l-3.6-7.9-.8-1.1h-15.6l-.7 1.2-5.9 10.3-.7 1.3.7 1.3 5.8 10.3.8 1.6h15.1l.7-1.7 4.3-9 1.9-4.3h-4.4l-11 .3zM65 50.5c-1.4 0-3 1.3-3 2.7v6.8h6v-6.7c0-1.5-1.6-2.8-3-2.8zM95.4 50.8c-1-.4-2.4-.2-3.1.6l-16.3 16v-14.1c0-1.5-1-2.7-2.5-2.7s-2.5 1.2-2.5 2.7v20.7c0 1.1.7 2.1 1.7 2.5.3.1.7.2 1 .2.7 0 1.6-.3 2.1-.8l16.2-16v14.1c0 1.5 1 2.7 2.5 2.7s2.5-1.2 2.5-2.7v-20.7c0-1.1-.6-2.1-1.6-2.5zM117.2 63.6l8.4-8.4c1.1-1.1 1.1-2.8 0-3.8-1.1-1.1-2.8-1.1-3.8 0l-8.4 8.4-8.4-8.4c-1.1-1.1-2.8-1.1-3.8 0-1.1 1.1-1.1 2.8 0 3.8l8.4 8.4-8.4 8.4c-1.1 1.1-1.1 2.8 0 3.8.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l8.4-8.4 8.4 8.4c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8c1.1-1.1 1.1-2.8 0-3.8l-8.4-8.4zM62 73.9c0 1.4 1.5 2.7 3 2.7 1.4 0 3-1.3 3-2.7v-11.9h-6v11.9z"></path></g>
                                        </svg>
                                    </div>
                                </>
                                }
                                sourceCode={"https://github.com/Ahmadooof/Portfolio_React/tree/master/src/components/pages/projects/Music"}
                                src={emotionImage}
                                text="Reading face emotions"
                                // label="Nature"
                                path="/music-by-reading-face"
                                description="Done by using face-api js which used by tensorflow, also React used as Frontend and deployed on Nginx."
                            />
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cards
