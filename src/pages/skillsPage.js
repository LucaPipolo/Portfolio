import { useState } from "react";
import { GiRetroController, GiSittingDog, GiMusicSpell } from "react-icons/gi";
import { BiFootball, BiDrink, BiDownload } from "react-icons/bi";
import { IoCarSportSharp } from "react-icons/io5";
import * as logos from "../assets/logos";

function Skills() {
  const [coursesModal, setCoursesModal] = useState(false);

  return (
    <div className="page--container">
      <h2 className="page--title">
        import
        <span className="color--5"> &#123; skills &#125; </span>
        from
        <span className="color--4"> "/me/dev.js"</span>
        <button className="cv__btn">
          <a
            href="https://drive.google.com/uc?export=download&id=17wy2-8JjxLAvVG3lJdz1EnI83icA2W8n"
            download
          >
            CV <BiDownload className="cv__btn--icon" />
          </a>
        </button>
        <button className="map__btn">
          <a
            href="https://drive.google.com/uc?export=download&id=1UTF9q0C29OqAJfpYK5mRVfcE6HkR1yGB"
            download
          >
            MAP <BiDownload className="cv__btn--icon" />
          </a>
        </button>
      </h2>
      <button
        className="courses__modal--button"
        onClick={() => {
          setCoursesModal(true);
        }}
      >
        Education
      </button>
      {coursesModal && (
        <div
          className="courses__modal"
          onClick={() => {
            setCoursesModal(false);
          }}
        >
          <div className="course--grid">
            <div className="course">
              <h2>&lt; FreeCodeCamp /&gt;</h2>
              <h3>// by Quincy Larson</h3>
              <ul>
                <li>"Responsive Web Design Certification"</li>
                <li>
                  "JavaScript Algorithms and Data Structures Certification"
                </li>
                <li>
                  "Frontend Development Libraries Certification (sass, redux and
                  react)"
                </li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; Udemy /&gt;</h2>
              <h3>// by Jonas Schmedtmann</h3>
              <ul>
                <li>
                  "Build Responsive Real-World Websites with HTML and CSS"
                </li>
                <li>
                  "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
                </li>
                <li>
                  "The Complete JavaScript Course 2023: From Zero to Expert!"
                </li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; CodeWithMosh /&gt;</h2>
              <h3>// by Mosh Hamedani</h3>
              <ul>
                <li>"The Ultimate HTML5 & CSS3 Series"</li>
                <li>"The Ultimate JavaScript Series"</li>
                <li>"Mastering React"</li>
                <li>"The Ultimate Git Course"</li>
                <li>"The Ultimate TypeScript Course"</li>
                <li>"The Ultimate Redux Course"</li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; CodingAddict /&gt;</h2>
              <h3>// by John Smilga</h3>
              <ul>
                <li>
                  "Full React Course 2020 - Learn Fundamentals, Hooks, Context
                  API, React Router, Custom Hooks"
                </li>
                <li>"React Tutorial and Projects Course (2022)"</li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; WebDevSimplified /&gt;</h2>
              <h3>// by Kile Cook</h3>
              <ul>
                <li>"React Hooks Simplified"</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="page--content skills">
        <section className="skills__grid">
          <h3 className="skills__grid--title">Skills:</h3>
          <div className="skills__grid--icons">
            <figure>
              <img
                className="skill__logo"
                src={logos.htmlLogo}
                alt="html logo"
              />
              <h4>HTML</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={logos.cssLogo} alt="css logo" />
              <h4>CSS</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.jsLogo}
                alt="javascript logo"
              />
              <h4>Javascript</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.sassLogo}
                alt="sass logo"
              />
              <h4>Sass</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.BootstrapLogo}
                alt="bootstrap logo"
              />
              <h4>Bootstrap</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.reactLogo}
                alt="react logo"
              />
              <h4>Reactjs</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.tsLogo}
                alt="typescript logo"
              />
              <h4>Typescript</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.nodeLogo}
                alt="nodejs logo"
              />
              <h4>Nodejs</h4>
            </figure>
          </div>
          <h3 className="skills__grid--title">Tools:</h3>
          <div className="skills__grid--icons">
            <figure>
              <img
                className="skill__logo"
                src={logos.vsLogo}
                alt="visual studia code logo"
              />
              <h4>VScode</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={logos.gitLogo} alt="git logo" />
              <h4>Git</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.dockerLogo}
                alt="docker logo"
              />
              <h4>Docker</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.photoshopLogo}
                alt="photoshop logo"
              />
              <h4>Photoshop</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.AdobeLogo}
                alt="adobe logo"
              />
              <h4>Adobe</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.officeLogo}
                alt="office logo"
              />
              <h4>Office</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={logos.figmaLogo}
                alt="figma logo"
              />
              <h4>Figma</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={logos.npmLogo} alt="npm logo" />
              <h4>npm</h4>
            </figure>
          </div>
        </section>

        <section className="languages">
          <h3 className="languages--title">Languages:</h3>
          <div className="languages--content">
            <div className="languages--icon">
              <h3 className="color--6">// Native</h3>
              <figure>
                <img src={logos.PTflag} width="25px" alt="" />
                <p>pt-PT</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Fluent</h3>
              <figure>
                <img src={logos.ENflag} width="25px" alt="" />
                <p>en-US</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// OKish</h3>
              <figure>
                <img src={logos.ESflag} width="25px" alt="" />
                <p>es-ES</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Poor</h3>
              <figure>
                <img src={logos.FRflag} width="25px" alt="" />
                <p>fr-FR</p>
              </figure>
            </div>
          </div>
        </section>

        <section className="experience">
          <h3 className="experience--title">Work Experience:</h3>
          <div className="experience--content">
            <div>
              <h3 className="color--6">// 2022 (current)</h3>
              <p>Front-end Developer @ Faneca inc</p>
              <p>Freelancer </p>
            </div>
            <div>
              <h3 className="color--6">// 2016 - 2022 (7 years)</h3>
              <p>Senior Engineer @ AAP</p>
              <p>MEP Department Coordinator</p>
            </div>
            <div>
              <h3 className="color--6">// 2015 (3 months)</h3>
              <p>Curricular Internship @ CMPF</p>
              <p>Civil Engineer Intern</p>
            </div>
          </div>
        </section>

        <section className="interests">
          <h3 className="interests--title">Interest:</h3>
          <div className="interests--content">
            <figure>
              <GiRetroController className="interest__icon" />
              <h4>Gaming</h4>
            </figure>
            <figure>
              <BiFootball className="interest__icon" />
              <h4>Sports</h4>
            </figure>
            <figure>
              <IoCarSportSharp className="interest__icon" />
              <h4>Cars</h4>
            </figure>
            <figure>
              <GiSittingDog className="interest__icon" />
              <h4>Pets</h4>
            </figure>
            <figure>
              <GiMusicSpell className="interest__icon" />
              <h4>Music</h4>
            </figure>
            <figure>
              <BiDrink className="interest__icon" />
              <h4>Socials</h4>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
