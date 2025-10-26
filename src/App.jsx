import { useRef } from "react";

function App() {
  // 🧠 Tạo ref cho mỗi input
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // 📤 Hàm xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault(); // chặn reload

    // 🧾 Lấy giá trị thô từ DOM
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    alert(`Họ tên: ${name}\nEmail: ${email}`);
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h2>📋 Form không dùng state (Uncontrolled)</h2>

      <form onSubmit={handleSubmit}>
        {/* Input Họ tên */}
        <div>
          <label>Họ tên:</label>
          <br />
          <input type="text" ref={nameRef} placeholder="Nhập họ tên" />
        </div>
        <br />

        {/* Input Email */}
        <div>
          <label>Email:</label>
          <br />
          <input type="email" ref={emailRef} placeholder="Nhập email" />
        </div>
        <br />

        <button type="submit">Gửi form</button>
      </form>
    </div>
  );
}

export default App;
