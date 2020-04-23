/**
 * A interface que representa as informações enviadas para API sobre o usuário
 */
export interface UserPayload {
  /**
   * O nome do usuário
   */
  name: string;

  /**
   * O email do usuário
   */
  email: string;

  /**
   * O celular do usuário
   */
  cellphone: string;

  /**
   * O cpf do usuário
   */
  cpf: string;

  /**
   * A faculdade do usuário
   */
  university: string;

  /**
   * A senha do usuário
   */
  password: string;
}
