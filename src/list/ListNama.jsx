import { useState } from "react";
import "../styles/list.css";

export default function ListNama() {
    const [inputValue, setInputValue] = useState("");
    const [listNama, setListNama] = useState([]);

    function handleTambah() {
        if (inputValue === "") return;

        setListNama([...listNama, inputValue]);
        setInputValue("");
    }

    return (
        <div className="container">
            <h2>Daftar Nama</h2>

            <div className="form">
                <input
                    type="text"
                    placeholder="Masukkan nama"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleTambah}>
                    Tambah Nama
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {listNama.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="empty">
                                Belum ada nama
                            </td>
                        </tr>
                    ) : (
                        listNama.map((nama, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{nama}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
