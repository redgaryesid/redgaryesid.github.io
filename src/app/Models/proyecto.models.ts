export interface Proyecto {
    nombre: string;
    descripcion: string;
    estado: 'activo' | 'completado' | 'en espera';
    tecnologias: string[];
    imagenUrl?: string;
    proyectoUrl?: string;
    mostrarEnPortafolio?: boolean;
}