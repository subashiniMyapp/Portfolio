/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding :{
        '250px': "250px",
        '350px' : "390px",
        '200px' : "200px",
        '100': '100px',
        '50':'50px',
        '15' : '15px'
      },
      fontSize:{
        'new':'2.2em'
      },
      borderRadius:{
        'need' : '20px'
      },
      colors:{
        'white': '#ffffff',
        'text-color' : '#666',
        'text-yellow' : '#FFAD01',
        'text-block' : '#000',
        'background' : '#28023d',
        'footer' :'#28023D',
        'footercolor':'#777'
      },
      width:{
        '50':'50px'
      },
      height:{
        '10':'10px',
        'full-h':'1245.56px'
      },
      letterSpacing:{
        '1' : '1px'
      },
      margin :{
        '60' : '60px',
        '10' : '10px',
        '-3.5':'-3.25rem',
        
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      Poppins: "Poppins",
    },
    colors:{
      yellow :'#FFAD01',
      alltext : '#fff',
      socialicon : '#887392',
      textcolor : '#999'
    },
    zIndex: {
      '100': '100',
      '1':"1",
    },
   
  },
  plugins: [],
}

