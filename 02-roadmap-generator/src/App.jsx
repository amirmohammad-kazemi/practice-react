import "./App.css";


function App() {


  return (
    <>
      <div id="card">
        <div id="header">
          <h1 class="title">مسیر سبز - راهنمای مسیر شما</h1>
        </div>
        <div id="content">
          <div>
            <select id="select-category">
              <option value="-1">لطفا فیلد مورد نظر را انتخاب نمایید</option>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JAVASCRIPT</option>
              <option value="4">REACT</option>
              <option value="5">VUE.JS</option>
              <option value="6">TYPESCRIPT</option>
            </select>
          </div>

          <div>
            <div class="selected-category-show">
              <span> نقشه اختصاصی شما برای </span>
              <span id="selected-roadmap-title"> </span>:
            </div>
          </div>

          {/* <!-- is-empty className --> */}
          <div id="roadmap">
            <div class="empty-list">
              <p>در ابتدا لطفا حوزه مورد نظر خود را انتخاب فرمایید</p>
            </div>

            <article class="roadmap-item">
              <span class="roadmap-step">1</span>
              <img
                src="./public/images/javascript.png"
                class="technology-img"
                alt=""
              />
              <div class="roadmap-content">
                <h1 class="technology-name">Next.js</h1>
              </div>
              <div class="img-overlay"></div>
            </article>
          </div>
        </div>
      </div>

      <div id="background"></div>
    </>
  );
}

export default App;
