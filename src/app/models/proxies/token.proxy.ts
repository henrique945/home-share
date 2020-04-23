/**
 * A interface que representa as informações do Token JWT enviadas pela API
 */
export interface TokenProxy {

  /**
   * O Bearer Token
   */
  token: string;

  /**
   * Diz quando esse token irá expirar
   */
  expirationDate: string;
}
