import React from 'react';

const LeaderLogo = () => {
    const containerStyle = {
        display: 'inline-block',
        position: 'relative',
        padding: '8px 16px',
    };

    const textStyle = {
        color: '#FF6B35',
        fontWeight: 700,
        fontSize: '4rem',
        letterSpacing: '0.02em',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
    };

    const svgContainerStyle = {
        position: 'absolute',
        bottom: '-12px',
        left: '16px',
        width: '90%',
    };

    return (
        <div style={containerStyle}>
            <h1 style={textStyle}>
                Leader
            </h1>
            <div style={svgContainerStyle}>
                <svg width="100%" height="25" viewBox="0 0 300 25" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 0 15 Q 80 5, 180 10 T 300 20"
                        stroke="#FF6B35"
                        strokeWidth="7"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default LeaderLogo;