import React from "react";
import { IoSend } from "react-icons/io5";
import { FaInfoCircle, FaCamera, FaImage, FaCog } from "react-icons/fa";
import { MdMessage, MdClose } from "react-icons/md";

export default function ParentMessage() {
    return (
        <div style={{ display: "flex", height: "100vh", color: "#ffffff" }}>
            {/* Sidebar */}
            <div
                style={{
                    backgroundColor: "#2d3748",
                    width: "250px",
                    padding: "16px",
                    borderRadius: "8px",
                    marginRight: "16px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Icons and Title */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <MdMessage style={{ marginRight: "8px" }} />
                        <span>Messages</span>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <FaCog />
                        <MdClose />
                    </div>
                </div>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search"
                    style={{
                        padding: "8px",
                        borderRadius: "8px",
                        backgroundColor: "#1a202c",
                        color: "#e2e8f0",
                        border: "none",
                        marginBottom: "16px",
                    }}
                />

                {/* Profile Box */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "12px",
                        borderRadius: "12px",
                        backgroundColor: "#3b4a5a",
                        color: "#e2e8f0",
                    }}
                >
                    <div
                        style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "#a0aec0",
                            marginRight: "8px",
                        }}
                    ></div>
                    <div>
                        <span style={{ fontWeight: "bold", display: "block" }}>Angeline B. Ba</span>
                        <p style={{ fontSize: "14px", color: "#cbd5e0", margin: 0 }}>Kindly send your school activity.</p>
                    </div>
                </div>
            </div>

            {/* Chat Window */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#1a202c",
                    padding: "16px",
                    borderRadius: "8px",
                }}
            >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                backgroundColor: "#a0aec0",
                                marginRight: "8px",
                            }}
                        ></div>
                        <span style={{ fontWeight: "bold" }}>Angeline B. Ba (1076)</span>
                    </div>
                    <button
                        style={{
                            background: "none",
                            border: "none",
                            color: "#e2e8f0",
                            cursor: "pointer",
                        }}
                    >
                        <FaInfoCircle />
                    </button>
                </div>

                {/* White Line below the Header */}
                <hr style={{ borderColor: "#ffffff", opacity: 0.5, marginBottom: "16px" }} />

                {/* Messages */}
                <div style={{ flex: 1, marginBottom: "16px" }}>
                    {/* Message from Angeline */}
                    <div>
                        <div
                            style={{
                                backgroundColor: "#2d3748",
                                padding: "12px",
                                borderRadius: "20px",
                                display: "inline-block",
                                marginBottom: "4px",
                            }}
                        >
                            <p style={{ fontSize: "14px", color: "#e2e8f0" }}>Kindly send your school activity.</p>
                        </div>
                        <div style={{ fontSize: "12px", color: "#a0aec0", marginTop: "2px" }}>4:36pm</div>
                    </div>

                    {/* Message from the user - Aligned Right */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <div
                            style={{
                                backgroundColor: "#2b6cb0",
                                padding: "12px",
                                borderRadius: "20px",
                                display: "inline-block",
                                textAlign: "right",
                                marginBottom: "4px",
                            }}
                        >
                            <p style={{ fontSize: "14px", color: "#e2e8f0" }}>Yes po ma'am, I'll send it later</p>
                        </div>
                        <div style={{ fontSize: "12px", color: "#a0aec0", marginTop: "2px" }}>10:28pm</div>
                    </div>
                </div>

                {/* Message Input */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                        style={{
                            background: "none",
                            border: "none",
                            color: "#e2e8f0",
                            cursor: "pointer",
                            marginRight: "8px",
                        }}
                    >
                        <FaCamera />
                    </button>
                    <button
                        style={{
                            background: "none",
                            border: "none",
                            color: "#e2e8f0",
                            cursor: "pointer",
                            marginRight: "8px",
                        }}
                    >
                        <FaImage />
                    </button>
                    <input
                        type="text"
                        placeholder="Message"
                        style={{
                            flex: 1,
                            padding: "8px",
                            borderRadius: "8px",
                            backgroundColor: "#2d3748",
                            color: "#e2e8f0",
                            border: "none",
                            marginRight: "8px",
                        }}
                    />
                    <button
                        style={{
                            background: "none",
                            border: "none",
                            color: "#e2e8f0",
                            cursor: "pointer",
                        }}
                    >
                        <IoSend />
                    </button>
                </div>
            </div>
        </div>
    );
}
