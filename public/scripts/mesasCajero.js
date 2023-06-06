//Mesa 1---------------------------
const button1 = document.getElementById('mesa_1');
async function presiono1() {
  try {
    if (button1.style.backgroundColor === 'red') {          
      try {
        button1.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () { 
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '1' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 2 ---------------------------------------------------------
const button2 = document.getElementById('mesa_2');
async function presiono2() {
  try {
    if (button2.style.backgroundColor === 'red') {          
      try {
        button2.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '3' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 3 ---------------------------------------------------------
const button3 = document.getElementById('mesa_3');
async function presiono3() {
  try {
    if (button3.style.backgroundColor === 'red') {          
      try {
        button3.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '5' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 4 ---------------------------------------------------------
const button4 = document.getElementById('mesa_4');
async function presiono4() {
  try {
    if (button4.style.backgroundColor === 'red') {          
      try {
        button4.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '7' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 5 ---------------------------------------------------------
const button5 = document.getElementById('mesa_5');
async function presiono5() {
  try {
    if (button5.style.backgroundColor === 'red') {          
      try {
        button5.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '9' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 6 ---------------------------------------------------------
const button6 = document.getElementById('mesa_6');
async function presiono6() {
  try {
    if (button6.style.backgroundColor === 'red') {          
      try {
        button6.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '11' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 7 ---------------------------------------------------------
const button7 = document.getElementById('mesa_7');
async function presiono7() {
  try {
    if (button7.style.backgroundColor === 'red') {          
      try {
        button7.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '13' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 8 ---------------------------------------------------------
const button8 = document.getElementById('mesa_8');
async function presiono8() {
  try {
    if (button8.style.backgroundColor === 'red') {          
      try {
        button8.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '15' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}

//Mesa 9 ---------------------------------------------------------
const button9 = document.getElementById('mesa_9');
async function presiono9() {
  try {
    if (button9.style.backgroundColor === 'red') {          
      try {
        button9.style.backgroundColor = 'green';
        Swal.fire('Modificado!', '', 'success');
        setTimeout(function () {
          location.reload();
        }, 1000);
        await axios.post('/user/WaiterVentas1', { formValues: '17' });
      } catch (error) {
        Swal.fire('Error', 'ERRO1', 'error');
      }
    } else {
      
    }
  } catch (error) {
    Swal.fire('Error', 'ERROR 2', 'error');
  }
}