/**  
 * @type {import('tailwindcss').Config}  
 */  
module.exports = {  
  // 启用深色模式，通过添加类名来切换  
  darkMode: 'class',  
  
  // 扫描以下文件以提取 Tailwind 类名  
  content: [  
    './index.html',  
    './src/**/*.{vue,js,ts,jsx,tsx}',  
  ],  
  
  // 扩展 Tailwind 的主题设置  
  theme: {  
    extend: {  
      // 自定义动画  
      animation: {  
        blink: 'blink 1.2s infinite steps(1, start)',  
      },  
      // 自定义关键帧  
      keyframes: {  
        blink: {  
          // 背景色在动画的开始和结束时保持当前色  
          '0%, 100%': { backgroundColor: 'currentColor' },  
          // 动画中间时背景色变为透明  
          '50%': { backgroundColor: 'transparent' },  
        },  
      },  
    },  
  },  
  
  // Tailwind 插件列表（当前为空）  
  plugins: [],  
};