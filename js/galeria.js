'use strict';

let aObras = [
	{
		nombre: 'Buzios',
		imagen: 'imagenes/galeria/buzios-full.webp',
		descripcion: 'Oleo s/madera-espátula 61 x 80 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Camino de Cordillera',
		imagen: 'imagenes/galeria/camino-de-cordillera-full.webp',
		descripcion: '(Óleo s/madera - espátula)',
		estado: 'vendido',
	},
	{
		nombre: 'Casona de Puerto Ruiz',
		imagen: 'imagenes/galeria/casona-de-puerto-ruiz-full.webp',
		descripcion: '(Óleo con espátula s madera) 50 x 96 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Chivitos',
		imagen: 'imagenes/galeria/chivitos-full.webp',
		descripcion: '(Oleo s/ madera – Espátula) 130 x 91,5 cm. ',
		estado: 'disponible',
	},
	{
		nombre: 'Compuertas Arriba I',
		imagen: 'imagenes/galeria/compuertas-arriba-i-full.webp',
		descripcion: '(Oleo s/ madera – Espátula) 70 x 50 cm.',
		estado: 'disponible',
	},
	{
		nombre: 'Compuertas Arriba II',
		imagen: 'imagenes/galeria/compuertas-arriba-ii-full.webp',
		descripcion: '(Oleo s/ madera – Espátula) 70 x 50 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Cuna de Juanele',
		imagen: 'imagenes/galeria/cuna-de-juanele-full.webp',
		descripcion: '(Óleo s madera - espátula) 91,5 x 130  cm',
		estado: 'reservado',
	},
	{
		nombre: 'De gurí pa los mandados',
		imagen: 'imagenes/galeria/de-guri-pa-los-mandados-full.webp',
		descripcion: ' (Oleo s madera–Espátula) 101,5 x 67,5 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Don Godoy: viejo cantor, curandero, albañil...',
		imagen: 'imagenes/galeria/don-godoy-full.webp',
		descripcion: '(Óleo s tela - pincel 100 x 125 cm.',
		estado: 'reservado',
	},
	{
		nombre: 'El Gualeguay en Septiembre',
		imagen: 'imagenes/galeria/el-gualeguay-en-septiembre-full.webp',
		descripcion: '(Óleo s/madera - espátula)',
		estado: 'reservado',
	},
	{
		nombre: 'Entre Carbo y Cuchilla',
		imagen: 'imagenes/galeria/entre-carbo-y-cuchilla-full.webp',
		descripcion: '(Oleo s/madera-espátula) 91x70cm',
		estado: 'vendido',
	},
	{
		nombre: 'Homenaje a Claude Monet y sus ninfeas',
		imagen: 'imagenes/galeria/homenaje-full.webp',
		descripcion: '(Oleo s/tela-espátula) 80 x 120 cm',
		estado: 'disponible',
	},
	{
		nombre: 'Mateando',
		imagen: 'imagenes/galeria/mateando-full.webp',
		descripcion: '(Oleo s/madera – Espátula) 65 x 91,5 cm',
		estado: 'disponible',
	},
	{
		nombre: 'Otoño',
		imagen: 'imagenes/galeria/otono-full.webp',
		descripcion: '(Oleo s/madera-espátula y pincel) 60 x 91 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Pampa Linda',
		imagen: 'imagenes/galeria/pampa-linda-full.webp',
		descripcion: '(Oleo s/madera-Pincel) 120 x 90 cm. ',
		estado: 'disponible',
	},
	{
		nombre: 'Aqua',
		imagen: 'imagenes/galeria/aqua-full.webp',
		descripcion: '(Óleo s madera - técnica mixta) 62 x 50 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Árbol blanco en el centro del paisaje',
		imagen: 'imagenes/galeria/arbol-blanco-en-el-centro-del-paisaje-full.webp',
		descripcion: '(Óleo sobre madera con espátula) 45,5 x 38cm',
		estado: 'vendido',
	},
	{
		nombre: 'Capilla Histórica',
		imagen: 'imagenes/galeria/capilla-historica-full.webp',
		descripcion: '(Oleo smadera-espátula) 45.5 x 38 cm',
		estado: 'disponible',
	},
	{
		nombre: 'Alto Valle Otoñal',
		imagen: 'imagenes/galeria/alto-valle-otonal-full.webp',
		descripcion: '(Óleo s madera con espátula) 3m x 1m',
		estado: 'vendido',
	},
	{
		nombre: 'Reflejos de una noche lluviosa',
		imagen: 'imagenes/galeria/reflejos-noche-lluviosa-full.webp',
		descripcion: '(Óleo s madera con espátula) 130 x 91,5 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Patos de Chacra',
		imagen: 'imagenes/galeria/patos-de-chacra-full.webp',
		descripcion: '(Óleo s madera con espátula) 91,5 x 76,5 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Refresco',
		imagen: 'imagenes/galeria/refresco-full.webp',
		descripcion: '(Óleo s madera - espátula) 61 x 45,5 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Pastando',
		imagen: 'imagenes/galeria/pastando-full.webp',
		descripcion: '(Óleo s madera - espátula) 60 x 67 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Buenos Recuerdos',
		imagen: 'imagenes/galeria/buenos-recuerdos-full.webp',
		descripcion: '(Óleo s madera - pincel) 40 x 60 cm',
		estado: 'reservado',
	},
	{
		nombre: 'Crash',
		imagen: 'imagenes/galeria/crash-full.webp',
		descripcion: '(Óleo s tela - pincel) 49 x 60 cm',
		estado: 'reservado',
	},
	{
		nombre: 'Estelar I',
		imagen: 'imagenes/galeria/estelar-i-full.webp',
		descripcion: '(Óleo s madera - técnica mixta)',
		estado: 'vendido',
	},
	{
		nombre: 'Estelar II',
		imagen: 'imagenes/galeria/estelar-ii-full.webp',
		descripcion: '(Óleo s madera - técnica mixta)',
		estado: 'vendido',
	},
	{
		nombre: 'Estelar III',
		imagen: 'imagenes/galeria/estelar-iii-full.webp',
		descripcion: '(Óleo s madera - técnica mixta) 107 x 64 cm',
		estado: 'vendido',
	},
	{
		nombre: 'La Silla',
		imagen: 'imagenes/galeria/lasilla-full.webp',
		descripcion: '(Óleo s madera - técnica mixta) 45 x 65 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Naturaleza Viva I',
		imagen: 'imagenes/galeria/naturaleza-viva-i-full.webp',
		descripcion: '(Acrílico smadera – técnica mixta) 90 x 92 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Naturaleza Viva II',
		imagen: 'imagenes/galeria/naturaleza-viva-ii-full.webp',
		descripcion: '(Acrílico s madera – técnica mixta) 90 x 92 cm',
		estado: 'vendido',
	},
	{
		nombre: 'El Unicornio Azul...',
		imagen: 'imagenes/galeria/unicornio-azul-full.webp',
		descripcion: '(Óleo s tela - pincel) 90 x 92 cm',
		estado: 'vendido',
	},
	{
		nombre: 'Puchero…comida de Pobres, privilegio de Ricos',
		imagen: 'imagenes/galeria/puchero-full.webp',
		descripcion: '(Óleo smadera – pincel) 65 x 91 cm',
		estado: 'disponible',
	},
	{
		nombre: 'Puerto Ruiz',
		imagen: 'imagenes/galeria/puertoruiz-full.webp',
		descripcion: '(Óleo s madera con espatula) 60 x 70cm',
		estado: 'reservado',
	},
	{
		nombre: 'El Chipi',
		imagen: 'imagenes/galeria/chipi-full.webp',
		descripcion: '(Oleo s/ madera – Espátula y Pincel) 80 x 200cm',
		estado: 'reservado',
	},
	{
		nombre: '…De las Sobras!',
		imagen: 'imagenes/galeria/de-las-sobras-full.webp',
		descripcion: '(Oleo s/madera-Espátula) 130 x 91,5 cm.',
		estado: 'disponible',
	},
	{
		nombre: 'Focus',
		imagen: 'imagenes/galeria/focus-full.webp',
		descripcion: '(Óleo y gesso s madera - Espátula y pincel) 62 x 50 cm',
		estado: 'disponible',
	},
	{
		nombre: 'El Gualeguay Otoñal',
		imagen: 'imagenes/galeria/gualeguay-otonal-full.webp',
		descripcion: '(Oleo s/madera-Espátula) 91 x 65 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Puerto de Ingeniero White',
		imagen: 'imagenes/galeria/ingeniero-white-full.webp',
		descripcion: '(Oleo s/ madera-Espátula) 65 x 91 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Inspiración',
		imagen: 'imagenes/galeria/inspiracion-full.webp',
		descripcion: '(Oleo s/ madera- pincel) 60 x 80 cm.',
		estado: 'disponible',
	},
	{
		nombre: 'Junín de los Andes',
		imagen: 'imagenes/galeria/junin-de-los-andes-full.webp',
		descripcion: '(Oleo s/ madera- pincel) 65 x 91,5 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'La felicidad hecha un instante',
		imagen: 'imagenes/galeria/la-felicidad-full.webp',
		descripcion: '(Oleo s/ tela) 60 x 59 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Mar Profundo',
		imagen: 'imagenes/galeria/mar-profundo-full.webp',
		descripcion: '(Oleo acrílico y aerosol s madera - técnica mixta) 60 x 140 cm.',
		estado: 'disponible',
	},
	{
		nombre: 'La Mirada del Artista',
		imagen: 'imagenes/galeria/mirada-artista-full.webp',
		descripcion: '(Oleo y acrílico s madera - técnica mixta) 50 x 85 cm.',
		estado: 'disponible',
	},
	{
		nombre: 'El Paseo de la Siesta',
		imagen: 'imagenes/galeria/paseo-siesta-full.webp',
		descripcion: '(Oleo s/ tela) 100 x 90 cm.',
		estado: 'reservado',
	},
	{
		nombre: 'Rincón de Trabajo',
		imagen: 'imagenes/galeria/rincon-trabajo-full.webp',
		descripcion: '(Oleo s/madera - espátula) 130 x 90 cm. ',
		estado: 'disponible',
	},
	{
		nombre: 'Sombreando',
		imagen: 'imagenes/galeria/sombreando-full.webp',
		descripcion: '(Oleo s/madera–Espátula) 91 x 130 cm.',
		estado: 'disponible',
	},
	{
		nombre: 'Traful',
		imagen: 'imagenes/galeria/traful-full.webp',
		descripcion: '(Oleo s/madera – Espátula y pincel) 50 x 62 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Paseo de Otoño',
		imagen: 'imagenes/galeria/paseo-de-otono-full.webp',
		descripcion: 'Óleo Y gesso s/ madera técnica mixta 50 x 62 cm.',
		estado: 'vendido',
	},
	{
		nombre: 'Siesta Gualeya',
		imagen: 'imagenes/galeria/siesta-full.webp',
		descripcion: 'óleo s/ tela pincel 60 x 40 cm',
		estado: 'reservado',
	},
	{
		nombre: 'Reflejos de un Paseo de Otoño',
		imagen: 'imagenes/galeria/reflejos-paseo-otono-full.webp',
		descripcion: 'Óleo s/ madera con espátula 130 x 90cm',
		estado: 'vendido',
	},
	{
		nombre: 'Forma y Color',
		imagen: 'imagenes/galeria/forma-color-full.webp',
		descripcion: 'Óleo s/ madera espátula 40 x 60 cm',
		estado: 'reservado',
	},
	{
		nombre: 'Carmine',
		imagen: 'imagenes/galeria/carmine-full.webp',
		descripcion: 'Óleo s/ madera pincel 91 x 65 cm',
		estado: 'reservado',
	},
	{
		nombre: ' Descanso en los Jardines de Monet en Giverny',
		imagen: 'imagenes/galeria/descanso-full.webp',
		descripcion: 'Óleo s/ tela con espátula 80 x 120 cm',
		estado: 'reservado',
	},
];

const d = document;

let cuadros = document.querySelectorAll("article");

for (let cuadro = 0;cuadro < cuadros.length;cuadro++) {

	if (aObras[cuadro].estado == 'vendido') {
		let divvend = d.createElement('div');
		divvend.className = 'vendido';
		cuadros[cuadro].appendChild(divvend);		
	} else if(aObras[cuadro].estado == 'disponible') {
			let divdisp = d.createElement('div');
			divdisp.className = 'disponible';
			cuadros[cuadro].appendChild(divdisp);		
	} else if(aObras[cuadro].estado == 'reservado'){
		let divres = d.createElement('div');
		divres.className = 'reservado';
		cuadros[cuadro].appendChild(divres);		
	}

	cuadros[cuadro].onclick = () => {
		let div = d.createElement('div');
		div.className = 'modal';
		d.querySelector('body').appendChild(div);

		let h3 = d.createElement('h3');
		h3.innerHTML = aObras[cuadro].nombre;
		div.appendChild(h3);

		let cerrar = d.createElement('div');
		cerrar.className = "cierre"
		cerrar.innerHTML = 'CERRAR';
		cerrar.onclick = function () {
			this.parentNode.remove();
		};
		div.appendChild(cerrar);

		let figure = d.createElement('figure');
		div.appendChild(figure);

		let imagen = d.createElement('img');
		imagen.src = aObras[cuadro].imagen;
		imagen.alt = aObras[cuadro].nombre;
		figure.appendChild(imagen);

		let p = d.createElement('figcaption');
		p.innerHTML = aObras[cuadro].descripcion;
		div.appendChild(p);

	}
}

