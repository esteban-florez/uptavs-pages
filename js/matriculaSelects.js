const options = {
  width: '100%',
  minimumResultsForSearch: Infinity,
};

$(document).ready(() => {
  $('#inscripcionSelect').select2(options);
  $('#uptaSelect').select2(options);
  $('#solvenciaSelect').select2(options);
});