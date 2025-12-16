import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CategoriaService } from '../categoria/categoria.service';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    private categoriaService: CategoriaService
  ) {}

  async create(produto: Produto): Promise<Produto> {
    await this.categoriaService.findOne(produto.categoria.id);
    return await this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true
      }
    });
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true
      }
    });

    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return produto;
  }

  async findByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true
      }
    });
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    await this.findOne(id);
    if (produto.categoria) {
      await this.categoriaService.findOne(produto.categoria.id);
    }
    produto.id = id;
    return await this.produtoRepository.save(produto);
  }

  async remove(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return await this.produtoRepository.delete(id);
  }
}