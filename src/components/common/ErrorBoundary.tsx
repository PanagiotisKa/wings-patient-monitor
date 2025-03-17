import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/otherTypes'



class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is used to update state when an error is caught
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  // This lifecycle method is used to log error information
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    // If an error occurred, render the fallback UI
    if (hasError) {
      return fallback ? (
        fallback
      ) : (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <p>{error?.toString()}</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    // Otherwise, render the children
    return children;
  }
}

export default ErrorBoundary;