import './App.css';
import './AppScript.js';

function App() {
  return <>
   <div className="nav-toggle" id="nav-toggle">
        <i className="uil uil-bars"></i>
    </div>

    <aside className="sidebar" id="sidebar">
        <nav className="nav">
            <div className="nav-logo">
                <a href="#" className="nav-logo-text">M</a>
            </div>

            <div className="nav-menu">
                <div className="menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className="nav-link">Skills</a>
                        </li>

                        <li className="nav-item">
                            <a href="#work" className="nav-link">Work</a>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="btn-share">
                <i className="uil uil-share-alt social-share"></i>
            </div>

            <div className="nav-close" id="nav-close">
                <i className="uil uil-times"></i>
            </div>
        </nav>
    </aside>
    <main className="main">
        <section className="home" id="home">
            <div className="home-container container grid">
                <div className="home-social">
                    <span className="home-social-follow">Follow Me</span>
                    <div className="home-social-links">
                        <a href="https://www.facebook.com" target="_blank" className="home-social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com" target="_blank" className="home-social-link">
                            <i className="uil uil-instagram"></i>
                        </a>

                        <a href="https://www.x.com" target="_blank" className="home-social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>

                <img src="https://i.postimg.cc/3NgvPcZD/home-img.png" alt="" className="home-img" />

            <div className="home-data">
                <h1 className="home-title">Hi, I'm Guddi</h1>
                <h3 className="home-subtitle">Full-Stack Developer</h3>
                <p className="home-description">I have high level experience in web design, backend development knowledge and producing quality work</p>
                <a href="#about" className="button">
                    <i className="uil uil-user button-icon"></i>
                    More About me!
                </a>
            </div>

            <div className="my-info">
                <div className="info-item">
                    <i className="uil uil-facebook-messenger info-icon"></i>

                    <div>
                        <h3 className="info-title">Messenger</h3>
                        <span className="info-subtitle">user.fb123</span>
                    </div>
                </div>

                <div className="info-item">
                    <i className="uil uil-whatsapp info-icon"></i>

                    <div>
                        <h3 className="info-title">Whatsapp</h3>
                        <span className="info-subtitle">999-888-777</span>
                    </div>
                </div>

                <div className="info-item">
                    <i className="uil uil-envelope-edit info-icon"></i>

                    <div>
                        <h3 className="info-title">Email</h3>
                        <span className="info-subtitle">guddiyadav991@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>

            
        </section>

        <section className="about section" id="about">
            <h2 className="section-title" data-heading="My Intro">About me</h2>

            <div className="about-container container grid">
                <img src="https://i.postimg.cc/W1YZxTpJ/about-img.jpg" alt="" className="about-img" />

                <div className="about-data">
                    <h3 className="about-heading">Hi, I'm Guddi Yadav, based in Noida</h3>
                    <p className="about-description">I'm a full stack developer, with extensive knowledge and years of experience, working with quality work in web technologies, Backend and Frontend</p>

                    <div className="about-info">
                        <div className="about-box">
                            <i className="uil uil-award about-icon"></i>
                            <h3 className="about-title">Experience</h3>
                            <span className="about-subtitle">2.5 + Years</span>
                        </div>

                        <div className="about-box">
                            <i className="uil uil-suitcase-alt about-icon"></i>
                            <h3 className="about-title">Completed</h3>
                            <span className="about-subtitle">10 + Projects</span>
                        </div>

                        <div className="about-box">
                            <i className="uil uil-headphones-alt about-icon"></i>
                            <h3 className="about-title">Support</h3>
                            <span className="about-subtitle">Online 24/7</span>
                        </div>
                    </div>

                    <a href="#contact" className="button"><i className="uil uil-navigator button-icon"></i>Contact me</a>
                </div>
            </div>
        </section>

        <section className="qualification section">
            <h2 className="section-title" data-heading="My Journey">Qualifications</h2>

            <div className="qualification-container container grid">
                <div className="education">
                    <h3 className="qualification-title"><i className="uil uil-graduation-cap"></i>Education</h3>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">University Of Engineering & Management(Jaipur)</h3>
                            <p className="timeline-text">B.Tech in Computer Science Engineering</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>2019 - 2023</span>
                        </div>

                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">Manish Sr. Sec. School (Jaipur)</h3>
                            <p className="timeline-text">12th in Math, Chemistry, Physics</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>2019</span>
                        </div>

                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">Manish Sr. Sec. School (Jaipur)</h3>
                            <p className="timeline-text">10th</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>2017</span>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <h3 className="qualification-title"><i className="uil uil-suitcase"></i>Experience</h3>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">RTF Insurance Brokers Pvt Lmd (Noida, U.P.)</h3>
                            <p className="timeline-text">Full-Stack Developer</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>June 2024 - Present</span>
                        </div>

                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">Techno Softwares (Jaipur)</h3>
                            <p className="timeline-text">Backend Developer</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>Sep 2022 -Apr 2024</span>
                        </div>

                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">Liyan IT Solution (Jaipur)</h3>
                            <p className="timeline-text">Web Developer</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>June 2022 - Aug 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="skills section" id="skills">
            <h2 className="section-title" data-heading="My Abilities">My Experience</h2>

            <div className="skills-container container grid">
                <div className="skills-tabs">
                    <div className="skills-header skills-active" data-target="#frontend">
                        <i className="uil uil-brackets-curly skills-icon"></i>

                        <div>
                            <h1 className="skills-title">Frontend Developer</h1>
                            <span className="skills-subtitle">More than 2.5 years</span>
                            
                        </div>

                        <i className="uil uil-angle-down skills-arrow"></i>
                    </div>

                    <div className="skills-header" data-target="#design">
                        <i className="uil uil-swatchbook skills-icon"></i>

                        <div>
                            <h1 className="skills-title">UI / UX Design</h1>
                            <span className="skills-subtitle">More than 2.5 years</span>
                            
                        </div>

                        <i className="uil uil-angle-down skills-arrow"></i>
                    </div>

                    <div className="skills-header" data-target="#backend">
                        <i className="uil uil-server-network skills-icon"></i>

                        <div>
                            <h1 className="skills-title">Backend Developer</h1>
                            <span className="skills-subtitle">More than 2.5 years</span>

                        </div>

                        <i className="uil uil-angle-down skills-arrow"></i>
                    </div>
                </div>

                <div className="skills-content">
                    <div className="skills-group skills-active" data-content id="frontend">
                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">HTML</h3>
                                    <span className="skills-number">90%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '90%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">CSS</h3>
                                    <span className="skills-number">80%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Javascript</h3>
                                    <span className="skills-number">60%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '60%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">React</h3>
                                    <span className="skills-number">85%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-group" data-content id="design">
                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Figma</h3>
                                    <span className="skills-number">90%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '90%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Sketch</h3>
                                    <span className="skills-number">80%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">PhotoShop</h3>
                                    <span className="skills-number">70%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '70%' }}></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="skills-group" data-content id="backend">
                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">PHP</h3>
                                    <span className="skills-number">80%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Python</h3>
                                    <span className="skills-number">80%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">MySQL</h3>
                                    <span className="skills-number">70%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '70%' }}></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Firebase</h3>
                                    <span className="skills-number">75%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-percentage" style={{ width: '75%' }}></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="work section" id="work">
            <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

            <div className="work-filters">
                <span className="work-item active-work" data-filter="all">All</span>
                <span className="work-item" data-filter=".web">Web</span>
                <span className="work-item" data-filter=".app">App</span>
                <span className="work-item" data-filter=".design">Design</span>
            </div>

            <div className="work-container container grid">
                <div className="work-card mix web">
                    <img src="https://i.postimg.cc/43Th5VXJ/work-1.png" alt="" className="work-img" />
                    <h3 className="work-title">Web Design</h3>
                    <span className="work-button">Demo<i className="uil uil-arrow-right work-button-icon"></i></span>

                    <div className="portfolio-item-details">
                        <h3 className="details-title">The services we provide for design</h3>
                        <p className="details-description">Two smartphones displaying a sleek, dark-themed dashboard interface</p>
                        <ul className="details-info">
                            <li>Created - <span>22 Apr 2025</span></li>
                            <li>Technologies - <span>html css</span></li>
                            <li>Role - <span>frontend</span></li>
                            <li>View - <span><a href="#">www.domain.com</a></span></li>
                        </ul>
                    </div>
                </div>

                <div className="work-card mix app">
                    <img src="https://i.postimg.cc/sXLjnC5p/work-2.png" alt="" className="work-img" />
                    <h3 className="work-title">App Design</h3>
                    <span className="work-button">Demo<i className="uil uil-arrow-right work-button-icon"></i></span>

                    <div className="portfolio-item-details">
                        <h3 className="details-title">Mobile App Lanfing Design & App Maintain</h3>
                        <p className="details-description">A stylish burger restaurant mobile app interface displayed on two smartphones</p>
                        <ul className="details-info">
                            <li>Created - <span>15 Apr 2025</span></li>
                            <li>Technologies - <span>html css</span></li>
                            <li>Role - <span>frontend</span></li>
                            <li>View - <span><a href="#">www.domain.com</a></span></li>
                        </ul>
                    </div>
                </div>

                <div className="work-card mix design">
                    <img src="https://i.postimg.cc/QNB1jXYZ/work-3.png" alt="" className="work-img" />
                    <h3 className="work-title">Brand Design</h3>
                    <span className="work-button">Demo<i className="uil uil-arrow-right work-button-icon"></i></span>

                    <div className="portfolio-item-details">
                        <h3 className="details-title">Logo Design Creativity & Application</h3>
                        <p className="details-description">Three smartphone screens displaying a beautifully designed travel booking application interface</p>
                        <ul className="details-info">
                            <li>Created - <span>10 Apr 2025</span></li>
                            <li>Technologies - <span>html css</span></li>
                            <li>Role - <span>frontend</span></li>
                            <li>View - <span><a href="#">www.domain.com</a></span></li>
                        </ul>
                    </div>
                </div>

                <div className="work-card mix app">
                    <img src="https://i.postimg.cc/s2DGqyG8/work-4.png" alt="" className="work-img" />
                    <h3 className="work-title">App Design</h3>
                    <span className="work-button">Demo<i className="uil uil-arrow-right work-button-icon"></i></span>

                    <div className="portfolio-item-details">
                        <h3 className="details-title">Mobile App Landing Design & Services</h3>
                        <p className="details-description">Modern workout website interface design featuring a bold and energetic visual layout</p>
                        <ul className="details-info">
                            <li>Created - <span>4 Apr 2025</span></li>
                            <li>Technologies - <span>html css</span></li>
                            <li>Role - <span>frontend</span></li>
                            <li>View - <span><a href="#">www.domain.com</a></span></li>
                        </ul>
                    </div>
                </div>

                <div className="work-card mix web">
                    <img src="https://i.postimg.cc/TYVyPhrF/work-5.png" alt="" className="work-img" />
                    <h3 className="work-title">Brand Design</h3>
                    <span className="work-button">Demo<i className="uil uil-arrow-right work-button-icon"></i></span>

                    <div className="portfolio-item-details">
                        <h3 className="details-title">Design for Technology & Services</h3>
                        <p className="details-description">An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases</p>
                        <ul className="details-info">
                            <li>Created - <span>28 Mar 2025</span></li>
                            <li>Technologies - <span>html css</span></li>
                            <li>Role - <span>frontend</span></li>
                            <li>View - <span><a href="#">www.domain.com</a></span></li>
                        </ul>
                    </div>
                </div>

                <div className="work-card mix design">
                    <img src="https://i.postimg.cc/wMdqKcbv/work-6.png" alt="" className="work-img" />
                    <h3 className="work-title">Web Design</h3>
                    <span className="work-button">Demo<i className="uil uil-arrow-right work-button-icon"></i></span>

                    <div className="portfolio-item-details">
                        <h3 className="details-title">App for Technology & Services</h3>
                        <p className="details-description">An app design that is clean and modern, making food browsing and ordering easy</p>
                        <ul className="details-info">
                            <li>Created - <span>20 Mar 2025</span></li>
                            <li>Technologies - <span>html css</span></li>
                            <li>Role - <span>frontend</span></li>
                            <li>View - <span><a href="#">www.domain.com</a></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="portfolio-popup">
            <div className="portfolio-popup-inner">
                <div className="portfolio-popup-content grid">
                    <span className="portfolio-popup-close"><i className="uil uil-times"></i></span>
                    <div className="pp-thumbnail">
                        <img src="https://i.postimg.cc/sXLjnC5p/work-2.png" alt="" className="portfolio-popup-img" />
                    </div>

                    <div className="portfolio-popup-info">
                        <div className="portfolio-popup-subtitle">Featured - <span>Design</span></div>
                        <div className="portfolio-popup-body">
                            <h3 className="details-title">App for Technology & Services</h3>
                            <p className="details-description">A stylish burger restaurant mobile app interface displayed on two smartphones</p>

                            <ul className="details-info">
                                <li>Created - <span>15 Apr 2025</span></li>
                                <li>Technologies - <span>html css</span></li>
                                <li>Role - <span>frontend</span></li>
                                <li>View - <span><a href="#">www.domain.com</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="services section" id="services">
            <h2 className="section-title" data-heading="Services">What I Offer</h2>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services-title">Web <br/> Designer</h3>
                    </div>

                    <span className="services-button">
                        View More <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className="services-modal">
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Web Designer</h3>
                            <p className="services-modal-description">I offer services with more than 3 years of experience with quality work to clients and companies</p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">User Interface Development</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Web Page Development</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Interactive UX/UI Creations</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Company Brand Positioning</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Design and Mockup of products for companies</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-arrow services-icon"></i>
                        <h3 className="services-title">UI/UX <br/> Designer</h3>
                    </div>

                    <span className="services-button">
                        View More <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className="services-modal">
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">UI/UX Designer</h3>
                            <p className="services-modal-description">I offer services with more than 5 years of experience with quality work to clients and companies</p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Usability Testing</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">User Research</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Interaction Design</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Responsive Design</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Branding & Style Guides</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Accessibility</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">A/B Testing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-edit services-icon"></i>
                        <h3 className="services-title">Branding <br/> Designer</h3>
                    </div>

                    <span className="services-button">
                        View More <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className="services-modal">
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Branding Designer</h3>
                            <p className="services-modal-description">I offer services with more than 2 years of experience with quality work to clients and companies</p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Competitive Analysis</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Accessibility Design</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Project Management</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Iteration and Refinement</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Presenting Designs</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">User Research</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Surveys & Questionnaires</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="testimonials section">
            <h2 className="section-title" data-heading="My clients say">Testimonials</h2>

            <div className="testimonials-container container swiper">
                <div className="swiper-wrapper">
                    <div className="testimonial-card swiper-slide">
                        <div className="testimonial-quote">
                            <i className='bx bxs-quote-alt-left'></i>
                        </div>
                        <p className="testimonial-description">Working with Miriam was an absolute pleasure from start to finish. They took the time to truly understand our business needs and translated them into a stunning and highly functional website</p>
                        <h3 className="testimonial-date">March 30, 2025</h3>
                        <div className="testimonial-profile">
                            <img src="https://i.postimg.cc/MTr9j4Yn/client1.jpg" alt="" className="testimonial-profile-img" />

                            <div className="testimonial-profile-data">
                                <span className="testimonial-profile-name">Chen Xiuying</span>
                                <span className="testimonail-profile-detail">Marketing Director</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card swiper-slide">
                        <div className="testimonial-quote">
                            <i className='bx bxs-quote-alt-left'></i>
                        </div>
                        <p className="testimonial-description">Miriam truly understood our business needs through her modern and sleek design, making a site incredibly user-friendly. With her help, we had a significant increase in engagement and customer sales</p>
                        <h3 className="testimonial-date">January 18, 2025</h3>
                        <div className="testimonial-profile">
                            <img src="https://i.postimg.cc/wvV7f8rB/client2.jpg" alt="" className="testimonial-profile-img" />

                            <div className="testimonial-profile-data">
                                <span className="testimonial-profile-name">Joshua Middletown</span>
                                <span className="testimonail-profile-detail">Sales Director</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card swiper-slide">
                        <div className="testimonial-quote">
                            <i className='bx bxs-quote-alt-left'></i>
                        </div>
                        <p className="testimonial-description">I was blown away by the website Miriam created for my business! Miriam crafted a incredibly user-friendly, that allows our customers to access information on any device. Since the launch, I've seen a significant increase in inquiries and bookings</p>
                        <h3 className="testimonial-date">November 29, 2024</h3>
                        <div className="testimonial-profile">
                            <img src="https://i.postimg.cc/pdP9DL0S/client3.jpg" alt="" className="testimonial-profile-img" />

                            <div className="testimonial-profile-data">
                                <span className="testimonial-profile-name">Melanie Stone</span>
                                <span className="testimonail-profile-detail">Business Owner</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            
        </section> */}

        <section className="contact section" id="contact">
            <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="uil uil-envelope-edit contact-card-icon"></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">user@gmail.com</span>
                            <span className="contact-button">Write me <i className="uil uil-arrow-right contact-button-icon"></i></span>
                        </div>

                        <div className="contact-card">
                            <i className="uil uil-whatsapp contact-card-icon"></i>
                            <h3 className="contact-card-title">Whatsapp</h3>
                            <span className="contact-card-data">999-888-777</span>
                            <span className="contact-button">Write me <i className="uil uil-arrow-right contact-button-icon"></i></span>
                        </div>

                        <div className="contact-card">
                            <i className="uil uil-facebook-messenger contact-card-icon"></i>
                            <h3 className="contact-card-title">Messenger</h3>
                            <span className="contact-card-data">user.fb123</span>
                            <span className="contact-button">Write me <i className="uil uil-arrow-right contact-button-icon"></i></span>
                        </div>
                    </div>
                </div>

                <div className="contact-content">
                    <form action="" className="contact-form">
                        <div className="input-container">
                            <input type="text" className="input" />
                            <label for="">Username</label>
                            <span>Username</span>
                        </div>
    
                        <div className="input-container">
                            <input type="email" className="input" />
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>
    
                        <div className="input-container">
                            <input type="tel" className="input" />
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>
    
                        <div className="input-container textarea">
                            <textarea name="" id="" className="input"></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>
    
                        <button type="submit" className="button"><i className="uil uil-navigator button-icon"></i>Send Message</button>
                    </form>
                </div>
            </div>

        </section>

        <footer className="footer">
            <div className="footer-bg">
                <div className="footer-container container grid">
                    <div>
                        <h1 className="footer-title">Mariam</h1>
                        <span className="footer-subtitle">Frontend Developer</span>
                    </div>

                    <ul className="footer-links">
                        <li>
                            <a href="#services" className="footer-links">Services</a>
                        </li>
                        <li>
                            <a href="#work" className="footer-links">Work</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer-links">Contact</a>
                        </li>
                    </ul>

                    <div className="footer-socials">
                        <a href="https://www.facebook.com" target="_blank" className="footer-social">
                            <i className="uil uil-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com" target="_blank" className="footer-social">
                            <i className="uil uil-instagram"></i>
                        </a>

                        <a href="https://www.x.com" target="_blank" className="footer-social">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>

                <p className="footer-copy">&#169; <a href="https://codepen.io/leonam-silva-de-souza">ULTRA CODE</a>. All rights reserved</p>
            </div>
        </footer>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  </>
}


export default App;
