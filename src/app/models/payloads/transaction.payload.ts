/**
 * A interface que representa a entidade de transação
 */
export interface TransactionPayload {
  /**
   * O id da transação
   */
  id: number;

  /**
   * A mensagem da transação
   */
  message: string;

  /**
   * O id do dono da propriedade da transação
   */
  userOwnerId: number;

  /**
   * O id do usuário interessado na propriedade da transação
   */
  userRentId: number;

  /**
   * O id da propriedade da transação
   */
  propertyId: number;
}
