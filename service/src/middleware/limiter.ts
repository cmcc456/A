import { rateLimit } from 'express-rate-limit';  
import { isNotEmptyString } from '../utils/is';  
  
// 设置默认的请求限制次数  
const DEFAULT_MAX_REQUEST_PER_HOUR = 100;  
  
// 从环境变量中获取最大请求次数，如果未设置或无效，则使用默认值  
const MAX_REQUEST_PER_HOUR = process.env.MAX_REQUEST_PER_HOUR;  
const maxCount = isNotEmptyString(MAX_REQUEST_PER_HOUR) && !isNaN(Number(MAX_REQUEST_PER_HOUR))  
  ? parseInt(MAX_REQUEST_PER_HOUR)  
  : DEFAULT_MAX_REQUEST_PER_HOUR;  
  
const limiter = rateLimit({  
  windowMs: 60 * 60 * 1000, // 1小时内的窗口时间  
  max: maxCount,  
  statusCode: 429, // 请求过多时返回的状态码  
  message: (req, res) => { // 不需要 async，因为这里没有异步操作  
    return { status: 'Fail', message: 'Too many requests from this IP in 1 hour', data: null };  
  },  
  // 可以在这里添加headers等其他选项  
});  
  
export { limiter };