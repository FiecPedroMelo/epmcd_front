import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        '0D9488': '#0D9488',

        '248EE3': '#248EE3',

        '1A34C7' : '#1A34C7',

        '1A69C6': '#1A69C6',

        '008C83': '#008C83',

        '023535': '#023535',

        '015958': '#015958',

        '008F8C': '#008F8C',

        '7CF5D4': '#7CF5D4'
      },
      borderColor: {
        '008C83': '#008C83',

        '023535': '#023535',

        '015958': '#015958',

        '008F8C': '#008F8C',

        '0D9488': '#0D9488',
      },
      textColor: {
        '0D9488': '#0D9488',

        '023535': '#023535',

        '015958': '#015958',

        '008C83': '#008C83',

        '008F8C': '#008F8C',

        '0C5E58': '#0C5E58',
      },
      fontFamily: {
        custom: ['SofiaSans', 'sans-serif'],
        custom2: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config
