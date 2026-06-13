import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { Container, Card } from "react-bootstrap";
import axios from "axios";

const ChatScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [projectId, setProjectId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectId = async () => {
      try {
        const { data } = await axios.get("/api/config/chatengine");
        setProjectId(data.projectId);
      } catch (error) {
        console.error("Error fetching Chat Engine config:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectId();
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p>Loading Chat Configuration...</p>
      </Container>
    );
  }

  if (!projectId) {
    return (
      <Container className="py-5 text-center text-danger">
        <p>Could not load Chat room. Please contact administrator.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-slate-900" style={{ color: "var(--slate-800)" }}>Live Consultation Chat</h2>
        <p className="text-muted">Chat directly with our administrative staff and healthcare experts.</p>
      </div>
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ height: "75vh" }}>
        <PrettyChatWindow
          projectId={projectId}
          username={userInfo.name}
          secret={userInfo.secret}
          style={{ height: "100%" }}
        />
      </Card>
    </Container>
  );
};

export default ChatScreen;
