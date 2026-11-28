import { useEffect , useState } from "react";
import "./AddTodoModal.css";

function AddTodoModal({ onClose, onAddTodo }) {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  const [isImportant, setIsImportant] = useState(false);

  const [error, setError] = useState(true);

  useEffect(() => {
    if (title.length > 5) {
      setError(false);
    } else {
      setError(true);
    }
  }, [title]);

  return (
    <div id="modal-screen">
      <div className="modal-content">
        <header className="modal-header">
          <span className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!">
            ایجاد برنامه جدید
          </span>
          <div className="btns *:size-3.5 *:cursor-pointer *:rounded-full">
            <button id="modal-close-button" onClick={() => onClose()}></button>
          </div>
        </header>
        <main className="my-5 space-y-3">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="عنوان تسک را وارد نمائید ..."
            className="input-element title-input"
          />
          {error && <p style={{color:"red" , fontSize:"12px"}}>نام کاربری کوتاه است </p>}
          <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="input-element description-input"
            placeholder="توضیحات تسک را وارد نمائید ..."
            name="description"
          ></textarea>
          <div className="my-3 flex items-center gap-2">
            <input
              id="is-important"
              type="checkbox"
              checked={isImportant}
              onChange={(event) => setIsImportant(event.target.checked)}
            />
            <label htmlFor="is-important"> مهم </label>
          </div>
          <div className="info-message">
            <p className="inline-flex! items-center gap-1">
              <img
                src="./public/images/check.png"
                alt="Checked"
                className="size-4"
              />
              <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
            </p>
          </div>
        </main>
        <footer className="mt-5 flex items-center justify-end text-sm pb-3">
          <button
            id="create-button"
            onClick={() => {
              onAddTodo({ title, desc, isImportant });
              onClose();
            }}
          >
            ایجاد کنید
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AddTodoModal;
