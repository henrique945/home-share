/**
 * Uma interface que representa as infomações enviadas para API ao logar
 */
export interface LoginPayload {
  /**
   * Email do usuário
   */
  username: string;

  /**
   * A senha do usuário
   */
  password: string;
}
