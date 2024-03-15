import { defineConfig } from 'tsup';  
  
export default defineConfig({  
  // 指定入口文件  
  entry: ['src/index.ts'],  
  // 输出目录  
  outDir: 'build',  
  // 目标 ECMAScript 版本  
  target: 'es2020',  
  // 输出格式，这里只输出 ES Modules  
  format: ['esm'],  
  // 是否启用 source map  
  sourcemap: true, // 默认是 true，可以省略  
  // 是否压缩代码，开发过程中可以设置为 false  
  minify: false,  
  // 是否生成 TypeScript 声明文件，根据需要设置  
  dts: false,  
  // 其他配置可以根据需要添加，如 shims、clean 等  
});