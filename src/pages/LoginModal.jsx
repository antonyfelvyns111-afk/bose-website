import { useState } from "react";
import "../styles/LoginModal.css";

export default function LoginModal() {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* Close */}
        <button className="close-btn">×</button>

        {/* Title */}
        <h2 className="title">Log In</h2>

        {/* Tabs */}
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

        {/* Input */}
        <input
          className="input"
          type={activeTab === "email" ? "email" : "tel"}
          placeholder={activeTab === "email" ? "Email ID" : "Phone Number"}
        />

        {/* OTP */}
        <button className="otp-btn">REQUEST OTP</button>

        {/* Login */}
        <button className="login-btn" disabled>
          LOG IN
        </button>

      </div>
    </div>
  );
}
