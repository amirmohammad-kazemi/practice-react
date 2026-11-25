import { useState } from "react";
import fields from "../data/fields";
import "./App.css";

function App() {
  const [category, setCategory] = useState("no-category");
  const target = fields.find((ob) => ob.id === category);

  return (
    <>
      <div id="card">
        <div id="header">
          <h1 class="title">مسیر سبز - راهنمای مسیر شما</h1>
        </div>
        <div id="content">
          <div>
            <select
              value={category}
              id="select-category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="no-category">
                لطفا فیلد مورد نظر را انتخاب نمایید
              </option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Security">Security</option>
              <option value="AI">AI</option>
            </select>
          </div>

          {category !== "no-category" && (
            <div>
              <div class="selected-category-show">
                <span id="selected-roadmap-title">
                  {fields.find((ob) => ob.id === category).title}
                </span>
                <span> نقشه اختصاصی شما برای </span>
              </div>
            </div>
          )}

          {/* <!-- is-empty className --> */}
          <div id="roadmap">
            {category === "no-category" && (
              <div class="empty-list">
                <p>در ابتدا لطفا حوزه مورد نظر خود را انتخاب فرمایید</p>
              </div>
            )}

            {category !== "no-category" &&
              target.technologies.map((ob) => {
                return (
                  <article class="roadmap-item">
                    <span class="roadmap-step">{ob.step}</span>
                    <img src={ob.image} class="technology-img" alt="" />
                    <div class="roadmap-content">
                      <h1 class="technology-name">{ob.name}</h1>
                    </div>
                    <div class="img-overlay"></div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>

      <div id="background"></div>
    </>
  );
}

export default App;
