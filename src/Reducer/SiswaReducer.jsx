let nextId = 1;

export function studentReducer(draft, action) {
    switch (action.type) {
        case "ADD_DATA": {
            draft.push({
                id: nextId++,
                nama: action.nama,
                umur: action.umur,
                kelas: action.kelas
            });
            break;
        }

        case "DELETE_DATA": {
            return draft.filter(
                siswa => siswa.id !== action.id
            );
        }

        case "EDIT_DATA": {
            const siswa = draft.find(
                s => s.id === action.id
            );

            if (siswa) {
                siswa.nama = action.nama;
                siswa.umur = action.umur;
                siswa.kelas = action.kelas;
            }
            break;
        }

        default:
            break;
    }
}
