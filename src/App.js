import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

// Learning System
import AddLeariningPost from "./Pages/LearningSystem/AddLeariningPost";
import AllLearningPost from "./Pages/LearningSystem/AllLearningPost";
import UpdateLearningPost from "./Pages/LearningSystem/UpdateLearningPost";

// User Management
import UserLogin from "./Pages/UserManagement/UserLogin";
import UserRegister from "./Pages/UserManagement/UserRegister";
import UpdateUserProfile from "./Pages/UserManagement/UpdateUserProfile";

// Learning Progress
import AddLearningProgress from "./Pages/LearningProgress/AddLearningProgress";
import AllLearningProgress from "./Pages/LearningProgress/AllLearningProgress";
import UpdateLearningProgress from "./Pages/LearningProgress/UpdateLearningProgress";

// Notification Management
import NotificationsPage from "./Pages/NotificationManagement/NotificationsPage";

function ProtectedRoute({ children }) {
  const userID = localStorage.getItem("userID");
  if (!userID) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/oauth2/success") {
      const params = new URLSearchParams(window.location.search);
      const userID = params.get("userID");
      const name = params.get("name");

      if (userID && name) {
        localStorage.setItem("userID", userID);
        alert(`Login successful! Welcome, ${name}`);
        localStorage.setItem("userType", "google");
        navigate("/learningSystem/allLearningPost");
      } else {
        alert("Login failed. Missing user information.");
      }
    }
  }, [navigate]);

  return (
    <div>
      <React.Fragment>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />

          {/* Protected Routes */}
          <Route
            path="/learningSystem/addLeariningPost"
            element={
              <ProtectedRoute>
                <AddLeariningPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learningSystem/allLearningPost"
            element={
              <ProtectedRoute>
                <AllLearningPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learningSystem/updateLearningPost/:id"
            element={
              <ProtectedRoute>
                <UpdateLearningPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateUserProfile/:id"
            element={
              <ProtectedRoute>
                <UpdateUserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addLearningProgress"
            element={
              <ProtectedRoute>
                <AddLearningProgress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/allLearningProgress"
            element={
              <ProtectedRoute>
                <AllLearningProgress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateLearningProgress/:id"
            element={
              <ProtectedRoute>
                <UpdateLearningProgress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <NotificationsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
