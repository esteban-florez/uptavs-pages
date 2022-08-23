const pagoMovilTemplate = `<h3>Pago Móvil</h3>
<h5>Datos: </h5>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between">
    <span>Teléfono: </span>
    <span class="font-weight-bold text-break">04XX-XXX-XXXX</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Banco: </span>
    <span class="font-weight-bold text-break">Bancoejemplo</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Cédula: </span>
    <span class="font-weight-bold text-break">V-12.345.678</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Monto: </span>
    <span class="font-weight-bold text-break">145,00 Bs.D.</span>
  </li>
</ul>
<div class="alert alert-info mt-3">
  <i class="fas fa-info-circle fa-lg mr-2"></i>
  <p class="font-weight-normal d-inline">Luego de realizar el pago móvil, introduzca el número de referencia.</p>
</div>
<form>
  <label for="refPagoInput">Referencia</label>
  <input class="form-control" type="number" placeholder="Ingrese la referencia..." id="refPagoInput">
  <div class="d-flex justify-content-between align-items-center mt-3">
    <div>
      <button type="button" class="btn btn-secondary" data-stepper="previous">Volver</button>
      <button type="button" class="btn btn-info" data-stepper="next" id="pagoMovilNextButton">Confirmar</button>
    </div>
    <button type="button" class="btn btn-danger" data-stepper="reset">Cancelar</button>
  </div>
</form>`;

const transferenciaTemplate = `<h3>Transferencia</h3>
<h5>Datos: </h5>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between">
    <span>Nombre: </span>
    <span class="font-weight-bold text-break">Edeblangel Vanegas</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Banco: </span>
    <span class="font-weight-bold text-break">Bancoejemplo</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Cédula: </span>
    <span class="font-weight-bold text-break">V-12.345.678</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Nro. de cuenta: </span>
    <span class="font-weight-bold text-break">15489623578451963258</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Tipo de cuenta: </span>
    <span class="font-weight-bold text-break">Corriente</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Monto: </span>
    <span class="font-weight-bold text-break">145,00 Bs.D.</span>
  </li>
</ul>
<div class="alert alert-info mt-3">
  <i class="fas fa-info-circle fa-lg mr-2"></i>
  <p class="font-weight-normal d-inline">Luego de realizar la transferencia, introduzca el número de referencia.</p>
</div>
<form>
  <label for="refTransferInput">Referencia</label>
  <input class="form-control" type="number" placeholder="Ingrese la referencia..." id="refTransferInput">
  <div class="d-flex justify-content-between align-items-center mt-3">
    <div>
      <button type="button" class="btn btn-secondary" data-stepper="previous">Volver</button>
      <button type="button" class="btn btn-info" data-stepper="next" id="transferenciaNextButton">Confirmar</button>
    </div>
    <button type="button" class="btn btn-danger" data-stepper="reset">Cancelar</button>
  </div>
</form>`;

const bolivaresTemplate = `<h3>Pago en Efectivo (Bs.D.)</h3>
<h5>
  Monto: 
  <span class="text-success">145,00 Bs.D.</span>
</h5>
<p>¿Desea confirmar su pago?</p>
<div class="d-flex justify-content-between">
  <div>
    <button type="button" class="btn btn-secondary" data-stepper="previous">Volver</button>
    <button type="button" class="btn btn-info" data-stepper="next">Confirmar</button>
  </div>
  <button type="button" class="btn btn-danger" data-stepper="reset">Cancelar</button>
</div>`;

const dolaresTemplate = `<h3>Pago en Efectivo ($)</h3>
<h5>
  Monto: 
  <span class="text-success">$45</span>
</h5>
<p>¿Desea confirmar su pago?</p>
<div class="d-flex justify-content-between">
  <div>
    <button type="button" class="btn btn-secondary" data-stepper="previous">Volver</button>
    <button type="button" class="btn btn-info" data-stepper="next">Confirmar</button>
  </div>
  <button type="button" class="btn btn-danger" data-stepper="reset">Cancelar</button>
</div>`;

const onlineTemplate = `<h3>Inscripción finalizada</h3>
<div class="alert alert-success mt-3">
  <i class="fas fa-info-circle fa-lg mr-2"></i>
  <p class="font-weight-normal d-inline">Su inscripción ha sido registrada con éxito. El administrador verificará su pago en los próximos días.</p>
</div>
<a class="text-primary" href="pagos-user.html" type="button">Ir a mis pagos</a>`;

const cashTemplate = `<h3>Inscripción finalizada</h3>
<div class="alert alert-success mt-3">
  <i class="fas fa-info-circle fa-lg mr-2"></i>
  <p class="font-weight-normal d-inline">Su inscripción ha sido registrada con éxito. Diríjase a la sede de la UPTA en La Victoria para consignar su pago y confirmar su inscripción.</p>
</div>
<a class="text-primary" href="pagos-user.html" type="button">Ir a mis pagos</a>`;

export { cashTemplate, bolivaresTemplate, pagoMovilTemplate, transferenciaTemplate, onlineTemplate, dolaresTemplate };