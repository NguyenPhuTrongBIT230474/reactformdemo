import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Họ tên: ${fullName}\nGiới tính: ${gender}\nĐồng ý: ${
        agree ? " Có" : " Không"
      }`
    );
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h2> Form đơn giản</h2>

      <form onSubmit={handleSubmit}>
        {/* Họ tên */}
        <div>
          <label>Họ tên:</label>
          <br />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nhập họ tên"
          />
        </div>
        <br />

        {/* Giới tính */}
        <div>
          <label>Giới tính:</label>
          <br />
          <label>
            <input
              type="radio"
              value="Nam"
              checked={gender === "Nam"}
              onChange={(e) => setGender(e.target.value)}
            />
            Nam
          </label>{" "}
          <label>
            <input
              type="radio"
              value="Nữ"
              checked={gender === "Nữ"}
              onChange={(e) => setGender(e.target.value)}
            />
            Nữ
          </label>
        </div>
        <br />

        {/* Đồng ý */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            Tôi đồng ý điều khoản
          </label>
        </div>
        <br />

        <button type="submit">Gửi form</button>
      </form>

      {/* Hiển thị dữ liệu */}
      <div style={{ marginTop: 24 }}>
        <h3> Kết quả:</h3>
        <p>
          <strong>Họ tên:</strong> {fullName}
        </p>
        <p>
          <strong>Giới tính:</strong> {gender}
        </p>
        <p>
          <strong>Đồng ý điều khoản:</strong> {agree ? " Có" : " Không"}
        </p>
      </div>
    </div>
  );
}

export default App;
