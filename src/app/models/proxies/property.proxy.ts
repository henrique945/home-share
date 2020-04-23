/**
 * Interface que representa as informações sobre as propriedades recebidas da API
 */
export interface PropertyProxy {
    /**
     * A rua da propriedade
     */
    street: string;

    /**
     * O bairro da propriedade
     */
    township: string;

    /**
     * A cidade da propriedade
     */
    city: string;

    /**
     * A descrição da propriedade
     */
    description: string;

    /**
     * A qual faculdade o aluno estuda
     */
    university: string;

    /**
     * A quantidade de quartos da propriedade
     */
    rooms: number;

    /**
     * O preço de aluguel da propriedade
     */
    pricePerUser: number;

    /**
     * Diz se a propriedade está cheia
     */
    isFull: boolean;

    /**
     * O usuário associado a propriedade (dono)
     */
    userId: number;

    /**
     * A imagem do quarto a ser alugado
     */
    imageUrl: string;
}
