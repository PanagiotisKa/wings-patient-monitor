import { ReactNode, ErrorInfo } from 'react';

export type facilityType = {
    facility_id: number
    facility_name: string
    facility_address: string
}


export type ErrorBoundaryProps = {
  children: ReactNode; 
  fallback?: ReactNode; 
}

export type ErrorBoundaryState = {
  hasError: boolean; 
  error?: Error; 
  errorInfo?: ErrorInfo; 
}