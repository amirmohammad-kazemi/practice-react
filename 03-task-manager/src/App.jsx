import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import AddTodoModal from "./components/AddTodoModal/AddTodoModal";
import { useEffect, useState } from "react";

function App() {
  const [modalStatus, setModalStatus] = useState(false);

  const [todos, setTodos] = useState([]);

  const [todoPageStatus, setTodoPageStatus] = useState("all");

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }


  }, []);

  function addTodo(task) {
    const newTask = {
      id: Date.now(),
      title: task.title,
      desc: task.desc,
      isImportant: task.isImportant,
      isComplete: false,
    };

    setTodos([...todos, newTask]);

    setTodoPageStatus("all");
    localStorage.setItem("todos", JSON.stringify([...todos, newTask]));
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      const filtered = prevTodos.filter((todo) => todo.id !== id);

      localStorage.setItem("todos", JSON.stringify(filtered));

      return filtered;
    });
  }

  function toggleTodoComplete(id) {
    setTodos((prevTodos) => {
      const updatedTodo = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      );

      localStorage.setItem("todos", JSON.stringify(updatedTodo));

      return updatedTodo;
    });
  }

  return (
    <>
      <Header />

      <main className="container pb-25">
        <div id="headline" className="space-y-3">
          <h1 className="title">
            <img src="./public/images/hourglass.png" className="size-8" />
            <span> مدیریت و برنامه ریزی </span>
          </h1>
          <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
            سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
            پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
            پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
          </p>
        </div>

        <div className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between">
          <div></div>
          <div className="flex items-center gap-2">
            <div className="dropdown">
              <input id="dd-toggle" type="checkbox" hidden />

              <label className="dd-btn" htmlFor="dd-toggle">
                <span>نمایش فقط</span>
                <i className="fa-solid fa-chevron-down"></i>
              </label>

              <div className="dropdown_menu" role="menu">
                <div className="dropdown-label">
                  <p className="text-start text-xs opacity-60">نمایش فقط</p>
                </div>
                <div className="py-1">
                  <label
                    htmlFor="dd-toggle"
                    className="menu-item"
                    onClick={() => setTodoPageStatus("all")}
                  >
                    همه
                  </label>
                  <label
                    htmlFor="dd-toggle"
                    className="menu-item"
                    onClick={() => setTodoPageStatus("complete")}
                  >
                    تکمیل شده ها
                  </label>
                  <label
                    htmlFor="dd-toggle"
                    className="menu-item"
                    onClick={() => setTodoPageStatus("waiting")}
                  >
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>

            <button
              id="open-dialog"
              onClick={() => {
                setModalStatus(true);
              }}
            >
              <span> ایجاد جدید </span>
              <div className="btn-divider"></div>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>

        <section id="tasks" className="space-y-30 mt-5">
          {todoPageStatus === "all" && (
            <>
              <div className="space-y-5">
                <p className="text-sm">تسک های موجود:</p>
                {todos
                  .filter((todo) => !todo.isComplete)
                  .map((todo) => {
                    return (
                      <Todo
                        key={todo.id}
                        title={todo.title}
                        description={todo.desc}
                        isImportant={todo.isImportant}
                        isComplete={todo.isComplete}
                        onToggleComplete={() => toggleTodoComplete(todo.id)}
                        onDeleteTodo={() => deleteTodo(todo.id)}
                      />
                    );
                  })}
              </div>
              <div className="space-y-5">
                <p className="text-sm">تسک های تکمیل شده :</p>
                {todos
                  .filter((todo) => todo.isComplete)
                  .map((todo) => {
                    return (
                      <Todo
                        key={todo.id}
                        title={todo.title}
                        description={todo.desc}
                        isImportant={todo.isImportant}
                        isComplete={todo.isComplete}
                        onToggleComplete={() => toggleTodoComplete(todo.id)}
                        onDeleteTodo={() => deleteTodo(todo.id)}
                      />
                    );
                  })}
              </div>
            </>
          )}
          {todoPageStatus === "complete" && (
            <div className="space-y-5">
              <p className="text-sm">تسک های تکمیل شده :</p>
              {todos
                .filter((todo) => todo.isComplete)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      title={todo.title}
                      description={todo.desc}
                      isImportant={todo.isImportant}
                      isComplete={todo.isComplete}
                      onToggleComplete={() => toggleTodoComplete(todo.id)}
                      onDeleteTodo={() => deleteTodo(todo.id)}
                    />
                  );
                })}
            </div>
          )}
          {todoPageStatus === "waiting" && (
            <div className="space-y-5">
              <p className="text-sm">تسک های موجود:</p>
              {todos
                .filter((todo) => !todo.isComplete)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      title={todo.title}
                      description={todo.desc}
                      isImportant={todo.isImportant}
                      isComplete={todo.isComplete}
                      onToggleComplete={() => toggleTodoComplete(todo.id)}
                      onDeleteTodo={() => deleteTodo(todo.id)}
                    />
                  );
                })}
            </div>
          )}
        </section>
      </main>

      {modalStatus && (
        <AddTodoModal onClose={setModalStatus} onAddTodo={addTodo} />
      )}

      <Footer />
    </>
  );
}

export default App;
