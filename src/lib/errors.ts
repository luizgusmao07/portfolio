/**
 * Error handling utilities
 */

export interface AppError {
  message: string
  code?: string
  details?: unknown
}

/**
 * Creates a standardized error object
 */
export function createError(message: string, code?: string, details?: unknown): AppError {
  return {
    message,
    code,
    details,
  }
}

/**
 * Handles async operations with error catching
 */
export async function safeAsync<T>(
  operation: () => Promise<T>,
  errorMessage?: string,
): Promise<[T | null, AppError | null]> {
  try {
    const result = await operation()
    return [result, null]
  } catch (error) {
    const appError = createError(
      errorMessage || 'An unexpected error occurred',
      'ASYNC_ERROR',
      error,
    )
    return [null, appError]
  }
}

/**
 * Logs errors in development, reports in production
 */
export function logError(error: AppError | Error, context?: string): void {
  const isDevelopment = import.meta.env.DEV

  if (isDevelopment) {
    console.error(`[${context || 'Error'}]:`, error)
  } else {
    // In production, you might want to send to error reporting service
    // Example: Sentry, LogRocket, etc.
    console.error('An error occurred:', error instanceof Error ? error.message : error.message)
  }
}

/**
 * Retries an async operation with exponential backoff
 */
export async function retryAsync<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000,
): Promise<T> {
  let lastError: Error

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      if (attempt === maxRetries) {
        break
      }

      const delay = baseDelay * Math.pow(2, attempt)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }

  throw lastError!
}
