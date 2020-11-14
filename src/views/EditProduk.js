import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const EditProduk = (props) => {
    const { id } = useParams();
    const [error, setError] = useState();
    const redirect = useHistory();

    const [nama_produk, setNamaProduk] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [harga, setHarga] = useState();
    const [jumlah, setJumlah] = useState();

    const record = { nama_produk, keterangan, jumlah, harga };

    const getProdukByID = async () => {
        try {
            let response = await axios.get(`http://localhost:8080/api/produk/${id}`);
            setNamaProduk(response.data.data.nama_produk);
            setKeterangan(response.data.data.keterangan);
            setHarga(response.data.data.harga);
            setJumlah(response.data.data.jumlah);
        } catch (err) {
            console.log(err.message);
        }
    }

    const store = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            let response = await axios.put(`http://localhost:8080/api/produk/${id}`, record);
            redirect.push('/');
        } catch (err) {
            console.log(err.response.data);
        }
    }

    useEffect(() => {
        getProdukByID();
    }, [1])

    return (
        <div className="w-100 vh-100 bg-dark d-flex justify-content-center">
            <div style={{ width: '500px' }} className="card my-4">
                <div className="card-body">
                    <h3 className="font-weight-bold text-center py-4"><i><u>Edit Produk</u></i></h3>
                    <form onSubmit={store}>
                        <div className="form-group">
                            <label htmlFor="nama_produk">Nama Produk</label>
                            <input type="text" name="nama_produk" onChange={e => setNamaProduk(e.target.value)} value={nama_produk} id="nama_produk" className={`form-control ${error ? "is-invalid" : ""}`} required/>
                            {error ? <div className="invalid-feedback">Nama Produk minimal 4 Karakter</div> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="keterangan">Keterangan</label>
                            <textarea style={{ resize: 'none' }} name="keterangan" onChange={e => setKeterangan(e.target.value)} value={keterangan} id="keterangan" rows="3" className="form-control"></textarea>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="harga">Rp.</label>
                                <input type="number" name="harga" onChange={e => setHarga(e.target.value)} value={harga} id="harga" className="form-control" required/>
                            </div>
                            <div className="col">
                                <label htmlFor="jumlah">Jumlah</label>
                                <input type="number" onChange={e => setJumlah(e.target.value)} value={jumlah} name="jumlah" id="jumlah" className="form-control" required/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-block mt-4">Update</button>
                        <div className="text-center py-4">
                            <Link to="/">← Kembali ke Home.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduk;