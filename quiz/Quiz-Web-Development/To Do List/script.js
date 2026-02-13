const daftarElemen = document.getElementById('list');
const tombolTambah = document.getElementById('tombolTambah');
const inputTask = document.getElementById('inputTask');

tombolTambah.addEventListener('click', function() {
    const tugas_baru = document.createElement('li');
    tugas_baru.textContent = inputTask.value;
    const tombolHapus = document.createElement('button');
    tombolHapus.textContent = 'x';
    tombolHapus.onclick = function() {
        daftarElemen.removeChild(tugas_baru);
    };
    tugas_baru.appendChild(tombolHapus);

    if (inputTask.value.trim() !== '') {
        daftarElemen.appendChild(tugas_baru);
    } else {
        alert('Masukan task terlebih dahulu!');
    }
    
    inputTask.value = '';
});