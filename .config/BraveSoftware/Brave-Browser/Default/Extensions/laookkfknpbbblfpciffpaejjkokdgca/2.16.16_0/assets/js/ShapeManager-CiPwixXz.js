const e=new Map;class t{constructor(e){this._engine=e}addShapeGenerator(t,r){this.getShapeGenerator(t)||e.set(t,r)}getShapeGenerator(t){return e.get(t)}getSupportedShapeGenerators(){return e.keys()}}export{t as ShapeManager};