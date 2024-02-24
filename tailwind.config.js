/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"], 
  theme: {
    extend: {
      width:{
        container: '90%',
      },
      keyframes: {
        
        wave: {
          from: {
             translateY:('+150%'),
            transform: 'rotate(0deg)',
            
          },
          to: {
             translateY:('-1500%'),
            transform: 'rotate(360deg)',
            
          },
        },
        bounceOnce: {
          '40%, 100%': {
            transform: 'translateY(0)',
          },
          '0%': {
            transform: 'translateY(-60px)',
          },
          '20%': {
            transform: 'translateY(-40px)',
          },
          '60%': {
            transform: 'translateY(-20px)',
          },
          
        },
        

        
      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'bounce-once': 'bounceOnce ease-in 1s',
        
      }
        
      
      },
  },
  
}

