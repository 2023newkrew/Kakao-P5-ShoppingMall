import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      const ErrorType = this.props.errorType;
      if (!ErrorType || this.state.error instanceof ErrorType) {
        return this.props.fallback;
      }
      throw this.state.error;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
