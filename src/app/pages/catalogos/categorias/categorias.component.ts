import { Component } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-categorias',
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent {
categorias: Categoria[] = [
  { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Ropa y Moda' },
    { id: 3, nombre: 'Hogar y Jardín' },
    { id: 4, nombre: 'Deportes' },
    { id: 5, nombre: 'Alimentos' }
]

 categoriasFiltradas: Categoria[] = [...this.categorias];
  searchTerm: string = '';

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();

    this.categoriasFiltradas = this.categorias.filter(cat =>
      cat.nombre.toLowerCase().includes(this.searchTerm)
    );
  }

  onCategoriaClick(categoria: Categoria): void {
    console.log('Categoría seleccionada:', categoria);
    console.log('ID de la categoría:', categoria.id);
    // Aquí puedes agregar la lógica que necesites
    // Por ejemplo, navegar a otra página:
    // this.router.navigate(['/categoria', categoria.id]);
  }

  onAgregarCategoria(): void {
    console.log('Agregar nueva categoría');
    // Lógica para agregar categoría
  }
}
