import React, { useState } from 'react';
import styles from './TableNama.module.css';

const TableNama = () => {
  // State untuk menampung teks yang sedang diketik
  const [inputValue, setInputValue] = useState('');
  
  // State berupa Array untuk menampung daftar nama
  const [listNama, setListNama] = useState([]);

  // Logika Tambah Data
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (inputValue.trim() !== '') {
      // Masukkan nama ke dalam array listNama
      setListNama([...listNama, inputValue]);
      
      // Kosongkan kembali kolom input
      setInputValue('');
    }
  };

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>Pencatat Nama</h2>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className={styles.inputSection}>
        <input 
          type="text" 
          placeholder="Ketik nama di sini..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.addButton}>
          Tambah Nama
        </button>
      </form>

      {/* Tampilan Tabel */}
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.length > 0 ? (
            listNama.map((nama, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{nama}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>Belum ada data.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableNama;