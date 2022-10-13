import { Ingredientes } from './ingredientes.model';

export class ReceitaDetalhada {
    name : string
    category: string
    user: string
    ingredients : Ingredientes[] 
    preparationMode : string
}