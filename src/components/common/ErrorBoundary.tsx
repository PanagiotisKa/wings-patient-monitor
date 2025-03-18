import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/otherTypes'
import { Box, Typography } from '@mui/material';



class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Method to update state when an error is caught
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  // Method to log error information
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
        <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
          <Typography variant='h3' color={'#fc4503'}>Υπήρξε κάποιο τεχνικό πρόβλημα.</Typography>
          <p>{error?.toString()}</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {errorInfo?.componentStack}
          </details>
        </Box>
      );
    }

    // Otherwise, render the children
    return children;
  }
}

export default ErrorBoundary;