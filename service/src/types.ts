// 定义 Fetch 函数类型  
import type { FetchFn } from 'chatgpt';  
  
// 请求属性接口  
export interface RequestProps {  
  /** 提示文本 */  
  prompt: string;  
  /** 聊天上下文，可选 */  
  options?: ChatContext;  
  /** 系统消息 */  
  systemMessage: string;  
  /** 温度参数，可选 */  
  temperature?: number;  
  /** top_p 参数，可选 */  
  top_p?: number;  
}  
  
// 聊天上下文接口  
export interface ChatContext {  
  /** 会话ID，可选 */  
  conversationId?: string;  
  /** 父消息ID，可选 */  
  parentMessageId?: string;  
}  
  
// ChatGPT 非官方代理 API 选项接口  
export interface ChatGPTUnofficialProxyAPIOptions {  
  /** 访问令牌 */  
  accessToken: string;  
  /** API 反向代理 URL，可选 */  
  apiReverseProxyUrl?: string;  
  /** 模型名称，可选 */  
  model?: string;  
  /** 调试模式，可选 */  
  debug?: boolean;  
  /** 自定义请求头，可选 */  
  headers?: Record<string, string>;  
  /** Fetch 函数，可选 */  
  fetch?: FetchFn;  
}  
  
// 模型配置接口  
export interface ModelConfig {  
  /** API 模型名称，可选 */  
  apiModel?: ApiModel;  
  /** 反向代理地址，可选 */  
  reverseProxy?: string;  
  /** 超时时间（毫秒），可选 */  
  timeoutMs?: number;  
  /** SOCKS 代理地址，可选 */  
  socksProxy?: string;  
  /** HTTPS 代理地址，可选 */  
  httpsProxy?: string;  
  /** 使用说明，可选 */  
  usage?: string;  
}  
  
// 定义 API 模型枚举  
export enum ApiModel {  
  ChatGPTAPI = 'ChatGPTAPI',  
  ChatGPTUnofficialProxyAPI = 'ChatGPTUnofficialProxyAPI'  
}  
  
// 为 ApiModel 类型设置默认值，使其可以为 undefined  
export type ApiModelType = ApiModel | undefined;
