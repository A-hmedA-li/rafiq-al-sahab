import { useEffect, useState } from 'react';

export default function Error({ showError, errorMessage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showError) {
      setIsVisible(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showError]);

  if (!isVisible) return null;

  return (
    <div style={styles.errorContainer}>
      <div style={styles.errorContent}>
        <span style={styles.errorIcon}>⚠️</span>
        <span style={styles.errorText}>{errorMessage}</span>
        <button
          onClick={() => setIsVisible(false)}
          style={styles.closeButton}
          aria-label="Close error"
        >
          ×
        </button>
      </div>
    </div>
  );
}


const styles = {
  errorContainer: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 1000,
    minWidth: '300px',
    maxWidth: '500px',
    backgroundColor: '#fee',
    border: '1px solid #fcc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    animation: 'slideIn 0.3s ease-out'
  },
  errorContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  errorIcon: {
    fontSize: '20px',
    flexShrink: 0,
    marginTop: '2px'
  },
  errorText: {
    color: '#c53030',
    fontSize: '14px',
    lineHeight: '1.4',
    flex: 1,
    margin: 0
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    color: '#999',
    cursor: 'pointer',
    padding: '0',
    margin: '0',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    flexShrink: 0
  }
};
