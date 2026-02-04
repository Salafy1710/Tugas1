import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { SiswaReducer } from "../Reducer/SiswaReducer";
import "../styles/siswa.css";

export default function StudentTable() {
    const [students, dispatch] = useImmerReducer(SiswaReducer, []);
    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState("");
    const [kelas, setKelas] = useState("");
    const [editId, setEditId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (!nama || !umur || !kelas) return;

        if (editId === null) {
            dispatch({
                type: "ADD_DATA",
                nama,
                umur,
                kelas
            });
        } else {
            dispatch({
                type: "EDIT_DATA",
                id: editId,
                nama,
                umur,
                kelas
            });
            setEditId(null);
        }

        setNama("");
        setUmur("");
        setKelas("");
    }

    function handleEdit(siswa) {
        setNama(siswa.nama);
        setUmur(siswa.umur);
        setKelas(siswa.kelas);
        setEditId(siswa.id);
    }

    return (
        <div className="container">
            <h2>Manajemen Data Siswa</h2>

            <form className="form" onSubmit={handleSubmit}>
                <input
                    placeholder="Nama"
                    value={nama}
                    onChange={e => setNama(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Umur"
                    value={umur}
                    onChange={e => setUmur(e.target.value)}
                />
                <input
                    placeholder="Kelas"
                    value={kelas}
                    onChange={e => setKelas(e.target.value)}
                />
                <button type="submit">
                    {editId === null ? "Tambah" : "Update"}
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Kelas</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="empty">
                                Data masih kosong
                            </td>
                        </tr>
                    ) : (
                        students.map((siswa, index) => (
                            <tr key={siswa.id}>
                                <td>{index + 1}</td>
                                <td>{siswa.nama}</td>
                                <td>{siswa.umur}</td>
                                <td>{siswa.kelas}</td>
                                <td>
                                    <button
                                        className="edit"
                                        onClick={() => handleEdit(siswa)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete"
                                        onClick={() =>
                                            dispatch({
                                                type: "DELETE_DATA",
                                                id: siswa.id
                                            })
                                        }
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
