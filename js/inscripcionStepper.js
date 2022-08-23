import { pagoMovilTemplate,transferenciaTemplate, bolivaresTemplate, dolaresTemplate, onlineTemplate, cashTemplate } from './stepperTemplates.js';

let stepper;
const modeChecks = document.querySelectorAll('input[name="modo-pago"]');
let typeChecks = document.querySelectorAll('input[name="tipo-pago"]');
typeChecks = Array.from(typeChecks);

const templates = {
  'pago-movil': new StepTemplates(pagoMovilTemplate, onlineTemplate),
  transferencia: new StepTemplates(transferenciaTemplate, onlineTemplate),
  bolivares: new StepTemplates(bolivaresTemplate, cashTemplate),
  dolares: new StepTemplates(dolaresTemplate, cashTemplate), 
};

function initStepper() {
  stepper = new Stepper(document.querySelector('.bs-stepper'), {
    animation: true,
  })
}

function enableNextButton(idPrefix) {
  const nextButton = document.querySelector(`#${idPrefix}NextButton`);
  nextButton.removeAttribute('disabled');
}

function handleTypeCheckInput() {
  const checked = typeChecks.find(checkbox => checkbox.checked);
  setSteps(checked.value);
  enableNextButton('type');
}

function setSteps(value) {
  const { confirmTemplate, finalTemplate } = templates[value];
  document.querySelector('#confirmStep').innerHTML = confirmTemplate;
  document.querySelector('#finalStep').innerHTML = finalTemplate;
  updateStepperControls('#confirmStep');
}

function setControlListener(control) {
  control.onclick = () => stepper[control.dataset.stepper]();
}

function updateStepperControls(parent = 'body') {
  const stepperControls = document.querySelectorAll(`${parent} button[data-stepper]`);
  stepperControls.forEach(control => setControlListener(control));
}

function StepTemplates(confirmTemplate, finalTemplate) {
  this.confirmTemplate = confirmTemplate;
  this.finalTemplate = finalTemplate;
}

document.addEventListener('DOMContentLoaded', initStepper);
document.addEventListener('DOMContentLoaded', () => updateStepperControls());
  
modeChecks.forEach(checkbox => checkbox.addEventListener('input', () => enableNextButton('mode')));
typeChecks.forEach(checkbox => checkbox.addEventListener('input', handleTypeCheckInput));