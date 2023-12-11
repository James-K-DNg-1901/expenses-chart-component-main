/** @type {import('tailwindcss').Config} */
export const content = ["./public/**/*.{html,js}"];
export const theme = {
  extend: {
    spacing: {
      'body': '100vh',
      '82': '22rem',
      '18': '5rem',
      '21': '5.45rem',
      '33': '8.35rem',
    }
  },
  fontFamily: {
    sans: ['DM Sans','sans-serif' ]
  },
  colors: {
    //primary
    Soft_red: 'hsl(10, 79%, 65%)',
    Soft_red_fated: 'hsl(10, 79%, 65%, 0.6)',
    Cyan: 'hsl(186, 34%, 60%)',
    Cyan_fated: 'hsl(186, 34%, 60%, 0.6)',
    //Neutral
    Dark_brown: 'hsl(25, 47%, 15%)',
    Medium_brown: 'hsl(28, 10%, 53%)',
    Cream: 'hsl(27, 66%, 92%)',
    Very_pale_orange: 'hsl(33, 100%, 98%)'
  }
};
export const plugins = [];

