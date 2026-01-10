import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginModal.css";

export default function LoginModal() {
  const [activeTab, setActiveTab] = useState("email");
  const navigate = useNavigate();

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* Close */}
        <button
          className="close-btn"
          onClick={() => navigate("/")}
        >
          ×
        </button>

        <h2 className="title">Log In</h2>

        <div className="tabs">
          <button
            className={`tab ${activeTab === "email" ? "active" : ""}`}
            onClick={() => setActiveTab("email")}
          >
            Email
          </button>

          <button
            className={`tab ${activeTab === "phone" ? "active" : ""}`}
            onClick={() => setActiveTab("phone")}
          >
            Phone Number
          </button>
        </div>

        <input
          className="input"
          type={activeTab === "email" ? "email" : "tel"}
          placeholder={activeTab === "email" ? "Email ID" : "Phone Number"}
        />

        <button className="otp-btn">REQUEST OTP</button>

        <button className="login-btn" disabled>
          LOG IN
        </button>

      </div>
    </div>
  );
}