//cuando trabajamos con protitipos, no se utiliza arrow function porque necesitamos usar
//this que hace referencia a esta variable. y las arrow function no generan un contexto this.
//option seria un objeto
//elemento seria el elemento del dom al que hace referencia este componente.
//data seria el estado local del componente.
//template seria el codigo del template html que queramos ejecutar.
const Component = (function () {
  //crear constructor del componente
  const Constructor = function (options) {
    this.elemento = options.elemento;
    this.data = options.data;
    this.template = options.template;
  };

  //agregamos los metodos al prototipo del constructor del componente.

  //render ui
  Constructor.prototype.render = function () {
    $elemento = document.querySelector(this.elemento);
    if (!$elemento) return;
    $elemento.innerHTML = this.template(this.data);
    console.log(this.data);
  };

  //actualizar el estado de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //obtener una copia inmutable del state
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
