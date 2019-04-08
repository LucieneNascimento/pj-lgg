export class Filme{
    id: string;
    nome : string;
    sinopse : string;
    data : string;
    imagem : string;

    constructor(){}

    setDados(obj:any){
        this.nome = obj.nome;
        this.sinopse = obj.sinopse;
        this.data = obj.data;
        this.imagem = obj.imagem;
    }
}