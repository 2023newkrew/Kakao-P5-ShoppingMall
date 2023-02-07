import React from "react";
import "./ErrorBanner.css";

export default function ErrorBanner({ message }) {
  return (
    <div className="error-banner" data-testid="error-banner">
      {message}
    </div>
  );
}
